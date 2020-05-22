import React from "react"
import { connect } from "react-redux"
import { fetchCharacters } from "../actions"

const Pagination = ({ characters, fetchCharacters }) => {
  if (!characters.info) {
    return null
  } else if (characters.info.prev && characters.info.next) {
    return (
      <>
        <button
          className="ui inverted basic left floated button"
          onClick={() => fetchCharacters(characters.info.prev.split("=").pop())}
        >
          Prev
        </button>
        <button
          className="ui inverted basic right floated button"
          onClick={() => fetchCharacters(characters.info.next.split("=").pop())}
        >
          Next
        </button>
      </>
    )
  } else if (!characters.info.prev && characters.info.next) {
    return (
      <button
        className="ui inverted basic right floated button"
        onClick={() => fetchCharacters(characters.info.next.split("=").pop())}
      >
        Next
      </button>
    )
  } else if (characters.info.prev && !characters.info.next) {
    return (
      <button
        className="ui inverted basic left floated button"
        onClick={() => fetchCharacters(characters.info.prev.split("=").pop())}
      >
        Prev
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(Pagination)
