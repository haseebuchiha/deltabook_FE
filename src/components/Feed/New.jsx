import React from "react";
import FormFeed from "./Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import { useMutation } from "react-query";

const NewFeed = () => {
    const [feed, setFeed] = useState({})
    const [media, setMedia] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { mutate } = useMutation(async (data) => {
        const resp = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/feeds`, data, { headers: { "Content-Type": "multipart/form-data", } })
        return resp.data
    }, {
        onSuccess: data => {
            navigate(`/feeds/${data.id}`)
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
        media.forEach((item, index) => (
            formData.append('feed[media][]', item)
        ))
        mutate(formData)
        setLoading(false)
    }

    return (
        <div className="container">
            <h3 className="text-center text-white text-4xl my-4 font-semibold" style={{ marginLeft: "65%" }}>Create new Feed</h3>
            <FormFeed
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleMedia={handleMediaChange}
                loading={loading}
                feed={feed}
            />
            <div className="text-center">
                <Link to={`/feeds`} className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 text-zinc-400 hover:text-white inline-block" style={{ marginLeft: "65%" }}>Back to Feeds</Link>

            </div>
        </div>
    )
}

export default NewFeed;