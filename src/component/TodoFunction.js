import React, { useState } from 'react';

const TodoFunction = () => {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const input = e.target.value;
    const warningg = input.includes('.js')
      ? 'You need JavaScript skill to complete the task. Do you have it?'
      : null;

    setTodo(input);
    setWarning(warningg);
  };

  return (
    <>
      <div>
        <h2>todo function</h2>
        <p>{todo}</p>
        <p>
          <textarea name="todo" value={todo} onChange={handleInput} />
        </p>
        <hr />
        <h2>{warning || 'Good choice!'}</h2>
      </div>
    </>
  );
};

export default TodoFunction;
