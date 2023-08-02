import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Feed = (props) => {

    return (
        <div className="col px-8 py-4 my-4 bg-grey-200 rounded-lg shadow">
            <div className="row">

                <div className="col col-3 bg-dark d-flex align-items-center">
                    <span className="text-sm font-light text-gray-600">{moment(props.attributes.created_at).isValid()}</span>
                    <h5 className="mb-3"><small>by</small><br />Random User</h5>
                </div>

                <div className="text-center">
                    <Link to={`/feed/${props.attributes.id}`} className="text-2xl hover:underline">{props.attributes.title}</Link>
                    <hr />
                    <p className="text-slate-900 text-start my-4">{props.attributes.description}</p>
                </div>
                <div className="col-2 flex flex-row justify-center text-center bg-light space-x-4 py-3">
                    <Link to={`/feed/${props.attributes.id}`} className="border-2 rounded-lg p-2 border-sky-600 bg-sky-600/[.20] transition duration-200 hover:bg-sky-600/50 basis-20 flex-initial">Show</Link>
                    <Link to={`/feed/${props.attributes.id}/edit`} className="border-2 rounded-lg p-2 border-green-600 bg-green-600/[.20] transition duration-200 hover:bg-green-600/50 basis-20 flex-initial">Edit</Link>
                    <button className="border-2 rounded-lg p-2 px-4 border-red-600 bg-red-600/[.20] transition duration-200 hover:bg-red-600/50 basis-20 flex-initial" onClick={(e) => props.handleDestroy(props.attributes.id, e)}>Delete</button>
                </div>
            </div>
        </div >

    )
}

export default Feed;