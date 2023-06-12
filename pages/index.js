import Head from 'next/head'

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
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 COL-SPA'>
          <div className='lg:sticky relative top-8'>
            
          </div>
        </div>
      </div>
    </main>
  )
}
