import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (<>
    <div className='header'>
        <Link to="/" style={{ textDecoration: 'none', color:"white"  }}><h3>CINEVERSE</h3></Link>
        <div className="categories">
            <Link id='category' to="/movies/popular" style={{ textDecoration: 'none', color:"white" }}>Popular</Link>
            <Link id='category' to="/movies/top_rated" style={{ textDecoration: 'none', color:"white"  }}>Top Rated</Link>
            <Link id='category' to="/movies/upcoming" style={{ textDecoration: 'none', color:"white"  }}>Upcoming</Link>
        </div>
    </div>

    </>
  )
}

export default Header