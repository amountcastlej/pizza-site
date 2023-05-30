import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const Home = () => {
    const [list, setList] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3000/api/allGames')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    })


  return (
    <div className='container-fluid'>
        <h1>Welcome to the Video Game Lounge</h1>
        <Link to={'/create'}>Create Game</Link>
        <div>
            {
                list.map((game, i)=> {
                    <div key={i}>
                        <img src={game.img} alt="" />    
                        <p>Video Game Title: {game.title}</p>
                        <p>{game.desc}</p>
                        <p>{game.console}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Home