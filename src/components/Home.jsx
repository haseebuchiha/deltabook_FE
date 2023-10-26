import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query'
import { Link } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([]);
  const [feedsData, setFeedsData] = useState([])

  useQuery('projects', async () => {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/projects`)
    return resp.data
  }, {
    onSuccess: (data) => {
      setData(data)
    }
  })

  useQuery('feeds', async () => {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/feeds`)
    return resp.data
  }, {
    onSuccess: (data) => {
      setFeedsData(data)
    }
  })

  const games = data.map((item, index) =>
  (
    <Link key={item.id} to={`games/${item.id}`} state={{ title: item.title, description: item.description, id: item.id, url: item.url }} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1 ml-1' >{item.title}</Link>
  ))

  const feeds = feedsData.map((item, index) =>
  (
    <Link key={item.id} to={`feeds/${item.id}`} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1 ml-1' >{item.title}</Link>
  ))

  const homeStyles = {
    marginTop: '5rem',
    color: 'white',
    // alignItems: "center",
    // justifyContent: "center",
    marginLeft: "50%"
  };

  return (
    <div style={homeStyles} className='text-center'>
      <h1 className="h-10 text-zinc-100 text-2xl font-bold mb-2">Available Games</h1>
      {games}
      <h1 className="h-10 text-zinc-100 text-2xl font-bold mb-2 mt-10">Available Feeds</h1>
      {feeds}
    </div>
  );
}

