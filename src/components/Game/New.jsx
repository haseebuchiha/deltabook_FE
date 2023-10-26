import React from "react";
import FormGame from "./Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import { useMutation } from "react-query";

const NewGame = () => {
    const [game, setGame] = useState()
    const [gameFile, setGameFile] = useState()
    const [loading, setLoading] = useState(false)
    const { mutate } = useMutation(async (data) => {
        const resp = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/projects`, data, { headers: { "Content-Type": "multipart/form-data", } })
        return resp.data
    }, {
        onSuccess: data => {
            navigate(`/games/${data.id}`)
        }
    })

    const handleChange = (e) => {
        e.preventDefault()
        setGame({ ...game, [e.target.name]: e.target.value })
    }

    const handleFile = (e) => {
        setGame({ ...game, file: e.target.files[0] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData()
        for (var key in game) {
            formData.append(`${key}`, game[key]);
        }

        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/projects`, formData, { headers: { "Content-Type": "multipart/form-data", } })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container mx-auto w-fit">
            <h3 className="text-center text-white text-4xl my-4 font-semibold" style={{ marginLeft: "70%", width: "40%" }}>Create new Game</h3>

            <form onSubmit={handleSubmit} className="shadow p-8 my-4 bg-zinc-200 rounded-lg flex flex-col items-center lg:w-[50rem] w-[30rem]" style={{ marginLeft: "40%" }}>
                <div className="mb-4 mt-2 flex align-top w-full">
                    <label className="text-zinc-900 font-semibold inline-block w-48">Game Title: </label>
                    <textarea onChange={handleChange} rows="1" minLength="3" maxLength="30" className="shadow rounded p-2 text-zinc-900 resize-none w-full" name="title" placeholder="Write title here" />
                </div>

                <div className="mb-4 mt-2 flex align-top w-full">
                    <label className="text-zinc-900 font-semibold inline-block w-48">Description:</label>
                    <textarea onChange={handleChange} rows="5" minLength="10" maxLength="1024" className="shadow rounded p-2 text-zinc-900 resize-none w-full" name="description" placeholder="Write description here" />
                </div>

                <div className="mb-4 mt-2 flex align-top w-full">
                    <label className="text-zinc-900 font-semibold inline-block w-48">Attach Game File:</label>
                    <input
                        type="file"
                        className="text-zinc-900 w-full"
                        accept=".jsx, .js, .html, .html.erb"
                        name="file"
                        onChange={handleFile}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 hover:text-white text-zinc-900 disabled:pointer-events-none disabled:cursor-not-allowed" disabled={loading}>Submit</button>

                </div>
            </form>

            <div className="text-center">
                <Link to={`/games`} className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 text-zinc-400 hover:text-white inline-block" style={{ marginLeft: "80%" }}>Back to Games</Link>
            </div>
        </div>
    )
}

export default NewGame