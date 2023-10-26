import React, { useState, useRef, Fragment } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import ReactHtmlParser from 'react-html-parser';
import RenderGame from './DisplayGame';



const PlayGame = ({ temp }) => {
    const [game, setGame] = useState({})
    const params = useParams()
    const gameID = params.id


    useQuery(`project-${gameID}`, async () => {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/projects/${gameID}/iframe`)
        return resp.data
    }, {
        onSuccess: (data) => {
            setGame(data)
        }
    })

    return (
        <RenderGame game={game}></RenderGame>
    )
}

export default PlayGame;