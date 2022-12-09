const React = require('react')

class New extends React.Component {
    render() {
      return (
        <div>
          <link rel="stylesheet" type="text/css" href="../css/style.css"/>
          <h1>New Pokemon page</h1>
          <form action='/pokemon' method='POST'>
            Name: <input type='text' name='name' />
            <br />
            Img url: <input type='text' name='img' />
            <br />
            <input type='submit' name='' value='Add a new Pokemon' />
          </form>
        </div>
      )
    }
  }
  
  module.exports = New