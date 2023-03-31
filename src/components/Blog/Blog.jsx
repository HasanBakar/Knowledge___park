import React from 'react';

const Blog = ({blog,readingTimeHandle}) => {
    const {banner_img, hashtag_words
,min_reading_time,title,writer_img,writer_name,writing_date} = blog;
    return (
        <div className="card w-full glass my-12">
            <figure><img className="fluid" src={banner_img} alt="Top banner image"/></figure>
            <div className="card-body">
                <div className="flex items-center justify-between" >
                    <div className="flex items-center" >
                        <img className="h-14 w-14 mr-3 rounded-full" src={writer_img} alt="" />
                        <div>
                            <h2 className="font-bold text-2xl" >{writer_name}</h2>
                            <p>{writing_date}</p>
                        </div>
                    </div>
                    <button>
                        <div className="flex items-center px-4 py-2 bg-orange-400 rounded-lg text-white"> <span className="mx-2" >{min_reading_time}</span> min read <img className="fluid h-8 ml-2 rounded-md" src="./bookmark.jpg" alt="" /> </div>
                    </button>
                </div>
                <div className="w-9/12" >
                    <h2 className="card-title text-3xl">{title} </h2>
                    <p><span>{hashtag_words[0]}</span> <span> {hashtag_words[1]} </span></p>
                </div>
                <div>
                    <button onClick={()=>readingTimeHandle(min_reading_time)} className="text-blue-800 underline font-semibold text-2xl" >Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;