import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { Article } from '../typing';

interface Props {
  articles: [Article]
}

export default function Home ({ articles }: Props){

  return (
    <div className='divide-y divide-black'>
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/iconmonstr-medium-1.svg" />
      </Head>
      <Header />
      <Banner />
      <div>
        <div className='max-w-7xl mx-auto'>
          {articles.map(article => (
            <div className='grid grid-cols-2' key={article._id}>
              <div className='pl-10 py-7 flex'>
                <div className='w-80 h-44'>
                  <div className='flex items-center space-x-1'>
                    <img 
                      className='rounded-full h-6 w-6 cursor-pointer'
                      src='https://i.stack.imgur.com/frlIf.png'
                    />
                    <h1 className='cursor-pointer font-medium'>{article.author.username}</h1>
                  </div>
                  <div>
                    <Link href='/'>
                      <div>
                        <h1 className='text-3xl font-semibold text-slate-900 pt-3 cursor-pointer'>
                          {article.title}
                        </h1>
                        <h1 className='text-gray-600 cursor-pointer'>{article.description}</h1>
                      </div>
                    </Link>
                    <div className='text-gray-600 text-xs pt-5 flex space-x-2'>
                      <h1>{article.createdAt.split('T')[0]}</h1>
                      <h1>{Math.floor(article.text.length/200)} min read</h1>
                    </div>
                  </div>
                </div>
                <Link href='/'>
                  <img
                    className='h-44 w-44 cursor-pointer' 
                    src={article.feature_img[0]}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/articles');
  const articles = await res.json();
  return {
    props: { articles },
  }
}