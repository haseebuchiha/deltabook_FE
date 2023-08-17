import React from "react";
import FormFeed from "./Form";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

const EditFeed = () => {
    const [feed, setFeed] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const [media, setMedia] = useState([])
    const [loading, setLoading] = useState(false)
    const feedID = params.id

    useQuery(`feed-${feedID}`, async () => {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/feeds/${feedID}.json`)
        return resp.data
    }, {
        onSuccess: (data) => {
            setFeed(data)
        }
    })

    const editFeed = useMutation(async (data) => {
        const resp = await axios.patch(`${import.meta.env.VITE_API_URL}/api/v1/feeds/${feedID}`, data, { headers: { "Content-Type": "multipart/form-data", } })
        return resp.data
    }, {
        onSuccess: data => {
            navigate(`/feeds/${data.id}`)
        }
    })

    const deleteMedia = useMutation(async (id) => {
        const resp = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/feed_media/${id}/purge_later`)
        return resp.data
    }, {
        onSuccess: data => {
            const newMedia = feed.media.filter(item => item.blob_id != data.id)
            setFeed({
                ...feed,
                media: newMedia
            })
        }
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFeed({ ...feed, [e.target.name]: e.target.value })
    }

    const handleMediaChange = (e) => {
        setMedia([...e.target.files])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()

        for (var key in feed) {
            formData.append(`feed[${key}]`, feed[key]);
        }
        formData.delete('feed[media]')
        media.forEach((item, index) => (
            formData.append('feed[media][]', item)
        ))
        editFeed.mutate(formData)
        setLoading(false)
    }

    const handleMediaDelete = (id) => {
        deleteMedia.mutate(id)
    }

    return (
        <div className="container mx-auto w-fit">
            <h3 className="text-center text-white text-4xl my-4 font-semibold">Edit Feed</h3>
            <FormFeed
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleMedia={handleMediaChange}
                handleMediaDelete={handleMediaDelete}
                loading={loading}
                feed={feed}
            />
            <div className="text-center">
                <Link to={`/feeds`} className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 text-zinc-400 hover:text-white inline-block">Back to Feeds</Link>
            </div>
        </div>
    )
}

export default EditFeed;