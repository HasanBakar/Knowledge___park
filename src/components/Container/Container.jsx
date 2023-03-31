import React from 'react';
import BookmarkSide from './../BookmarkSide/BookmarkSide';
import { useState, useEffect } from 'react'
import BlogCard from './../BlogCard/BlogCard';
/*toast module */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {

let bookmarkItem = {};
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
    if(Bookmarks.length === 0){
            bookmarkItem.id = id;
            bookmarkItem.title = title;
            const newBookmarkCount = totalBookmarkNumber + 1;
            setTotalBookmarkNumber(newBookmarkCount); 
            setBookmarks([...Bookmarks,bookmarkItem]); 
    }
    else{
        {
      Bookmarks.find(b => {
        if(b.id !== id){
            bookmarkItem.id = id;
            bookmarkItem.title = title;
            const newBookmarkCount = totalBookmarkNumber + 1;
            setTotalBookmarkNumber(newBookmarkCount); 
            setBookmarks([...Bookmarks,bookmarkItem]);
        }
        else{
        toast("Already exist🎈🎈🎈 !") 
         return;
        }
      }) 
    }
    }
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