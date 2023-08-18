import React, { useState } from 'react'
import axios from 'axios'
import Feed from './Feed'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'

const Feeds = () => {
    const [feedsArr, setFeedsArr] = useState([])
    useQuery('feeds', async () => {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/feeds.json`)
        return resp.data
    }, {
        onSuccess: (data) => {
            setFeedsArr(data)
        }
    })

    const deleteFeed = useMutation(async (id) => {
        const resp = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/feeds/${id}`)
        return id
    }, {
        onSuccess: (data) => {
            const newfeeds = feedsArr.filter(feed => feed.id !== data)
            setFeedsArr(newfeeds)
        }
    })

    const handleDestroy = (id, e) => {
        e.preventDefault()
        deleteFeed.mutate(id)
    }

    const grid = feedsArr.map((item, index) =>
    (
        <Feed
            key={item.id}
            attributes={item}
            index={index}
            handleDestroy={handleDestroy}
        />)
    )

    return (
        <div className='container-fluid'>
            <div className="grid lg:grid-cols-12 grid-cols-6 gap-4">

                <div className="col-span-3">
                    <h5 className="text-center">Total Feeds: {feedsArr.length}</h5>
                </div>

                <div className="col-span-6 lg:mx-0 mx-8">
                    <h3 className="text-center text-white text-4xl my-4 font-semibold">Showing All Feeds</h3>
                    {grid}
                    <div className="text-center my-4">
                        <Link to="/feeds/new" className="border-2 rounded-lg h-12 w-24 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600/75 text-zinc-400 hover:text-white inline-block">New Feed</Link>
                    </div>
                </div>

                <div className="col-span-3">
                    <h5 className="text-center">Total Feeds: {feedsArr.length}</h5>
                </div>
            </div>
        </div>
    )
}

export default Feeds;