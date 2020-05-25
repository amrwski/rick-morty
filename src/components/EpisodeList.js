import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchCharacter, fetchEpisodes } from "../actions"
import "./EpisodeList.css"

class EpisodeList extends Component {
  componentDidMount() {
    const { fetchCharacter, fetchEpisodes, match } = this.props

    fetchCharacter(match.params.characterId)
    fetchEpisodes(this.appearsInEpisodes())
  }

  appearsInEpisodes() {
    const { character } = this.props
    if (!character.episode) {
      return null
    }
    const extractedEpisodeId = /\d+/g
    return character.episode.map((ep) => ep.match(extractedEpisodeId))
  }

  renderEpisodeList() {
    const { episodes, match } = this.props
    const episodeList = Array.isArray(episodes) ? episodes : [episodes]

    return (
      <div className="ep-list ui segment">
        {episodeList.map((ep) => (
          <div key={ep.id} className="ui celled list">
            <div className="item">
              <div className="content">
                <div className="header">{ep.episode}</div>
                <div>{ep.name}</div>
                <div>{ep.air_date}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="btn-container">
          <NavLink to={`/${match.params.characterId}`}>
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
  return { character: state.character, episodes: state.episodes }
}

export default connect(mapStateToProps, { fetchCharacter, fetchEpisodes })(EpisodeList)
