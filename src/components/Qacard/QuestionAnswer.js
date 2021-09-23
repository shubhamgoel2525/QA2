import React, { Component } from "react";
import Qacard from "./Qacard";
import data from "../../assets/questions";

class QuestionAnswer extends Component {
  state = {
    qa_data: [
      {
        // id: 1,
        question: "How does this Component Look?",
        answer: "And what about this answer?",
        company: "testcompany1",
        author: "JohnDoe1",
        difficulty: "Easy",
      },
      {
        // id: 2,
        question: "How does this 2nd Component Look?",
        answer: "And what about this answer?",
        company: "testcompany2",
        author: "JohnDoe2",
        difficulty: "Medium",
      },
      {
        // id: 3,
        question: "How does this 3rd Component Look?",
        answer: "And what about this answer?",
        company: "testcompany3",
        author: "JohnDoe3",
        difficulty: "Hard",
      },
    ],
  };

  componentDidMount() {
    data.forEach((ques) => {
      const obj = {
        question: ques.question,
        answer: ques.answer,
        company: ques.company,
        author: "",
        difficulty: ques.level,
      };

      const arr = this.state.qa_data;
      arr.push(obj);

      this.setState({
        qa_data: arr,
      });
    });
  }

  render() {
    const { qa_data } = this.state;

    return (
      <div>
        {qa_data.map((qa, index) => (
          <Qacard
            key={index}
            question={qa.question}
            answer={qa.answer}
            company={qa.company}
            author={qa.author}
            difficulty={qa.difficulty}
          />
        ))}
      </div>
    );
  }
}

export default QuestionAnswer;
