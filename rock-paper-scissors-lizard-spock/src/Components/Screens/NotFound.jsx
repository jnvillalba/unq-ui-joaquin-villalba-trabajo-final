import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const goToMainScreen = () => navigate('/')
    return(
        <div className='mainscreen text-center'>
            <h1 className='mainscreen-title'> Page not found </h1>
            <div className='text-center'>
                <button className='mainButton' onClick={goToMainScreen}>Go To Main Screen</button>
            </div>
        </div>
    )
  }

export default NotFound