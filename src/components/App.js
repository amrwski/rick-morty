import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import CharacterList from "./CharacterList"
import CharacterDetail from "./CharacterDetail"
import EpisodeList from "./EpisodeList"

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={CharacterList} />
        <Route path="/:characterId" exact component={CharacterDetail} />
        <Route path="/:characterId/episodes" component={EpisodeList} />
      </BrowserRouter>
    </div>
  )
}

export default App
