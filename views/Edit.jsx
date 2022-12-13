const React = require('react')
const DefaultLayout = require('./Default')

class Edit extends React.Component{
    render() {
      const { pokemon } = this.props
      return (
        <DefaultLayout title="Edit Pokemon">  
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>    
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
        <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={pokemon.name}/><br/>
            <input type="submit" value="Submit Changes"/>
        </form>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit