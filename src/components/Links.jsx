import React from 'react'
import {Link } from 'react-router-dom'
const Links = (props) => {
  return (
    <Link to ={props.url} className='text-xs font-poppins underline text-gray-900 dark:text-gray-200'>
        {props.text}
    </Link>
  )
}

export default Links