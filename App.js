const parent = React.createElement(
    "div",{id:"parent"},
    [
    React.createElement (
    "div", {id:"child1"},[
    React.createElement("h1", {id:"heading1"}, "This is h1 from child 1"),
    React.createElement("h2", {id:"heading2"}, "This is h2 from child 1")
    ]
    ),
    React.createElement(
    "div", {id:"child2"}, 
    [
    React.createElement("h1", {id:"heading1"}, "This is h1 from child 2"),
    React.createElement("h2", {id:"heading2"}, "This is h2 from child 2")
    ]
    )
    ]
    );
console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root"))
root1.render(parent);