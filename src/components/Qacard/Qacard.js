import React, { Component } from "react";
import "./Qacard.css";
import downchevron from "./down.svg";

class Qacard extends Component {
  state = {
    showQuestionInfo: false,
  };

  render() {
    const { question, answer, company, author, difficulty } = this.props;
    const { showQuestionInfo } = this.state;
    
    return (
      <div className="card-container">
        <div className={`card ${difficulty}`}>
          <div className="Q-section">
            <div className="Q-container">
              <h4 className="Q-text">{question}</h4>
              <div className="detail-Container">
                <span className="sub-text">{company}</span>
                <span className="sub-text">
                  Submitted By:
                  <br /> {author}
                </span>
              </div>
            </div>
            <div
              className={`ControlBtn ${showQuestionInfo ? "rotate-180" : ""}`}
            >
              <img
                onClick={() =>
                  this.setState({
                    showQuestionInfo: !this.state.showQuestionInfo,
                  })
                }
                src={downchevron}
                alt="down"
                style={{ width: "3vw" }}
              ></img>
            </div>
          </div>

          {showQuestionInfo ? (
            <div className="A-section">
              <div className="A-container">
                <p className="Q-text">{answer}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Qacard;
