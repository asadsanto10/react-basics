import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        post: action.result,
        error: '',
      };

    case 'ERROR':
      return {
        loading: false,
        post: {},
        error: 'there was an error',
      };

    default:
      return state;
  }
};

const Getpostreducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetcData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const jsonData = await data.json(data);
        if (jsonData) {
          dispatch({ type: 'SUCCESS', result: jsonData });
        }
      } catch (err) {
        dispatch({ type: 'ERROR' });
      }
    };
    fetcData();
  }, []);

  return (
    <div>
      {state.loading ? 'loading...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default Getpostreducer;
