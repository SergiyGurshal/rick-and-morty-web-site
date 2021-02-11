import React from 'react'
import portalImg from '../../img/portal.png'

import './control-btn.sass'

export default function ControlBtn({ text, onClick }) {
  return (
    <div className="control-btn">
      <img src={portalImg} className="portal-image" onClick={onClick} />
      <p className="control-btn-title">{text}</p>
    </div>
  )
}
