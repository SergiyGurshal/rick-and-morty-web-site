import React, { Component } from 'react'
import { connect } from 'react-redux'
import setModalVisibility from '../../redux/actions/setModalVisibility'

import './modal.sass'

class Modal extends Component {
  getCharacterByID = () => {
    for (const character of this.props.characters) {
      if (character.id == this.props.characterID) return character
    }
  }

  render() {
    return (
      <div className={this.props.visibility ? 'modal active' : 'modal'} onClick={() => this.props.setVisibility(false)}>
        {this.getCharacterByID() ? (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={this.getCharacterByID().image} className="modal-image" />
            <div className="modal-info">
              <p className="modal-name-info">{`Name: ${this.getCharacterByID().name}`}</p>
              <p className="modal-status-info">{`Status: ${this.getCharacterByID().status}`}</p>
              <p className="modal-species-info">{`Species: ${this.getCharacterByID().species}`}</p>
              <p className="modal-type-info">{`Type: ${this.getCharacterByID().type}`}</p>
              <p className="modal-gender-info">{`Gender: ${this.getCharacterByID().gender}`}</p>
              <p className="modal-location-info">{`Location: ${this.getCharacterByID().location.name}`}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

const getStateToProps = (state) => {
  return {
    visibility: state.modalReducer.active,
    characters: state.addCharactersReducer,
    characterID: state.modalReducer.characterID,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility: (visibilyty) => dispatch(setModalVisibility(visibilyty)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(Modal)
