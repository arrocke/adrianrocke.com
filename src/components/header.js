import { Link } from "gatsby"
import React, { useState } from "react"

const Header = ({siteTitle, navLinks}) => {
  const [menuVisible, setMenuVisibility] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const toggleMenu = e => {
    e.stopPropagation()
    setTransitioning(true)
    setMenuVisibility(visible => !visible)
  }

  const hideMenu = () => {
    setTransitioning(true)
    setMenuVisibility(false)
  }

  const onKeyDown = e => {
    if (e.key === 'Escape') {
      hideMenu()
    }
  }

  const links = navLinks.map(
    ({name, to}) =>
      <Link key={to} to={to} className="nav-link">{name.toUpperCase()}</Link>
  )

  return <header className="flex px-6 py-4 sm:py-6 lg:p-8 items-end">
    <span className="text-2xl xs:text-3xl leading-none font-bold mb-2">
      {siteTitle.toUpperCase()}
    </span>
    <div className="flex-grow h-12" />
    <nav
      onClick={hideMenu}
      onTransitionEnd={() => setTransitioning(false)}
      className="z-20"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="relative mb-2 w-10 h-10 bg-menu bg-no-repeat bg-bottom z-10 lg:hidden"
        onClick={toggleMenu}
        aria-label="toggle menu"
        aria-expanded={menuVisible}
        aria-haspopup="true"
      />
      <div
        className={`
          fixed flex flex-col items-center bg-black justify-center inset-0
          lg:static lg:inset-auto lg:my-0 lg:pb-0 lg:opacity-100 lg:visible lg:flex-row 
          ${menuVisible ? '' : 'invisible opacity-0'}
          ${transitioning ? 'transition-opacity' : ''}
        `}
        hidden={!menuVisible}
      >
        {links}
      </div>
    </nav>
  </header>
}

export default Header
