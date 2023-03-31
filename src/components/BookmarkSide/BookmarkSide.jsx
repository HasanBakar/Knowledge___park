import React from 'react';

const BookmarkSide = ({totalTime}) => {
    return (
        <div className="mt-12" >
            <div className="px-4 py-2 bg-gray-100 mr-5  border-1 rounded-md" >
                <h2 className="text-2xl font-semibold" >Spent time on read : {totalTime} min</h2>
            </div>
        </div>
    );
};

export default BookmarkSide;