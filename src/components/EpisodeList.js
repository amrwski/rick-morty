import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchEpisodes } from "../actions"
import "./EpisodeList.css"

class EpisodeList extends Component {
  appearsInEpisodes() {
    const extractedEpisodeId = /\d+/g
    const episodeArr = []
    return this.props.character.episode.map((ep) =>
      parseInt(episodeArr.push(...ep.match(extractedEpisodeId)))
    )
  }

  componentDidMount() {
    this.props.fetchEpisodes(this.appearsInEpisodes())
  }

  renderEpisodeList() {
    const { character, episodes } = this.props
    console.log(episodes)

    return (
      <div className="ep-list ui container">
        <div className="ep-list ui segment">
          <div className="list">
            {episodes.map((ep) => (
              <ul key={ep.id}>{ep.name}</ul>
            ))}
          </div>
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
