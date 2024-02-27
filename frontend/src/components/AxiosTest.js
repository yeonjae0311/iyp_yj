import { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosTest = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setPosts(response.data);
        console.log('테스트 성공');
      })
      .catch(console.log('실패'));
  }, []);

  return (
    <>
      <ul>
        {posts.length > 0 && posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>
    </>
  );
};

export default AxiosTest;
