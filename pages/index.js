import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export function getStaticProps() {
  const postsData = getSortedPostsData()
  return {
    props: {
      postsData
    }
  }
}

export default function Home ({ postsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="my-10 text-xl leading-relaxed">
        <p>Hello, I’m <span className="font-semibold">Chidera</span>. I’m a software engineer, structural engineer and musician.
          You can contact me on{' '}
          <span className="text-blue-600 hover:text-blue-500 inline-block">
            <a className="flex items-center" href="https://twitter.com/_chideraugo">Twitter
              <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </span> or {' '}
          <span className="text-blue-600 hover:text-blue-500 inline-block">
            <a className="flex items-center" href="https://instagram.com/_chideraugo">Instagram
              <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </span>
        </p>
        <p className="mt-6">
          This app was built with Next.js - the React framwork. To learn more, you can check out the{' '}
          <span className="text-blue-600 hover:text-blue-500 inline-block">
            <a className="flex items-center" href="https://nextjs.org/learn">Next.js tutorial
              <svg className="w-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </span>
        </p>
      </section>
      <section className="mt-12">
        <h2 className="font-extrabold text-3xl mb-8">Blog</h2>
        <div className="">
          <ul>
            {postsData.map(({ id, date, title }) => (
              <li className="mb-8" key={id}>
                <Link href={`/posts/${id}`}>
                  <a className='text-xl text-blue-600 hover:underline'>{title}</a>
                </Link>
                <h4 className='mt-3 text-gray-500'><Date dateString={date} /></h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
