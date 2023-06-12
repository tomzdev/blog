import Head from 'next/head'

const post = [
  {title: 'React Testing', excerpt: 'Learn react testing'},
  {title: 'React with Tailwind', excerpt: 'Learn react with tailwind'},
];

export default function Home() {
  return (
    <div className = "container mx-auto px-10 mb-8">
      <Head>
        <title>Blog di Tomz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12">
        {post.map(post => (post,index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
          ))}
      </div>
    </div>
  )
}
