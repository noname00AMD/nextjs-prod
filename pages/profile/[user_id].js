import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/home/home_layout'
import {connectToDatabase} from '../../database'
export default function FirstPost(props) {
  return (
    <>
      <Layout>

        <Head>
          <title>{props.title}</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}
export async function getStaticPaths() {
 var db = await connectToDatabase()
  var users = await db.collection('users').find({}).toArray()
  // var posts = database.collection('posts').find({}).toArray()
  // console.log(posts);
  const paths = users.map((user) => ({
    params: { id: user._id},
  }))
  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  var db = await connectToDatabase()
  var user = await db.collection("users").findOne({_id:params._id})

  return {
    props: {
     title: user.title||'',
     name: user.name||'',

    }
  }
}
