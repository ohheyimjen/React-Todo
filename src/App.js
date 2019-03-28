import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
  }
    
  }

//EVENT HANDLERS GO HERE

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
      {console.log(this.state.todos)}
        <TodoList 
        //ADD EVENT LISTENER HERE
        todos={this.state.todos}/>
      </div>
      // <div>
      //   <h2>Welcome to your Todo App!</h2>
      // </div>
    );
  }
}

export default App;
