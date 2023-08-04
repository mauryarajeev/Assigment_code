import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
         // Store all posts in the state
        // Filter the post titles based on your criteria (e.g., containing a specific keyword)
        let keyword = ['pariatur',
          'tempora',
          'molestias',
          'Adasd',
          'Trtry yrty afas',
         'Hhjgj as grbgvb'
          ]
        const filtered = data.filter((post) => post.title.includes(keyword[0]));
        setFilteredPosts(filtered); // Store the filtered posts in the state
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // render the ui 
  return (
    <div>
      <h1>All Posts:</h1>

      {/* filterlist */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h1>Filtered Posts:</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

    
