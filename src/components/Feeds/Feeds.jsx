import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Feed from './Feed'
import { Link } from 'react-router-dom'

const Feeds = () => {
    const [feedsArr, setFeedsArr] = useState([])
    useEffect(() => {

        axios.get('http://127.0.0.1:3000/api/v1/feeds.json')
            .then(resp => {
                setFeedsArr(resp.data)
                console.log(resp.data)
            })
            .catch(resp => console.log(resp))
    }, [feedsArr.length])

    const handleDestroy = (id, e) => {
        e.preventDefault()
        axios.delete(`http://127.0.0.1:3000/api/v1/feeds/${id}`)
            .then(resp => {
                const newfeeds = feedsArr.filter(feed => feed.id !== id)
                setFeedsArr(newfeeds)
            })
            .catch(resp => console.log(resp))
    }

    const grid = feedsArr.map(item => {
        return (
            <Feed
                key={item.id}
                attributes={item}
                handleDestroy={handleDestroy}
            />)
    })

    return (
        <div className='container-fluid'>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <h5 className="text-center">Total Feeds: {feedsArr.length}</h5>
                </div>

                <div className="col-span-6">
                    <h3 className="text-center">Showing All Feeds</h3>
                    {grid}
                    <div className="text-center my-4">
                        <Link to="/feeds/new" className="border-2 rounded-lg p-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600/75 hover:text-white basis-20 flex-initial">New Feed</Link>
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