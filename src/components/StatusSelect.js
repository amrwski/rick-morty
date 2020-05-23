import React, { Component } from "react"
import { connect } from "react-redux"
import "./StatusSelect.css"

class StatusSelect extends Component {
  render() {
    return (
      <div className="ui segment radio-segment">
        <div className="ui form radio-form">
          <div className="inline fields radio-fields">
            <label>Status</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" />
                <label>All</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" />
                <label>Alive</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Dead</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Unknown</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {}

export default connect(null, {})(StatusSelect)
