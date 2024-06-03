import axios from 'axios';
import React, { useEffect, useState } from 'react'

let BASE_URL= "http://localhost:5000"

function PostPage() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`${BASE_URL}/api/posts?page=${page}&limit=${limit}`, {
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
    <div>

<div class="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12 bg-light-blue-50">
  <div class="min-h-28 ">
    <div class="max-w-screen-lg mx-auto py-4">
      <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
        Our Blog Post
      </h2>
      <p class="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
      <div class="flex flex-col gap-6 mt-20">
        


   
    {posts.map(post => (
           <div class="key={post._id} max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
           <div class="flex justify-between items-center">
               <span class="font-light text-gray-600">{new Date(post.createdAt).toLocaleDateString()}</span>
               {/* <div class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" >Design</div> */}
           </div>
           <div class="mt-2">
               <div class="text-2xl text-gray-800 font-bold hover:text-gray-900" >{post.title}</div>
               <p class="mt-2 text-gray-600">{post.content}</p>
           </div>
           <div class="flex justify-between items-center mt-4">
               <div>
                   <div class="flex items-center" >
                       {/* <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar"/> */}
                       <h1 class="text-gray-700 font-bold">Mohd Samiullah</h1>
                   </div>
               </div>
           </div>
       </div>
          
        ))}

    {loading && <p>Loading...</p>}
      {page < totalPages && (
        <button onClick={loadMore} className="bg-blue-500  hover:bg-blue-700 text-white max-w-4xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4">
          Load More
        </button>
      )}
       
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default PostPage