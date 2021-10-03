import React from 'react'
import { Link } from 'react-router-dom'

export default ({ title, img_main, slug }) => (
  <Link to={`/posts/${slug}`}>
    <div className="menu__item">
      <span className="menu__item-link">{ title }</span>
      <img className="menu__item-img" src={img_main} alt="Some image" />
      <div className="marquee">
        <div className="marquee__inner" aria-hidden="true">
          <span>{ title }</span>
          <span>{ title }</span>
          <span>{ title }</span>
          <span>{ title }</span>
        </div>
      </div>
    </div>
  </Link>
)