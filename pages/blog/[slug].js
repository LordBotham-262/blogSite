import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import { useState } from 'react'

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {

    const [enableLoadComments, setEnableLoadComments] = useState(true)
    function loadComments() {
        setEnableLoadComments(false);

        var disqus_config = function () {
            this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = post.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        }

        const script = document.createElement('script')
        script.src = 'https://highway-guy.disqus.com/embed.js';
        script.setAttribute('data-timestamp', Date.now().toString())

        document.body.appendChild(script)
    }
    return (<>
        <Head>
        <title>{title}</title>
      </Head>
        <Link href='/'>
            <a className="btn btn-back">Go back</a>
        </Link>
        <div className="card card-page">
            <h1 className='post-title'>{title}</h1>
            <div className="post-date">Posted on {date}</div>
            <img src={cover_image} alt='' />
            <div className='post-body'>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>

            {enableLoadComments && (
                <p onClick={loadComments}>
                    Load Comments
                </p>
            )}
            <div id="disqus_thread"></div>
        </div>
    </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: { frontmatter, slug, content }
    }
}