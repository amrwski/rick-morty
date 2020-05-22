import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchEpisodes } from "../actions"
import "./EpisodeList.css"

class EpisodeList extends Component {
  appearsInEpisodes() {
    const extractedEpisodeId = /\d+/g
    const episodeArr = []
    this.props.character.episode.map((ep) => episodeArr.push(...ep.match(extractedEpisodeId)))
    return episodeArr
  }

  componentDidMount() {
    this.props.fetchEpisodes(this.appearsInEpisodes())
  }

  renderEpisodeList() {
    const { character, episodes } = this.props

    const arrayCheck = () =>
      episodes.length > 1 ? episodes.map((ep) => <ul key={ep.id}>{ep.name}</ul>) : episodes.name

    return (
      <div className="ep-list ui container">
        <div className="ep-list ui segment">
          <div className="list">{arrayCheck()}</div>
          <NavLink to={`/${character.id}`}>
            <button className="ui basic button">Back</button>
          </NavLink>
        </div>
      </div>
    )
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderEpisodeList()}</div>
  }
}

const mapStateToProps = (state) => {
  return { character: state.selectedCharacter, episodes: state.episodes }
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodeList)
