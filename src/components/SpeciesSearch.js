import React, { Component } from "react"
import { connect } from "react-redux"
import { searchSpecies, filterCharacters } from "../actions"

class SpeciesSearch extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.filterCharacters(this.props.term)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search species..."
            onChange={(e) => this.props.searchSpecies(e.target.value)}
          />
          <i className="circular search link icon"></i>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { characters: state.characters.results, term: state.searchTerm.term }
}

export default connect(mapStateToProps, { searchSpecies, filterCharacters })(SpeciesSearch)
