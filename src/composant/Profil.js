import React, { Component } from 'react'
import '../App.css'
export class Profil extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Hamroun Adel",
            profession: "Engineer",
            bio: "Developer Full Stack javaScript",
            image: "./images/image.jpg",
            show: true,
            cnt: 0,
        
          };
        }
          componentDidMount() {
            setInterval(() => {
              this.setState((prevState) => ({
                cnt: prevState.cnt + 1,
              }));
            },1000);
        }
  render() {
    return (
        <div >
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="pos profImg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="pos">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
                <div className="count">
                  Count: {this.state.cnt}{" "}
                  sec
                </div>
              </section>
            </div> )}
          
        </div>
      
        </div>
    )
  }}


export default Profil;
