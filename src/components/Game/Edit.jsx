import React from "react";
import FormGame from "./Form";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { data } from "autoprefixer";

const EditGame = () => {
    const [game, setGame] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const gameID = params.id

    useQuery(`project-${gameID}`, async () => {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/projects/${gameID}.json`)
        return resp.data
    }, {
        onSuccess: (data) => {
            setGame(data)
        }
    })

    const editGame = (id, project) => {
        axios.patch(`${import.meta.env.VITE_API_URL}/api/v1/projects/${id}`, { project: project })
            .then(response => {
                setGame(project);
                navigate(`/games/${gameID}`, { state: { title: game.title, description: game.description, id: game.id, url: game.url } });
            })
            .catch(error => console.log(error),
                navigate(`/games/${gameID}`, { state: { title: game.title, description: game.description, id: game.id, url: game.url } }),
            )
    };

    const handleChange = (e) => {
        e.preventDefault()
        setGame({ ...game, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()

        for (var key in game) {
            formData.append(`projects[${key}]`, game[key]);
        }

        editGame(gameID, game)
        setLoading(false)
    }

    return (
        <div className="container mx-auto w-fit">
            <h3 className="text-center text-white text-4xl my-4 font-semibold" style={{ marginLeft: "75%", width: "30%" }}>Edit Game</h3>
            <FormGame
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
                game={game}
            />
            <div className="text-center">
                <Link to={`/games`} className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 text-zinc-400 hover:text-white inline-block" style={{ marginLeft: "80%" }}>Back to Games</Link>
            </div>
        </div>
    )
}

export default EditGame;