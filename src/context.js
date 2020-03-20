import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state = {
        qa_data: [
        {
            id: 1,
            question: 'How does this Component Look?',
            answer: 'And what about this answer?',
            company: 'testcompany'
        },
        {
            id: 2,
            question: 'How does this 2nd Component Look?',
            answer: 'And what about this answer?',
            company: 'testcompany'
        },
        {
            id: 3,
            question: 'How does this 3rd Component Look?',
            answer: 'And what about this answer?',
            company: 'testcompany'
        }]
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;