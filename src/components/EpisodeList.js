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

    return (
      <div className="ep-list ui segment">
        {episodes.length > 1 ? (
          episodes.map((ep) => (
            <div key={ep.id} className="ui celled list">
              <div className="item">
                <div className="content">
                  <div className="header">{ep.episode}</div>
                  <div>{ep.name}</div>
                  <div>{ep.air_date}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="ui celled list">
            <div className="item">
              <div className="content">
                <div className="header">{episodes.episode}</div>
                <div>{episodes.name}</div>
                <div>{episodes.air_date}</div>
              </div>
            </div>
          </div>
        )}
        <div className="btn-container">
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
