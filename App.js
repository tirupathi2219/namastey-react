const parent = React.createElement('div',{id:'parent'}, [
    React.createElement('h2',{className: 'child'}, 'child1'),
React.createElement('h3',{className: 'child'},'anothher child')])

const heading = React.createElement('h1',{id: 'heading'},'hello world from react!')
    parent.appendChild(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(heading)
root.render(parent)