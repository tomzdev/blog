//PRIMO CONTAINER DELLA PARTE LATERALE DESTRA CHE CONTIENE POST RECENTI/CORRELATI
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/it';
import Link from 'next/link';

import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  console.log(relatedPosts);
  moment.locale('it');

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Post Correlati' : 'Post Recenti'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <div class="aspectRatio">
              <img
                alt={post.title}
                height="60px"
                width="60px"
                unoptimized
                className="object-cover rounded-full"
                src={post.featuredImage.url}
              />
            </div>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('DD MMMM, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
