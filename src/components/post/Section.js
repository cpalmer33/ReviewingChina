import React from 'react'
import img10 from "../../static/images/10.jpg"

export default ({ body, title, img, judgment }) => (
  
  <div className="grid__item">
    <span className="grid__item-number">{ title }</span>
    <img className="grid__item-img" src={img} alt="Some image" />
    {/* <h3 className="grid__item-title">{ title }</h3> */}
    <div dangerouslySetInnerHTML={{__html:body}} className="grid__item-description"></div>
    <div>{judgment}</div>
  </div>
)
