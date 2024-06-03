import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

let BASE_URL= "http://localhost:5000"

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/api/posts?page=${page}`, {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        console.log(res.data, "res.data");
        setPosts((prevPosts) => [...prevPosts, ...res.data.posts]);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

 

  const loadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl mb-4">Posts</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>
            <p className="text-gray-600 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {page < totalPages && (
        <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4">
          Load More
        </button>
      )}

{/* <div className="flex justify-between items-center my-4">
        <button onClick={handlePrevious} disabled={page === 1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Posts;
