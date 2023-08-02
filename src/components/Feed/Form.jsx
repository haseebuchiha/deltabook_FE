import React from "react";

const FormFeed = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="shadow p-8 my-4 bg-zinc-200 rounded-lg flex flex-col items-center">
            <div className="mb-4 mt-2 flex align-top">
                <label className="text-zinc-900 font-semibold inline-block w-36">Feed Title: </label>
                <textarea onChange={props.handleChange} rows="1" cols="80" minLength="3" maxLength="30" className="shadow rounded p-2 text-zinc-900 resize-none" value={props.feed.title} name="title" placeholder="Write title here" />
            </div>

            <div className="mb-4 mt-2 flex align-top">
                <label className="text-zinc-900 font-semibold inline-block w-36">Description:</label>
                <textarea onChange={props.handleChange} rows="5" cols="80" minLength="10" maxLength="1024" className="shadow rounded p-2 text-zinc-900 resize-none" value={props.feed.description} name="description" placeholder="Write description here" />
            </div>

            <div className="text-center">
                <button type="submit" className="border-2 rounded-lg h-12 px-4 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600 hover:text-white text-zinc-900" >Submit</button>
            </div>
        </form>
    )
}

export default FormFeed;