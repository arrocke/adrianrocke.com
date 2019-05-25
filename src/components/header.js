import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headshot from "~assets/images/headshot.jpg"

const Header = ({siteTitle, navLinks}) => {
  const [menuVisible, setMenuVisibility] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const toggleMenu = () => {
    setTransitioning(true)
    setMenuVisibility(visible => !visible)
  }

  const hideMenu = () => {
    setTransitioning(true)
    setMenuVisibility(false)
  }

  const links = navLinks.map(
    ({name, to}) =>
      <Link to={to} className="nav-link">{name.toUpperCase()}</Link>
  )

  return <header className="flex px-6 py-4 sm:py-6 lg:p-8 items-end">
    <img
      src={headshot}
      alt="Adrian Rocke's face"
      className="h-12 rounded-full mr-4"
    />
    <span className="text-xl xs:text-3xl leading-none font-bold mb-2 mr-2">
      {siteTitle.toUpperCase()}
    </span>
    <div className="flex-grow h-12" />
    <button
      type="button"
      className="mb-2 w-10 h-10 z-10 bg-menu bg-no-repeat bg-bottom lg:hidden"
      onClick={toggleMenu}
      aria-label="toggle menu"
    />
    <nav
      className={`fixed inset-0 lg:inset-auto lg:static lg:mt-0 lg:opacity-100 lg:visible ${menuVisible ? '' : 'invisible opacity-0'} ${transitioning ? 'transition-opacity' : ''}`}
      onClick={hideMenu}
      onTransitionEnd={() => setTransitioning(false)}
    >
      <div
        className="h-full flex flex-col items-center bg-black justify-center overflow-y-hidden lg:flex-row lg:pin-none lg:mb-0 lg:pb-0"
      >
        {links}
      </div>
    </nav>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  navLinks: PropTypes.arrayOf({
    name: PropTypes.string,
    to: PropTypes.string
  })
}

Header.defaultProps = {
  siteTitle: ``,
  navLinks: []
}

export default Header
