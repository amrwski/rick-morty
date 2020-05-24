import React, { Component } from "react"
import { connect } from "react-redux"
import { searchSpecies, filterSpecies } from "../actions"

class SpeciesSearch extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.filterSpecies(this.props.term)
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
          <i onClick={this.handleSubmit} className="circular search link icon"></i>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { term: state.searchTerm.term }
}

export default connect(mapStateToProps, { searchSpecies, filterSpecies })(SpeciesSearch)
