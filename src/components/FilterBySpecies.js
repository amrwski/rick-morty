import React from "react"
import { connect } from "react-redux"
import uniq from "lodash/uniq"

const FilterBySpecies = ({ characters }) => {
  if (!characters.results) {
    return null
  }
  const speciesArr = () => {
    const species = []
    characters.results.forEach((sp) => species.push(sp.species))
    return uniq(species)
  }

  console.log(speciesArr())
  return <div>filter</div>
}

const mapStateToProps = (state) => {
  return { characters: state.characters }
}

export default connect(mapStateToProps)(FilterBySpecies)
