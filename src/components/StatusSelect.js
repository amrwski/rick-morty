import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCharacters, searchStatus } from "../actions"
import "./StatusSelect.css"

class StatusSelect extends Component {
  setStatus = (e) => {
    const { searchStatus, fetchCharacters, term } = this.props

    searchStatus(e.target.value)
    fetchCharacters(null, term, e.target.value)
  }

  render() {
    return (
      <div className="ui segment radio-segment">
        <div className="ui form">
          <div className="inline fields radio-fields">
            <label>Status</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="status" defaultChecked value="" onChange={this.setStatus} />
                <label htmlFor="all">All</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="status" value="alive" onChange={this.setStatus} />
                <label>Alive</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="status" value="dead" onChange={this.setStatus} />
                <label>Dead</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="status" value="unknown" onChange={this.setStatus} />
                <label>Unknown</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { term: state.searchTerm.term, status: state.searchTerm.status }
}

export default connect(mapStateToProps, { fetchCharacters, searchStatus })(StatusSelect)
