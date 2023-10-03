
import React from "react";
import "./App.css";
import Profil from "./composant/Profil";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
     show:true
    };
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
 
  render() {
    return (
     <div className="pos app"> 
    
     <button type="button" className="btn" onClick={this.handleClick}>
            Show Me
          </button>
         <div> {this.state.show ? (
          
            <Profil show={this.state.show} />
          
        ) : null}
        </div>
     </div>
     
    );
  }
}
export default App;

