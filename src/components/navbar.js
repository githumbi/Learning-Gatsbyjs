import React from 'react'
import { Link } from 'gatsby'

const navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/about'>about</Link> </li>
            <li><Link to='/company/company'>company</Link></li>
        </ul>
    </div>
  )
}

export default navbar