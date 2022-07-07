import Link from "next/link"
import Image from "next/image"
import Layout from "./home_layout"
import Body from "./home_body"

export default function HomePage({ children, props }) {
  return (
    <>
      <Layout props={props}>
        <Body props={props} />
      </Layout>
    </>
  )
}
