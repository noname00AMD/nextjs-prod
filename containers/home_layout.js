import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import PageHead from "./head_homepage"

export default function Layout({ children, props }) {
  return (
    <>
      <PageHead props={props} />
      <Header props={props} />

      {children}

      <Footer props={props} />
    </>
  )
}
