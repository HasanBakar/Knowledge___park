import React from 'react';

const BookmarkSide = ({totalTime,totalBookmarkNumber,Bookmarks}) => {
    return (
        <div className="mt-12 bg-slate-300 px-2 py-1 rounded-md" >
            <div className="px-4 py-2 bg-gray-100 mr-5  border-1 rounded-md" >
                <h2 className="text-2xl font-semibold" >Spent time on read : {totalTime} min</h2>
            </div>
            <div>
                <h2 className="text-2xl py-2 px-2" >Bookmarked Blogs : {totalBookmarkNumber}</h2>
                <div className="my-2 bg-red-200" >
                    {
                        Bookmarks.map(b => <div className="text-red-500 rounded-md border-2 my-2 mr-2 px-2 py-3 text-2xl"
                        key = {b.id}
                        >{b.title}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookmarkSide;