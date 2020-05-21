import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCharacters, selectCharacter } from "../actions"
import "./CharacterList.css"

class CharacterList extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  renderList() {
    const { characters, selectCharacter } = this.props

    return characters.map((char) => {
      return (
        <div className="ui segment" key={char.id}>
          <div className="item">
            <img className="ui image" src={char.image} alt="character avatar" />
            <div className="content">
              <div className="description">
                <h3>{char.name}</h3>
                <p>Species: {char.species}</p>
                <p>Status: {char.status}</p>
                <p>Date created: {char.created}</p>
              </div>
              <button className="ui button primary" onClick={() => selectCharacter(char)}>
                Details
              </button>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps, { fetchCharacters, selectCharacter })(CharacterList)
