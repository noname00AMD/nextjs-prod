import HomePage from '../components/home/homepage'
import { connectToDatabase } from '../database'

export default function Home(props) {
  // console.log(props);
  return (<>
    <HomePage props={props} />
  </>)
}
export async function getStaticProps() {
  var props = {}
  props.title = "a"
  props.url = '/'//
  var db = await connectToDatabase()
  var category = await db.collection('category').find({}, {_id: false}).toArray()
   props.category = JSON.parse(JSON.stringify(category))
  var description = await db.collection("site_info").findOne({name:"description"}, {_id: false})
  props.description = JSON.parse(JSON.stringify(description)).value
return {
  props
}
}
