import React, { useState, useRef, Fragment } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'


const Feed = () => {
    const [feed, setFeed] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const mediaRefs = useRef([])
    const feedID = params.id

    useQuery(`feed-${feedID}`, async () => {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/feeds/${feedID}.json`)
        return resp.data
    }, {
        onSuccess: (data) => {
            setFeed(data)
        }
    })

    const deleteFeed = useMutation(async () => {
        const resp = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/feeds/${feedID}`)
        return resp.data
    }, {
        onSuccess: () => {
            navigate("/feeds")
        }
    })

    const handleDestroy = (e) => {
        e.preventDefault()
        deleteFeed.mutate()
    }

    let currMed = 0
    const imgFormats = ['jpg', 'jpeg', 'png', 'webp']
    const vidFormats = ['mp4', 'mov', 'mpeg', 'm4v', 'webm']

    const nextMedia = () => {
        currMed = (currMed === (feed.media.length - 1) ? 0 : currMed + 1)
        changeMedia()
    }

    const prevMedia = () => {
        currMed = (currMed === 0 ? (feed.media.length - 1) : currMed - 1)
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
        <div className="container mx-auto max-w-screen-lg">
            <h3 className="text-center">Showing Feed</h3>
            <div className="col my-4 bg-zinc-200 rounded-lg shadow" style={{ marginLeft: "40%", width: "80%" }}>

                <div className="col col-3 block rounded-t-lg bg-zinc-300 px-8 py-4">
                    <h5><small>by </small>Random User</h5>
                </div>
                <hr className="bg-zinc-500 border-0 h-px" />

                <div className="text-center px-8">
                    <Link to={`/feeds/${feed.id}`} className="text-2xl hover:underline my-2 inline-block">{feed.title}</Link>
                    <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                    <p className="text-zinc-900 text-start my-4">{feed.description}</p>
                    <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                </div>
                {feed.media?.length > 0 && <div className='relative w-full h-[30rem] overflow-hidden cursor-default my-2'>
                    <ChevronLeftIcon className='h-12 w-12 absolute z-10 top-1/2 -translate-y-1/2 left-10 hover:bg-zinc-400/50 rounded-full transition duration-300 cursor-pointer' onClick={prevMedia} />
                    <ChevronRightIcon className='h-12 w-12 absolute z-10 top-1/2 -translate-y-1/2 right-10 hover:bg-zinc-400/50 rounded-full transition duration-300 cursor-pointer' onClick={nextMedia} />
                    {feed.media.map((item, index) => {
                        return <Fragment key={item.blob_id}>
                            {
                                (imgFormats?.includes(get_url_extension(item.link))) &&
                                <div ref={(el) => (mediaRefs.current[index] = el)} className="flex items-center justify-center w-full h-full -translate-x-1/2 absolute transition-all ease-in-out duration-700" style={{ left: `${(index - currMed) * 100 + 50}%` }}>
                                    <img className='object-contain max-h-full max-w-full w-full' src={item.link} />
                                </div>
                            }
                            {
                                (vidFormats?.includes(get_url_extension(item.link))) &&
                                <div ref={(el) => (mediaRefs.current[index] = el)} className="flex items-center justify-center w-full h-full -translate-x-1/2 absolute transition-all ease-in-out duration-700" style={{ left: `${(index - currMed) * 100 + 50}%` }}>
                                    <ReactPlayer url={item.link} className='object-contain max-h-full max-w-full w-full' width="80%" style={{ left: `${(index - currMed) * 100 + 50}%` }} controls />
                                </div>
                            }
                        </Fragment>
                    })}
                </div>}

                <div className="col-2 flex flex-row justify-center text-center bg-light space-x-4 py-3">
                    <Link to={`/feeds/${feed.id}/edit`} className="border-2 rounded-lg p-2 border-green-600 bg-green-600/[.20] transition duration-200 hover:bg-green-600 hover:text-white basis-20 flex-initial">Edit</Link>
                    <button className="border-2 rounded-lg p-2 px-4 border-red-600 bg-red-600/[.20] transition duration-200 hover:bg-red-600 hover:text-white basis-20 flex-initial" onClick={handleDestroy}>Delete</button>
                </div>
            </div >
            <div className="text-center">
                <Link to={`/feeds`} className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 text-zinc-400 hover:text-white inline-block" style={{ marginLeft: "60%" }}>Back to Feeds</Link>
            </div>
        </div >
    )
}

export default Feed;