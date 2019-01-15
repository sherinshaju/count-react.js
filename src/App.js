import React, { Component } from 'react';

class App extends Component {
    state = {
      count : 0
    }
    
 incrementCount = () => {
   this.setState({
     count: this.state.count +1
   });
 }
 decrementCount =() =>{
   this.setState({
     count: this.state.count -1
   });
 }

  render() {

    return(
      <div>

      <p class="ml-5">{ this.state.count }</p>
      <button type="button" class="btn btn-primary ml-4" onClick={this.incrementCount}>+</button>
      <button type="button" class="btn btn-info ml-4"  onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}
export default App;
