import React from "react"
import { connect } from "react-redux"

const CharacterDetail = ({ character }) => {
  if (!character) {
    return null
  }
  console.log(character)
  return (
    <div>
      <h3>Details for:</h3>
      <p>Gender: {character.gender} </p>
      {/* <p>Origin: {character.origin}</p> */}
      {/* <p>Episode: {character.episode}</p> */} */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { character: state.selectedCharacter }
}

export default connect(mapStateToProps)(CharacterDetail)
