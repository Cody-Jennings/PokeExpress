const React = require('react')

class New extends React.Component {
    render() {
      return (
        <div>
          <link rel="stylesheet" type="text/css" href="../css/style.css"/>
          <h1>Catch a New Pokemon</h1>
          <form action='/pokemon' method='POST'>
            Name: <input type='text' name='name' placeholder="Search..."/>
            <br />
            <input type='submit' name='' value='Catch this Pokemon' />
          </form>
          <a href="/pokemon">Back to Pokedex</a>
        </div>
      )
    }
  }
  
  module.exports = New