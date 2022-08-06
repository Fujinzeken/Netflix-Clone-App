import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false: true)
        return ()=> window.onscroll = null
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
          <div className='left'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png?20190206123158' alt='netflix.png'></img>
              <Link to="/" style={{color:"inherit", textDecoration: "none"}}>
              <span>Homepage</span>
              </Link>
              <Link to="/series" style={{color:"inherit", textDecoration: "none"}}>
              <span className="navbarmainLinks">Series</span>
              </Link>
              <Link to="/movies" style={{color:"inherit", textDecoration: "none"}}>
              <span className="navbarmainLinks">Movies</span>
              </Link>
              <span>New and Popular</span>
              <span>My list</span>
          </div>
          <div className='right'>
              <Search className='icon'/>
              <span>KID</span>
              <Notifications className='icon' />
              <img src='https://pbs.twimg.com/profile_images/1532618436907499520/5_AaS2TX_400x400.jpg' alt='My-img'></img>
              <div className='profile'>
              <ArrowDropDown className='icon'/>
              <div className='options'>
                  <span>
                      settings
                  </span>
                  <Link to="/login" style={{color:"inherit", textDecoration: "none"}}>
                  <span >
                      Logout
                  </span>
                  </Link>
              </div>

              </div>
              
          </div>
          
      </div>
    </div>
  )
}

export default Navbar

