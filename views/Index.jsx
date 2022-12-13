const React = require("react")
const DefaultLayout = require('./Default')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
}

class Index extends React.Component {
  render() {
    const { allPokemon } = this.props

    return (
      <DefaultLayout title={"See All The Pokemon"}>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        {/* <h1 style={myStyle}> See All The Pokemon </h1> */}
        <ul>
          {allPokemon.map((pokemon, i) => {
            return (
              <li>
                <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a><br></br>
                <a href={`/pokemon/${pokemon._id}/edit`}>Edit This Pokemon</a>
                <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            )
          })}
        </ul>
          <nav>
            <a href='/pokemon/new'>Catch a New Pokemon</a>
          </nav>
      </DefaultLayout>
    )
  }
}

module.exports = Index
