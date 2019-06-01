import React from "react"

const Footer = ({socialLinks, copyright}) => {
  const links = socialLinks.map(
    ({src, alt, href}) => 
      <a key={href} href={href}>
        <img
          className="p-1 w-10 h-10"
          src={require(`~assets/icons/${src}`)}
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

export default Footer

