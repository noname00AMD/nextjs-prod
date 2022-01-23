import Link from 'next/link'
import Head from 'next/head'
// import Layout from '../components/layout'
import {connectToDatabase} from '../database'
export default function Post(props) {
  return (
    <>

        <Head>
          <title>{props.title}</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
    </>
  )
}
export async function getStaticPaths() {
 var db = await connectToDatabase()
  var posts = await db.collection('posts').find({}).toArray()
  // var posts = database.collection('posts').find({}).toArray()
  // console.log(posts);
  const paths = posts.map((post) => ({
    params: { path: post.path},
  }))
  console.log(paths);
  return { paths, fallback: false }
}
export async function getStaticProps({ params}) {
  var db = await connectToDatabase()
  var post = await db.collection("posts").findOne({path:params.path})

  return {
    props: {
     title: post.title,
     content: post.content,
     tags: post.tags

    }
  }
}
