const React = require("react")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../css/style.css"/>
                <h1 style={myStyle}> Gotta Catch 'Em All </h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={'http://img.pokemondb.net/artwork/' + pokemon.name.toLowerCase() + ".jpg"} ></img>
                <br/>
                <a href='/pokemon/new'>Catch a New Pokemon</a> | <a href="/pokemon">Back to Pokedex</a>
            </div>
        )
    }
}

module.exports = Show
