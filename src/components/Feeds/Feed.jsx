import { React, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player'

const Feed = (props) => {
    const mediaRefs = useRef([])
    let currMed = 0
    const imgFormats = ['jpg', 'jpeg', 'png', 'webp']
    const vidFormats = ['mp4', 'mov', 'mpeg', 'm4v', 'webm']

    const nextMedia = () => {
        currMed = (currMed === (props.attributes.media.length - 1) ? 0 : currMed + 1)
        changeMedia()
    }

    const prevMedia = () => {
        currMed = (currMed === 0 ? (props.attributes.media.length - 1) : currMed - 1)
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

    return (
        <div className="my-4 bg-zinc-200 rounded-lg shadow">

            <div className="block rounded-t-lg bg-zinc-300 px-8 py-4">
                <h5><small>by </small>Random User</h5>
            </div>
            <hr className="bg-zinc-500 border-0 h-px" />

            <div className="text-center px-8">
                <Link to={`/feeds/${props.attributes.id}`} className="text-2xl hover:underline my-2 inline-block">{props.attributes.title}</Link>
                <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                <p className="text-zinc-900 text-start my-4 line-clamp-2">{props.attributes.description}</p>
                <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
            </div>
            {props.attributes.media?.length > 0 && <div className='relative w-full h-[30rem] overflow-hidden cursor-default my-2'>
                <ChevronLeftIcon className='h-12 w-12 absolute z-10 top-1/2 -translate-y-1/2 left-4 hover:bg-zinc-400/50 rounded-full transition duration-300 cursor-pointer' onClick={prevMedia} />
                <ChevronRightIcon className='h-12 w-12 absolute z-10 top-1/2 -translate-y-1/2 right-4  hover:bg-zinc-400/50 rounded-full transition duration-300 cursor-pointer' onClick={nextMedia} />
                {props.attributes.media.map((item, index) => {
                    return <Fragment key={item.blob_id} >
                        {
                            imgFormats?.includes(get_url_extension(item.link)) &&
                            <div ref={(el) => (mediaRefs.current[index] = el)} className={'flex items-center justify-center w-full h-full -translate-x-1/2 absolute transition-all ease-in-out duration-700'} style={{ left: `${(index - currMed) * 100 + 50}%` }}>
                                <img className='object-contain max-h-full max-w-full w-full' src={item.link} />
                            </div>
                        }
                        {
                            vidFormats?.includes(get_url_extension(item.link)) &&
                            <div ref={(el) => (mediaRefs.current[index] = el)} className={'flex items-center justify-center w-full h-full -translate-x-1/2 absolute transition-all ease-in-out duration-700'} style={{ left: `${(index - currMed) * 100 + 50}%` }}>
                                <ReactPlayer url={item.link} className='object-contain max-h-full max-w-full w-full' width="80%" style={{ left: `${(index - currMed) * 100 + 50}%` }} controls />
                            </div>
                        }
                    </Fragment>
                })}
            </div>}

            <div className="flex flex-row justify-center text-center bg-light space-x-4 py-3">
                <Link to={`/feeds/${props.attributes.id}`} className="border-2 rounded-lg p-2 border-sky-600 bg-sky-600/[.20] transition duration-200 hover:bg-sky-600 hover:text-white basis-20 flex-initial">Show</Link>
                <Link to={`/feeds/${props.attributes.id}/edit`} className="border-2 rounded-lg p-2 border-green-600 bg-green-600/[.20] transition duration-200 hover:bg-green-600 hover:text-white basis-20 flex-initial">Edit</Link>
                <button className="border-2 rounded-lg p-2 px-4 border-red-600 bg-red-600/[.20] transition duration-200 hover:bg-red-600 hover:text-white basis-20 flex-initial" onClick={(e) => props.handleDestroy(props.attributes.id, e)}>Delete</button>
            </div>
        </div >

    )
}

export default Feed;