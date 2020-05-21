import React from "react"
import CharacterList from "./CharacterList"
import CharacterDetail from "./CharacterDetail"

const App = () => {
  return (
    <div className="ui container">
      <CharacterList />
      <CharacterDetail />
    </div>
  )
}

export default App
