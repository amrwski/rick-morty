import React, { Component } from "react"
import { connect } from "react-redux"
import { searchSpecies } from "../actions"

class SpeciesSearch extends Component {
  render() {
    console.log(this.props.term)

    return (
      <div>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search species..."
            onChange={(e) => this.props.searchSpecies(e.target.value)}
          />
          <i className="circular search link icon"></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { characters: state.characters.results, term: state.searchTerm.term }
}

export default connect(mapStateToProps, { searchSpecies })(SpeciesSearch)
