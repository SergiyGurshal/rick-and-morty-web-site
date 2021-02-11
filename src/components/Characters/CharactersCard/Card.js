import React, { Component } from 'react'
import { connect } from 'react-redux'
import setModalVisibility from '../../../redux/actions/setModalVisibility'
import setCharactersID from '../../../redux/actions/setCharactersID'

import './card.sass'

class Card extends Component {
  showModal = () => {
    this.props.setVisibility(true)
    this.props.setCharactersID(this.props.characterID)
  }

  render() {
    return (
      <div className="card" onClick={this.showModal}>
        <img src={this.props.image} alt="charcters avatar" className="charcters-avatar" />
        <p className="card-title">{this.props.name}</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility: (visibilyty) => dispatch(setModalVisibility(visibilyty)),
    setCharactersID: (id) => dispatch(setCharactersID(id)),
  }
}

export default connect(null, mapDispatchToProps)(Card)
