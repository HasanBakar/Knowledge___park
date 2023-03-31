import React from 'react';

const Header = () => {
    return (
    <div className="navbar shadow-xl mb-8 bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Knowledge Park</a>
        </div>
        <div className="flex-none gap-2">
            <div>
                <ul className="flex" >
                    <li><a className="ml-5 hover:bg-orange-400 px-3 py-2 hover:border-1 hover:rounded-lg" href="/home">Home</a></li>
                    <li><a className="ml-5 hover:bg-orange-400 px-3 py-2 hover:border-1 hover:rounded-lg" href="/blogs">Blogs</a></li>
                    <li><a className="ml-5 hover:bg-orange-400 px-3 py-2 hover:border-1 hover:rounded-lg" href="/about">About</a></li>
                    <li><a className="ml-5 hover:bg-orange-400 px-3 py-2 hover:border-1 hover:rounded-lg" href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://source.unsplash.com/random/200x200?sig=1" />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>
    );
};

export default Header;