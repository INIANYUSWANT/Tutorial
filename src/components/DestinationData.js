import { Component } from "react";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <div className="des-text">
          <h2>
            {this.props.heading}
          </h2>
          <p>
            {this.props.txt}
          </p>
        </div>
        <div className="image">
          <img alt="images" src={this.props.img1}/>
          <img alt="images" src={this.props.img2}/>
        </div>
      </div>
    );
  }
}

export default DestinationData;
