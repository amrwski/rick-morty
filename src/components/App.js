import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import CharacterList from "./CharacterList"
import CharacterDetail from "./CharacterDetail"

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={CharacterList} />
        <Route path="/:characterId" component={CharacterDetail} />
      </BrowserRouter>
    </div>
  )
}

export default App
