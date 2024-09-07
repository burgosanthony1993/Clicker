import React from 'react';

class App extends React.Component {
  state = {
    randomClickNumber: 0 //Initialize the randomnum with 0
  }
  
//Function to handle button click and update the state
  randomizeClick = () => {
   this.setState(() => ({
    randomClickNumber: Math.floor(Math.random() * 10) + 1
    }));
  }




  render (){
  //Define a variable to store conditional content using the ternary operator
  const buttonOrMessage = this.state.randomClickNumber !== 7? (
    <button onClick={this.randomizeClick}>Random Number</button>
    ) : (
    <p>you win!</p>
    )
  return(
    <div>
      <h1>Number is {this.state.randomClickNumber}</h1>
      {buttonOrMessage}
    </div>
   )
  }

}


export default App;
