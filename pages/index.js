import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components';

const posts = [
  {title: 'React Testing', excerpt: 'Learn react testing'},
  {title: 'React with Tailwind', excerpt: 'Learn react with tailwind'},
];

export default function Home() {
  return (
    <main className = "container mx-auto px-10 mb-8">
      <Head>
        <title>Tomz Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post = {post} key={post.title} />)}
        </div>
        <div className='lg:col-span-4 COL-SPA'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  )
}
