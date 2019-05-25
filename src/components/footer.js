import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import twitter from "~assets/images/icons/twitter.svg"
import github from "~assets/images/icons/github.svg"

const Footer = ({  }) => (
  <footer className="px-6 lg:px-8 py-3 text-sm flex items-center">
    <a href="//twitter.com/adrianscript">
      <img className="p-1 w-10 h-10" src={twitter} alt="Twitter" />
    </a>
    <a href="//github.com/arrocke">
      <img className="p-1 w-10 h-10" src={github} alt="Github" />
    </a>
    <span className="flex-grow"/>
    <span>Adrian Rocke © 2019</span>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer

