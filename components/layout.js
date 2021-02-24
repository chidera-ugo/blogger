import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const name = 'Chidera Ugo'
export const siteTitle = "Chidera's Blog"

export default function Layout ({ children, home }) {
  return (
    <div className='font-main text-black px-6 md:px-10 lg:p-0 max-w-2xl m-12 mx-auto'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="Chidera Ugo's Personal Blog"
        />
      </Head>
      <header>
        {home && (
          <div className='text-center'>
            <Image
              priority
              src='/images/profile.jpeg'
              className='rounded-full w-64'
              height={144}
              width={144}
              alt={name}
            />
            <h1 className='text-4xl font-extrabold mt-2'>{name}</h1>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-12'>
          <Link href='/'>
            <a className="text-blue-600 font-semibold text-xl hover:underline">Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
