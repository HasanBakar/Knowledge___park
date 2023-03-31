import React from 'react';
import Blog from './../Blog/Blog';
import BookmarkSide from './../BookmarkSide/BookmarkSide';
import { useState, useEffect } from 'react'
const Container = () => {

const [blogs, setBlogs] = useState([]);
const [totalTime, setTotalTime] = useState(0);

useEffect(() => {
  fetch("fakeDb.json")
  .then(res => res.json())
  .then(data => setBlogs(data))
}, []);

const readingTimeHandle = (time) =>{
    const total = totalTime + Number(time);
    setTotalTime(total)
}

    return (
        <div className="md:grid md:grid-cols-3" >
            <div className="ml-12 col-span-2">
                {
                    blogs.map(blog => <Blog
                    blog = {blog}
                    key = {blog.id}
                    readingTimeHandle = {readingTimeHandle}
                    ></Blog>)
                }
            </div>
            <div className="ml-12" >
                <BookmarkSide
                totalTime = {totalTime}
                ></BookmarkSide>
            </div>
        </div>
    );
};

export default Container;