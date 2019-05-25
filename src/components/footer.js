import React from "react"
import PropTypes from "prop-types"

const Footer = ({socialLinks, copyright}) => {
  const links = socialLinks.map(
    ({src, alt, href}) => 
      <a key={href} href={href}>
        <img
          className="p-1 w-10 h-10"
          src={require(`~assets/images/icons/${src}`)}
          alt={alt}
        />
      </a>
  )
  return <footer className="px-6 lg:px-8 py-3 text-sm flex items-center">
    {links}
    <span className="flex-grow"/>
    <span>{copyright} © {new Date().getFullYear()}</span>
  </footer>
}

Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    href: PropTypes.string,
    alt: PropTypes.string,
  })),
  copyright: PropTypes.string
}

Footer.defaultProps = {
  socialLinks: [],
  copyright: ''
}

export default Footer

