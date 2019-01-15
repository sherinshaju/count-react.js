import React, { Component } from 'react';


class Todoitems extends Component {
  render(){
    return(
      <div>
       <p>{this.props.data.name}</p>
        <p>{this.props.data.id}</p>
     </div>
    );
  }
}

export default Todoitems;
