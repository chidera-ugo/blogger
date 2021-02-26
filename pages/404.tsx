import Link from 'next/link'
import Head from 'next/head'

export default function notFound() {
    return (
        <div className='min-h-screen max-w-lg flex items-center text-center mx-auto'>
            <Head>
                <title>404</title>
            </Head>
            <div className=''>
                <h1 className='font-main font-semibold text-3xl'>404. The page you're looking for has either being removed or does not exist</h1>
                <div className='mt-12'>
                    <Link href='/'>
                        <a className="text-blue-600 font-semibold text-xl hover:underline">Back to home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}