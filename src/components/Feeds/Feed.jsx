import React from "react";
import { Link } from "react-router-dom";

const Feed = (props) => {
    return (
        <div className="my-4 bg-zinc-200 rounded-lg shadow">

            <div className="block rounded-t-lg bg-zinc-300 px-8 py-4">
                <h5><small>by </small>Random User</h5>
            </div>
            <hr className="bg-zinc-500 border-0 h-px" />

            <div className="text-center px-8">
                <Link to={`/feeds/${props.attributes.id}`} className="text-2xl hover:underline my-2 inline-block">{props.attributes.title}</Link>
                <hr className="border-0 h-px bg-transparent bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-25" />
                <p className="text-zinc-900 text-start my-4 line-clamp-2">{props.attributes.description}</p>
            </div>

            <div className="flex flex-row justify-center text-center bg-light space-x-4 py-3">
                <Link to={`/feeds/${props.attributes.id}`} className="border-2 rounded-lg p-2 border-sky-600 bg-sky-600/[.20] transition duration-200 hover:bg-sky-600 hover:text-white basis-20 flex-initial">Show</Link>
                <Link to={`/feeds/${props.attributes.id}/edit`} className="border-2 rounded-lg p-2 border-green-600 bg-green-600/[.20] transition duration-200 hover:bg-green-600 hover:text-white basis-20 flex-initial">Edit</Link>
                <button className="border-2 rounded-lg p-2 px-4 border-red-600 bg-red-600/[.20] transition duration-200 hover:bg-red-600 hover:text-white basis-20 flex-initial" onClick={(e) => props.handleDestroy(props.attributes.id, e)}>Delete</button>
            </div>
        </div >

    )
}

export default Feed;