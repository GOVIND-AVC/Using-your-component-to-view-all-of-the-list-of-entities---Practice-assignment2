
import React from "react";
import { useState } from "react";
import LikeButton from "./likebutton";

const PostCard =({post})=>{

    return(
        <div className="bg-white shadow-lg rounded-lg p-4 flex gap-4 items-center">
            <img src={post.profileImage} alt="Profile" className="w-100 h-100 rounded-full"/>
            <div className="flex-1">
            <h2 className="font-bold text-lg">{post.username}</h2>
            <p className="text-gray-600">{post.content}</p>
            </div>
            <LikeButton/>
        </div>
    )
}
export default PostCard;