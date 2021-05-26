import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.scss'
// import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../icons/Logo/logo'
import { mapStateToProps, mapDispatchToProps } from '../../utils/propsMapper'

// import { LanguageSelector } from "./languageSelector";

export const NavbarComponent = props => {
  return (
    <>
      <header>
        <Navbar expand='lg'>
          <Link to='/'>
            <Navbar.Brand className='d-flex align-items-center justify-content-center mr-0'>
              <div className='login-header'>
                <Logo fontSize='28px' className='headerName-logo' />
                <span>{'HYDROCARBON'}</span>
              </div>
              {/* <div >
              <Logo fontSize="28px" />
              <span className="headerName">{t("appName")}</span>
            </div> */}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <label className='navbarLabel'>{/* <span>Admin</span> */}</label>

          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="justify-content-end ml-auto navbarOptions"
              activeKey="/home"
            >
              <Nav.Link href="/">{t("home")}</Nav.Link>
              <Nav.Link href="/about">{t("about")}</Nav.Link>
              <Nav.Link href="/diagnosis">{t("diagnosis")}</Nav.Link>
              <Nav.Link href="/sitemap">{t("sitemap")}</Nav.Link>
              <Nav.Link href="/contactus">{t("contact")}</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
        {/* <LanguageSelector i18n={i18n}/> */}
      </header>
    </>
  )
}

export default NavbarComponent
