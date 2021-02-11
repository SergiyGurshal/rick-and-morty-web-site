import React, { Component } from 'react'
import { connect } from 'react-redux'

import getFilteredCharactersFromServer from '../../redux/actions/getFilteredCharacters'
import resetCharactersPage from '../../redux/actions/resetCharactersPage'
import setCharactersFilter from '../../redux/actions/setCharactersFilter'
import getCharactersFromServer from '../../redux/actions/getCharactersFromServer'

import './filter-panel.sass'

class FilterPanel extends Component {
  state = {
    status: false,
    species: true,
    gender: false,
    inputValue: '',
  }

  onSpeciesBtnClick = () => {
    if (this.state.species) {
      this.setState({ species: !this.state.species })
    } else {
      this.setState({ species: true })
      this.setState({ status: false })
      this.setState({ gender: false })
    }
  }

  onStatusBtnClick = () => {
    if (this.state.status) {
      this.setState({ status: !this.state.species })
    } else {
      this.setState({ status: true })
      this.setState({ species: false })
      this.setState({ gender: false })
    }
  }

  onGenderBtnClick = () => {
    if (this.state.gender) {
      this.setState({ gender: !this.state.species })
    } else {
      this.setState({ gender: true })
      this.setState({ status: false })
      this.setState({ species: false })
    }
  }

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  searchCharacters = () => {
    if (this.state.inputValue) {
      const searchParametr = this.state.species ? 'species' : this.state.status ? 'status' : 'gender'
      this.props.getFilteredCharacters(this.state.inputValue, searchParametr)
      this.props.setCharactersFilter({ inputValue: this.state.inputValue, type: searchParametr })
      this.props.resetCharactersPage()
    } else {
      this.props.getCharacters()
    }
  }

  render() {
    return (
      <div className="filter-panel">
        <p className="filter-panel-title">Filter by:</p>
        <button
          className={this.state.species ? 'filter-panel-button-enabled' : 'filter-panel-button'}
          onClick={this.onSpeciesBtnClick}
        >
          species
        </button>
        <button
          className={this.state.status ? 'filter-panel-button-enabled' : 'filter-panel-button'}
          onClick={this.onStatusBtnClick}
        >
          status
        </button>
        <button
          className={this.state.gender ? 'filter-panel-button-enabled' : 'filter-panel-button'}
          onClick={this.onGenderBtnClick}
        >
          gender
        </button>
        <input type="text" className="filter-panel-input" onChange={this.onInputChange} />

        <button className={'filter-panel-button'} onClick={this.searchCharacters}>
          search
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharactersFromServer()),
    getFilteredCharacters: (inputValue, searchParametr) => dispatch(getFilteredCharactersFromServer(inputValue, searchParametr)),
    resetCharactersPage: () => dispatch(resetCharactersPage()),
    setCharactersFilter: (filter) => dispatch(setCharactersFilter(filter)),
  }
}

export default connect(null, mapDispatchToProps)(FilterPanel)
