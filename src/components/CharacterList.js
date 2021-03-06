import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchCharacters } from "../actions"
import Pagination from "./Pagination"
import SpeciesSearch from "./SpeciesSearch"
import StatusSelect from "./StatusSelect"
import DateSelect from "./DateSelect"
import { dateParser } from "../utils/dateParser"
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

    return characters.results.slice(0, 10).map((char) => {
      return (
        <div className="ui segment" key={char.id}>
          <div className="item">
            <img className="ui image" src={char.image} alt="character avatar" />
            <div className="content">
              <div className="description">
                <h3>{char.name}</h3>
                <p>Species: {char.species}</p>
                <p>Status: {char.status}</p>
                <p>Date created: {dateParser(char.created)}</p>
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
        <div className="filters">
          <SpeciesSearch />
          <StatusSelect />
        </div>
        <div className="date-select">
          <DateSelect />
        </div>
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
