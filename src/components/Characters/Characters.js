import React, { Component } from 'react'
import ControlBtn from '../ControlBtn/ControlBtn'
import FilterPanel from '../FilterPanel/FilterPanel'
import { connect } from 'react-redux'
import getCharactersFromServer from '../../redux/actions/getCharactersFromServer'
import incrementCharactersPage from '../../redux/actions/incrementCharactersPage'
import decrementCharactersPage from '../../redux/actions/decrementCharactersPage'
import getFilteredCharacters from '../../redux/actions/getFilteredCharacters'
import Card from './CharactersCard/Card'

import './characters.sass'

class Characters extends Component {
  componentDidMount() {
    this.props.getCharacters()
  }

  incrementPage() {
    this.props.incrementPage()
    if (this.props.filter.inputValue) {
      this.props.getFilteredCharacters(this.props.filter.inputValue, this.props.filter.type)
    } else {
      this.props.getCharacters()
    }
  }

  decrementPage() {
    this.props.decrementPage()
    if (this.props.filter.inputValue) {
      this.props.getFilteredCharacters(this.props.filter.inputValue, this.props.filter.type)
    } else {
      this.props.getCharacters()
    }
  }

  render() {
    return (
      <div className="chracters-page">
        <FilterPanel />
        <div className="characters-main-content">
          <ControlBtn text="prev" onClick={(e) => this.decrementPage()} />
          <div className="characters-card">
            {this.props.characters.map((character) => (
              <Card {...character} key={character.id} characterID={character.id} />
            ))}
          </div>
          <ControlBtn text="next" onClick={(e) => this.incrementPage()} />
        </div>
      </div>
    )
  }
}

const getStateToProps = (state) => {
  return {
    characters: state.addCharactersReducer,
    page: state.pageCounterReducer,
    filter: state.filterReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharactersFromServer()),
    incrementPage: () => dispatch(incrementCharactersPage()),
    decrementPage: () => dispatch(decrementCharactersPage()),
    getFilteredCharacters: (inputValue, searchParametr) => dispatch(getFilteredCharacters(inputValue, searchParametr)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(Characters)
