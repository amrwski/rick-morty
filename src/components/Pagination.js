import React from "react"
import { connect } from "react-redux"
import { fetchCharacters } from "../actions"

const Pagination = ({ characters, fetchCharacters }) => {
  const { info } = characters
  return (
    <>
      {info.prev && (
        <button
          className="ui inverted basic left floated button"
          onClick={() => fetchCharacters(info.prev.split("=").pop())}
        >
          Prev
        </button>
      )}
      {info.next && (
        <button
          className="ui inverted basic right floated button"
          onClick={() => fetchCharacters(info.next.split("=").pop())}
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
