import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchCharacter } from "../actions"
import "./CharacterDetail.css"

class CharacterDetail extends Component {
  componentDidMount() {
    const { fetchCharacter, match } = this.props

    fetchCharacter(match.params.characterId)
  }

  render() {
    const { character } = this.props
    if (!character.name) {
      return null
    }

    return (
      <div className="char-detail ui container">
        <div className="char-detail ui segment">
          <div className="avatar">
            <img className="ui image" src={character.image} alt="user avatar" />
          </div>
          <div className="info">
            <div className="char-name">{character.name}</div>
            <div>Gender: {character.gender}</div>
            <div>Origin: {character.origin.name}</div>
            <div>
              <NavLink to={`/${character.id}/episodes`}>
                <button className="ui basic button">List of episodes</button>
              </NavLink>
            </div>
          </div>
          <div className="btn-container">
            <NavLink to={"/"}>
              <button className="back ui basic button">Back </button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { character: state.character }
}

export default connect(mapStateToProps, { fetchCharacter })(CharacterDetail)
