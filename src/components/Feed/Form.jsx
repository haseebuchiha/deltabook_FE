import { React, useRef, Fragment } from "react";
import { TrashIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ReactPlayer from "react-player";

const FormFeed = (props) => {
    const mediaRefs = useRef([])
    let currMed = 0
    const imgFormats = ['jpg', 'jpeg', 'png', 'webp']
    const vidFormats = ['mp4', 'mov', 'mpeg', 'm4v', 'webm']

    const nextMedia = () => {
        currMed = (currMed === (props.feed.media.length - 1) ? 0 : currMed + 1)
        changeMedia()
    }

    const prevMedia = () => {
        currMed = (currMed === 0 ? (props.feed.media.length - 1) : currMed - 1)
        changeMedia()
    }

    const changeMedia = () => {
        mediaRefs.current?.forEach((item, index) => {
            item.style.left = `${(index - currMed) * 100 + 50}%`
        })
    }

    const get_url_extension = (url) => {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    const confirmMediaDelete = (id, index) => {
        if (confirm("The media will be deleted even if you do not save the feed. Are you sure?")) {
            props.handleMediaDelete(id)
        }
    }

    return (
        <form onSubmit={props.handleSubmit} className="shadow p-8 my-4 bg-zinc-200 rounded-lg flex flex-col items-center lg:w-[50rem] w-[30rem]">
            <div className="mb-4 mt-2 flex align-top w-full">
                <label className="text-zinc-900 font-semibold inline-block w-48">Feed Title: </label>
                <textarea onChange={props.handleChange} rows="1" minLength="3" maxLength="30" className="shadow rounded p-2 text-zinc-900 resize-none w-full" value={props.feed.title} name="title" placeholder="Write title here" />
            </div>

            <div className="mb-4 mt-2 flex align-top w-full">
                <label className="text-zinc-900 font-semibold inline-block w-48">Description:</label>
                <textarea onChange={props.handleChange} rows="5" minLength="10" maxLength="1024" className="shadow rounded p-2 text-zinc-900 resize-none w-full" value={props.feed.description} name="description" placeholder="Write description here" />
            </div>

            {(props.feed.media?.length > 0) &&
                <div className='relative w-full h-[30rem] mx-8 overflow-hidden cursor-default my-2'>
                    <ChevronLeftIcon className='h-12 w-12 absolute z-10 top-1/2 -translate-y-1/2 left-4 hover:bg-zinc-400/50 rounded-full transition duration-300 cursor-pointer' onClick={prevMedia} />
                    <ChevronRightIcon className='h-12 w-12 absolute z-10 top-1/2 -translate-y-1/2 right-4 hover:bg-zinc-400/50 rounded-full transition duration-300 cursor-pointer' onClick={nextMedia} />
                    {props.feed.media.map((item, index) => {
                        return <Fragment key={item.blob_id} > {
                            (imgFormats?.includes(get_url_extension(item.link))) &&
                            <div ref={(el) => (mediaRefs.current[index] = el)} className="flex items-center justify-center w-full h-full -translate-x-1/2  absolute transition-all ease-in-out duration-700" style={{ left: `${(index - currMed) * 100 + 50}%` }}>
                                <img className='object-contain max-h-full max-w-full w-full' src={item.link} />
                                <TrashIcon className="absolute top-10 right-5 h-10 w-10 bg-zinc-300/25 rounded-lg hover:bg-zinc-600/50 cursor-pointer" onClick={() => confirmMediaDelete(item.blob_id)} />
                            </div>
                        }
                            {
                                (vidFormats?.includes(get_url_extension(item.link))) &&
                                <div ref={(el) => (mediaRefs.current[index] = el)} className="flex items-center justify-center w-full h-full -translate-x-1/2 absolute transition-all ease-in-out duration-700" style={{ left: `${(index - currMed) * 100 + 50}%` }}>
                                    <ReactPlayer url={item.link} className='object-contain max-h-full max-w-full w-full' width="80%" style={{ left: `${(index - currMed) * 100 + 50}%` }} controls />
                                    <TrashIcon className="absolute top-10 right-5 h-10 w-10 text-zinc-500 bg-zinc-300/25 rounded-lg hover:bg-zinc-600/50 cursor-pointer" onClick={() => confirmMediaDelete(item.blob_id)} />
                                </div>
                            }
                        </Fragment>
                    })}
                </div>}

            <div className="mb-4 mt-2 flex align-top w-full">
                <label className="text-zinc-900 font-semibold inline-block w-48">Attach Media files:</label>
                <input
                    type="file"
                    className="text-zinc-900 w-full"
                    accept=".jpg, .jpeg, .png, .webp, .mp4, .mov, .mpeg, .m4v, .webm"
                    multiple
                    name="media"
                    onChange={props.handleMedia} />
            </div>

            <div className="text-center">
                <button type="submit" className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 hover:text-white text-zinc-900 disabled:pointer-events-none disabled:cursor-not-allowed" disabled={props.loading}>Submit</button>

            </div>
        </form>
    )
}

export default FormFeed;