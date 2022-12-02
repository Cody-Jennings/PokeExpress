const React = require("react")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

const bodyStyle = {
    backgroundColor: "rgb(43, 122, 226)"
}

class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <body style={bodyStyle}></body>
                <h1 style={myStyle}> Gotta Catch 'Em All </h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img + ".jpg"}></img>
                <a href="/pokemon">Back</a>
            </div>
        )
    }
}

module.exports = Show;
