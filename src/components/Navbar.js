import { useNavigate, useLocation } from "react-router-dom";
//CRA transforms svg files so it exports a React Components  hence why it must be imported this way
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {

  // initialise hooks
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return ( 
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <ExploreIcon 
              fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p 
              className={
                pathMatchRoute('/')
                  ? 'nabarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore 
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <OfferIcon 
              fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p 
              className={
                pathMatchRoute('/offer')
                  ? 'nabarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon 
              fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p 
              className={
                pathMatchRoute('/profile')
                  ? 'nabarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>

          <li className='navbarListItem' onClick={() => navigate('/sign-in')}>
            <PersonOutlineIcon 
              fill={pathMatchRoute('/sign-in') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p 
              className={
                pathMatchRoute('/sign-in')
                  ? 'nabarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Sign in
            </p>
          </li>

          <li className='navbarListItem' onClick={() => navigate('/sign-up')}>
            <PersonOutlineIcon 
              fill={pathMatchRoute('/sign-up') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p 
              className={
                pathMatchRoute('/sign-up')
                  ? 'nabarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Sign Up
            </p>
          </li>
        </ul>
      </nav>
    </footer>

  )
}

export default Navbar;