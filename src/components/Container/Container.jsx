import React from 'react';
import BookmarkSide from './../BookmarkSide/BookmarkSide';
import { useState, useEffect } from 'react'
import BlogCard from './../BlogCard/BlogCard';
const Container = () => {


const [blogs, setBlogs] = useState([]);
const [totalTime, setTotalTime] = useState(0);
const [totalBookmarkNumber, setTotalBookmarkNumber] = useState(0);
const [Bookmarks, setBookmarks] = useState([]);




useEffect(() => {
  fetch("fakeDb.json")
  .then(res => res.json())
  .then(data => setBlogs(data))
}, []);

const readingTimeHandle = (time) =>{
    const total = totalTime + Number(time);
    setTotalTime(total)
}

// const bookmarksContainer = [];
const handleBookmark = (title,id) =>{
  
    let bookmarkItem = {}
    bookmarkItem.id = id;
    bookmarkItem.title = title;
    const newBookmarkCount = totalBookmarkNumber + 1;
    setTotalBookmarkNumber(newBookmarkCount); 
    setBookmarks([...Bookmarks,bookmarkItem]); 
}



    return (
        <div className="md:grid md:grid-cols-3" >
            <div className="ml-12 col-span-2">
                {
                    blogs.map(blog => <BlogCard
                    blog = {blog}
                    key = {blog.id}
                    readingTimeHandle = {readingTimeHandle}
                    handleBookmark={handleBookmark}
                    ></BlogCard>)
                }
            </div>
            <div className="ml-12" >
                <BookmarkSide
                totalTime = {totalTime}
                totalBookmarkNumber={totalBookmarkNumber}
                Bookmarks={Bookmarks}
                ></BookmarkSide>
            </div>
        </div>
    );
};

export default Container;