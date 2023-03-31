import React from 'react';

const Blog = () => {
    return (
        <div className="mx-4 mb-4" >
            <h1 className="text-center bg-red-400 text-5xl px-2 py-2 mb-6 rounded-lg font-bold" >Questions Answer Section</h1>
            <h1 className="text-4xl text-orange-700 my-3" >What is the difference between props and state ?</h1>
            <div className="grid md:grid-cols-2 gap-5" >
                <div>
                    <p><span className="text-blue-500 text-2xl font-bold">Props</span> is the short form of properties. They are used to pass data between React components. React's data flow between components is uni-directional. Actually, it flows from the parent component to the child component only.</p>
                </div>
                <div>
                    <p><span className="text-blue-500 text-2xl font-bold">State</span> represents a component's underlying data model and is rendered by the component. But more importantly, whenever data in the state changes, it causes the component to re-render to reflect the change. <br /> This facilitates declarative programming where you can simply manipulate state; while React takes care of implementing updates to ensure your component reflects the data in the State accurately. </p>
                </div>
            </div>
            <h1 className="text-4xl text-orange-700 my-3" >How does usestate work in react js?</h1>
            <div>
                <p><span className="text-blue-500 text-2xl font-bold">useState()</span> creates a  state for a component, and its only parameter determines the initial value of that state. <br /> It returns two things: the state initial value, and a function that can use to update the state later</p>
            </div>
            <h1 className="text-4xl text-orange-700 my-3" >What is the use of useEffect in react js and except data load?</h1>
            <div>
                <p><span className="text-blue-500 text-2xl font-bold">The useEffect</span> in react js allows you to perform side effects in your components.</p>
                <ul>
                    <li>1. direct DOM updates</li>
                    <li>2. timers</li>
                    <li>3. The second argument is optional. But it uses for rerender after change.</li>
                </ul>
            </div>
            <h1 className="text-4xl text-orange-700 my-3" >How does react js work?</h1>
            <div>
                <p><span  className="text-blue-500 text-2xl font-bold">ReactJS</span> divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
        </div>
    );
};

export default Blog;