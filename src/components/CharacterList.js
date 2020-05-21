import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCharacters } from "../actions"

class CharacterList extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    return <div>CharList</div>
  }
}

export default connect(null, { fetchCharacters })(CharacterList)
