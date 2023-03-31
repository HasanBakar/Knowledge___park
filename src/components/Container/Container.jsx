import React from 'react';
import Blog from './../Blog/Blog';
import BookmarkSide from './../BookmarkSide/BookmarkSide';
import { useState, useEffect } from 'react'
const Container = () => {

const [blogs, setBlogs] = useState([]);

useEffect(() => {
  fetch("fakeDb.json")
  .then(res => res.json())
  .then(data => setBlogs(data))
}, [])

    return (
        <div className="md:grid md:grid-cols-3" >
            <div className="ml-12 col-span-2">
                {
                    blogs.map(blog => <Blog
                    blog = {blog}
                    key = {blog.id}
                    ></Blog>)
                }
            </div>
            <div className="ml-12" >
                <BookmarkSide></BookmarkSide>
            </div>
        </div>
    );
};

export default Container;