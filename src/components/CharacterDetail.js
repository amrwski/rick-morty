import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import "./CharacterDetail.css"

const CharacterDetail = ({ character }) => {
  if (!character) {
    return null
  }
  console.log(character)
  return (
    <div className="char-detail ui container">
      <div className="char-detail ui segment">
        <div className="avatar">
          <img className="ui image" src={character.image} alt="user avatar" />
        </div>
        <div className="info">
          <h2>{character.name}</h2>
          <div>Gender: {character.gender}</div>
          <div>Origin: {character.origin.name}</div>
          <div>Episodes</div>
        </div>
        <NavLink to="/">
          <button className="ui basic button">Back </button>
        </NavLink>
      </div>
    </div>
  )
}

/* <p>Gender: {character.gender} </p> */
/* <p>Origin: {character.origin}</p> */
/* <p>Episode: {character.episode}</p> */

const mapStateToProps = (state) => {
  return { character: state.selectedCharacter }
}

export default connect(mapStateToProps)(CharacterDetail)
