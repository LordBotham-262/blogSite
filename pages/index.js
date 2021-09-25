import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Image from 'next/image'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>The Highway Guy | Home</title>
      </Head>
      

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}