import Layout from '../../components/layout'
import { getPostsIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export async function getStaticProps({ params }) {
    const postContent = await getPostData(params.id)
    return {
        props: {
            postContent
        }
    }
}

export async function getStaticPaths() {
    const paths = getPostsIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postContent }) {
    return (
        <Layout>
            <Head>
                <title>{postContent.title}</title>
            </Head>
            <h2 className='text-3xl font-bold leading-relaxed'>{postContent.title}</h2>
            <h4 className='mt-3 text-gray-500'><Date dateString={postContent.date} /></h4>
            <div className='prose mt-10' dangerouslySetInnerHTML={{ __html: postContent.blogHtml }} />
        </Layout>
    )
}