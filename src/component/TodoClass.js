import React from 'react';

class TodoClass extends React.Component {
  state = {
    todo: '',
    warning: null,
  };

  handleInput = (e) => {
    const input = e.target.value;
    const warning = input.includes('.js')
      ? 'You need JavaScript skill to complete the task. Do you have it?'
      : null;

    this.setState({
      todo: input,
      warning,
    });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <>
        <div>
          <p>{todo}</p>
          <p>
            <textarea name="todo" value={todo} onChange={this.handleInput} />
          </p>
          <hr />
          <h2>{warning || 'Good choice!'}</h2>
        </div>
      </>
    );
  }
}

export default TodoClass;
