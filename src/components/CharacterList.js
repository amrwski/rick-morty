import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCharacters } from "../actions"

class CharacterList extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    console.log(this.props.characters)
    return <div>CharList</div>
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList)
