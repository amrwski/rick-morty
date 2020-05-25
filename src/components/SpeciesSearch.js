import React, { Component } from "react"
import { connect } from "react-redux"
import { searchSpecies, fetchCharacters } from "../actions"

class SpeciesSearch extends Component {
  handleChange = (species) => {
    const { searchSpecies, fetchCharacters, status } = this.props

    searchSpecies(species)
    fetchCharacters(null, species, status)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search species..."
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <i onClick={this.handleSubmit} className="circular search link icon"></i>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { term, status } = state.searchTerm
  return { term, status }
}

export default connect(mapStateToProps, { searchSpecies, fetchCharacters })(SpeciesSearch)
