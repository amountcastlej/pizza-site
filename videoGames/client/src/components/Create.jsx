import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [console, setConsole] = useState('')
    const [desc, setDesc] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/create', {
            title, 
            img,
            console,
            desc
        }).then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log('caught an error on front end', err)
        })
    }

  return (
    <div>
        <h1>Create a Video Game</h1>
        <form onSubmit={submitHandler}>
            <label className='form-label'>Title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label className='form-label'>Image:</label>
            <input type="text" value={img} onChange={(e)=>setImg(e.target.value)}/>
            <label className='form-label'>Console:</label>
            <input type="text" value={console} onChange={(e)=>setConsole(e.target.value)}/>
            <label className='form-label'>Description:</label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <button>Create Game</button>
        </form>
    </div>
  )
}

export default Create