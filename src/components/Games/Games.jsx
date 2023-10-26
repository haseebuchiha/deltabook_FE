import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query'
import Game from './Game'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

function Games() {
    const [data, setData] = useState([]);

    useQuery('projects', async () => {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/projects`)
        console.log(resp)
        return resp.data
    }, {
        onSuccess: (data) => {
            setData(data)
        }
    })

    const deleteProject = (id) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/projects/${id}`)
            .then(response => {
                const newData = data.filter(item => item.id !== id);
                setData(newData);
            })
            .catch(error => console.log(error));
    };

    const grid = data.map((item, index) =>
    (
        <Game
            key={item.id}
            attributes={item}
            index={index}
            handleDestroy={deleteProject}
        />)
    )

    return (
        <div className='container-fluid'>
            <div className="">


                <div className="lg:mx-2 mx-8">
                    <h3 className="text-center text-white text-4xl my-4 font-semibold" style={{ marginLeft: "60%" }}>Showing All Games</h3>
                    {grid}
                    <div className="text-center my-4">
                        <Link to="/games/new" className="border-2 rounded-lg h-12 w-24 py-2 border-neutral-600 bg-neural-600/[.20] transition duration-200 hover:bg-neutral-600/75 text-zinc-400 hover:text-white inline-block" style={{ marginLeft: "60%" }}>New Game</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Games;