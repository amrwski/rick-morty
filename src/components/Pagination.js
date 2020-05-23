import React from "react"
import { connect } from "react-redux"
import { fetchCharacters } from "../actions"

const Pagination = ({ characters, fetchCharacters }) => {
  return (
    <>
      {characters.info.prev && (
        <button
          className="ui inverted basic left floated button"
          onClick={() => fetchCharacters(characters.info.prev.split("=").pop())}
        >
          Prev
        </button>
      )}
      {characters.info.next && (
        <button
          className="ui inverted basic right floated button"
          onClick={() => fetchCharacters(characters.info.next.split("=").pop())}
        >
          Next
        </button>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(Pagination)
