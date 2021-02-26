import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // read the names of the files in /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const postsData = fileNames.map(fileName => {
        // remove file extension from name
        const id = fileName.replace(/\.md$/, '')
        
        // read content of mark-down file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContent = fs.readFileSync(fullPath, 'utf8')

        // use gray-matter to parse the markdown metadata
        const matterResult = matter(fileContent)
        
        return {
            id,
            ...matterResult.data as { title: string, date: string }
        }
    })

    return postsData.sort((a,b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getPostsIds() {
    // file names without extension
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    // read post content as string
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse post content
    const matterResult = matter(fileContent)

    // use remark to convert content to html
    const processed = await remark()
        .use(html)
        .process(matterResult.content)
    const blogHtml = processed.toString()

    // combine data with the id and blogHtml
    return {
        id,
        blogHtml,
        ...matterResult.data
    }
}