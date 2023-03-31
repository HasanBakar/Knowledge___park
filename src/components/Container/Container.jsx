import React from 'react';
import Blog from './../Blog/Blog';
import BookmarkSide from './../BookmarkSide/BookmarkSide';

const Container = () => {
    return (
        <div className="md:grid md:grid-cols-3" >
            <div className="ml-12 col-span-2">
                <Blog></Blog>
            </div>
            <div className="ml-12" >
                <BookmarkSide></BookmarkSide>
            </div>
        </div>
    );
};

export default Container;