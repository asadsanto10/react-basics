import React, { useEffect, useState } from 'react';

const Getpost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetcData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const jsonData = await data.json(data);
        if (jsonData) {
          setLoading(false);
          setPost(jsonData);
          setError('');
        }
      } catch (err) {
        setLoading(false);
        setPost({});
        setError('There was an error');
      }
    };
    fetcData();
  }, []);

  return (
    <div>
      {loading ? 'loading...' : post.title}
      {error || null}
    </div>
  );
};

export default Getpost;
