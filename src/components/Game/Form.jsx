import { React, useRef, Fragment } from "react";
import { TrashIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ReactPlayer from "react-player";

const FormGame = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className="shadow p-8 my-4 bg-zinc-200 rounded-lg flex flex-col items-center lg:w-[50rem] w-[30rem]" style={{ marginLeft: "40%" }}>
            <div className="mb-4 mt-2 flex align-top w-full">
                <label className="text-zinc-900 font-semibold inline-block w-48">Game Title: </label>
                <textarea onChange={props.handleChange} rows="1" minLength="3" maxLength="30" className="shadow rounded p-2 text-zinc-900 resize-none w-full" value={props.game.title} name="title" placeholder="Write title here" />
            </div>

            <div className="mb-4 mt-2 flex align-top w-full">
                <label className="text-zinc-900 font-semibold inline-block w-48">Description:</label>
                <textarea onChange={props.handleChange} rows="5" minLength="10" maxLength="1024" className="shadow rounded p-2 text-zinc-900 resize-none w-full" value={props.game.description} name="description" placeholder="Write description here" />
            </div>

            <div className="mb-4 mt-2 flex align-top w-full">
                <label className="text-zinc-900 font-semibold inline-block w-48">Attach Media files:</label>
                <input
                    type="file"
                    className="text-zinc-900 w-full"
                    accept=".jsx, .js, .html, .html.erb, .css"
                    multiple
                    name="file"
                />
            </div>

            <div className="text-center">
                <button type="submit" className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 hover:text-white text-zinc-900 disabled:pointer-events-none disabled:cursor-not-allowed" disabled={props.loading}>Submit</button>

            </div>
        </form>
    )
}

export default FormGame;