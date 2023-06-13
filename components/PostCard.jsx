import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

//import { grpahCMSImageLoader } from '../util';


const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img
        src={post.featuredImage.url}
        alt="{post.title}"
        className="object-top absolute h-80 w-full object-covershadow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>

    
  </div>
);

export default PostCard;
