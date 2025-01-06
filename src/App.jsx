import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 7;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setPosts(res.data));
    }, []);

    const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <div>
            <h1>Список постів</h1>
            <ul>
                {currentPosts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>

            <div>
                {[...Array(Math.ceil(posts.length / postsPerPage))].map((_, index) => (
                    <button key={index} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default App;
