import React, { useState, useRef, Fragment } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';


const Game = () => {
    const [game, setGame] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const mediaRefs = useRef([])
    const gameID = params.id
    const location = useLocation()

    const deleteGame = useMutation(async () => {
        const resp = await axios.delete(`${import.meta.env.VITE_API_URL}/projects/${gameID}`)
        return resp.data
    }, {
        onSuccess: () => {
            navigate("/games")
        }
    })

    const handleDestroy = (e) => {
        e.preventDefault()
        deleteGame.mutate()
    }

    return (
        <div className="container mx-auto max-w-screen-lg">
            <h3 className="text-center">Showing Game</h3>
            <div className="col my-4 bg-zinc-200 rounded-lg shadow" style={{ marginLeft: "40%", width: "80%" }}>

                <div className="col col-3 block rounded-t-lg bg-zinc-300 px-8 py-4">
                    <h5><small>by </small>Random User</h5>
                </div>
                <hr className="bg-zinc-500 border-0 h-px" />

                {<div>
                    <div className="text-center px-8">
                        <h2 className="text-2xl hover:underline my-2 inline-block">{location.state.title}</h2>
                        <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                        <p className="text-zinc-900 text-start my-4">{location.state.description}</p>
                        <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                    </div>

                    <div className="col-2 flex flex-row justify-center text-center bg-light space-x-4 py-3">
                        <Link to={`/games/${gameID}/edit`} className="border-2 rounded-lg p-2 border-green-600 bg-green-600/[.20] transition duration-200 hover:bg-green-600 hover:text-white basis-20 flex-initial">Edit</Link>
                        <button className="border-2 rounded-lg p-2 px-4 border-red-600 bg-red-600/[.20] transition duration-200 hover:bg-red-600 hover:text-white basis-20 flex-initial" onClick={handleDestroy}>Delete</button>
                        <Link to={`/games/${gameID}/play`} className="border-2 rounded-lg p-2 border-sky-600 bg-sky-600/[.20] transition duration-200 hover:bg-sky-600 hover:text-white basis-20 flex-initial">Play</Link>
                    </div>
                </div>
                }
            </div >
            <div className="text-center">
                <Link to={`/games`} className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 text-zinc-400 hover:text-white inline-block" style={{ marginLeft: "60%" }}>Back to Games</Link>
            </div>
        </div >
    )
}

export default Game;