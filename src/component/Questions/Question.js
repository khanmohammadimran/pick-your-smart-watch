import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <h1>Frequently Asked Question (FAQ)</h1>
            <hr />
            <div className='faq'>
                <h3> Question 1: How React Works</h3>
                <p>Answer: React is a JavaScript library. React works in declarative code. React basically works on components. If we created a website with some contents (headers, Hero Section and footer). React immediately creates a virtual DOM. Now if we change anything on header or anywhere, React will create another virtual DOM and compare with the previous DOM. If we make any changes, react will change the part of that component and update it. React works like single page applications. When we make any changes to the state or data, React does not reload the entire website but only changes that part by Virtual DOM. This gives us a better user interface. React do this comparasion by Diff Algorithm. React basically maintains a tree for you us. This tree is help us to do efficient diff computations.</p>


                <h3> Question 2: What is the difference between Props and State?</h3>
                <p>Answer: Props and State in React is used for control the data of the component. The main difference between Props and State is that props are set from the parent and the data passes to the child component. In this case they are fixed entirely the component. And the data that will change later, we will use the State in that case. State changes can be asynchronous and on the other hande Props are read only. State is mutable. Props are immutable. Props can access child component but State cannot access child component. Dynamic changes can be rendered with State. But dynamic changes cannot be rendered with props. It can only used for  communicate between two components. A component can be reused with props but State cannot make components reusable.</p>
            </div>
        </div>
    );
};

export default Question;