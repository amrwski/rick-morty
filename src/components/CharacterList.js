import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchCharacters } from "../actions"
import Pagination from "./Pagination"
import SpeciesSearch from "./SpeciesSearch"
import "./CharacterList.css"

class CharacterList extends Component {
  componentDidMount() {
    this.props.fetchCharacters()
  }

  renderCharacterList() {
    const { characters } = this.props

    if (!characters.results) {
      return null
    }

    return characters.results.map((char) => {
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
              <NavLink to={`/${char.id}`}>
                <button className="ui basic button">Details</button>
              </NavLink>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <SpeciesSearch />
        {this.renderCharacterList()}
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList)
