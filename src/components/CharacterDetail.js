import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectCharacter } from "../actions"
import "./CharacterDetail.css"

class CharacterDetail extends Component {
  findCharacter = () =>
    this.props.characters.find((char) => char.id === parseInt(this.props.match.params.characterId))

  componentDidMount() {
    this.props.selectCharacter(this.findCharacter())
  }

  render() {
    const { selectedCharacter } = this.props
    if (!selectedCharacter) {
      return null
    }
    return (
      <div className="char-detail ui container">
        <div className="char-detail ui segment">
          <div className="avatar">
            <img className="ui image" src={selectedCharacter.image} alt="user avatar" />
          </div>
          <div className="info">
            <div className="char-name">{selectedCharacter.name}</div>
            <div>Gender: {selectedCharacter.gender}</div>
            <div>Origin: {selectedCharacter.origin.name}</div>
            <div>
              <NavLink to={`/${selectedCharacter.id}/episodes`}>
                <button className="ui basic button">List of episodes</button>
              </NavLink>
            </div>
          </div>
          <div className="btn-container">
            <NavLink to="/">
              <button className="back ui basic button">Back </button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { characters: state.characters.results, selectedCharacter: state.selectedCharacter }
}

export default connect(mapStateToProps, { selectCharacter })(CharacterDetail)
