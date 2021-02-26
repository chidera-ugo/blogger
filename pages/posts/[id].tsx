import Layout from '../../components/layout'
import { getPostsIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postContent = await getPostData(params.id as string)
    return {
        props: {
            postContent
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostsIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({
    postContent
}: {
    postContent: {
        title: string
        date: string
        blogHtml: string
    }
}) {
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