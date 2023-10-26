import { React, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPlayer from 'react-player'

const Game = (props) => {

    return (
        <div className="my-4 bg-zinc-200 rounded-lg shadow" style={{ marginLeft: "40%", width: "80%" }}>

            <div className="block rounded-t-lg bg-zinc-300 px-8 py-4">
                <h5><small>by </small>Random User</h5>
            </div>
            <hr className="bg-zinc-500 border-0 h-px" />

            <div className="text-center px-8">
                <Link to={`/games/${props.attributes.id}`} className="text-2xl hover:underline my-2 inline-block">{props.attributes.title}</Link>
                <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                <p className="text-zinc-900 text-start my-4 line-clamp-2">{props.attributes.description}</p>
                <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
            </div>

            <div className="flex flex-row justify-center text-center bg-light space-x-4 py-3">
                <Link to={`/games/${props.attributes.id}`} state={{ title: props.attributes.title, description: props.attributes.description, id: props.attributes.id, url: props.attributes.url }} className="border-2 rounded-lg p-2 border-sky-600 bg-sky-600/[.20] transition duration-200 hover:bg-sky-600 hover:text-white basis-20 flex-initial">Show</Link>
                <Link to={`/games/${props.attributes.id}/edit`} className="border-2 rounded-lg p-2 border-green-600 bg-green-600/[.20] transition duration-200 hover:bg-green-600 hover:text-white basis-20 flex-initial">Edit</Link>
                <button className="border-2 rounded-lg p-2 px-4 border-red-600 bg-red-600/[.20] transition duration-200 hover:bg-red-600 hover:text-white basis-20 flex-initial" onClick={(e) => props.handleDestroy(props.attributes.id, e)}>Delete</button>
            </div>
        </div >

    )
}

export default Game;