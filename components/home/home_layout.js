import Image from 'next/image'
import styles from './home_layout.module.sass'
import Link from 'next/link'
import Header from '../block/header'
import Footer from '../block/footer'
import PageHead from "./head_homepage"

export default function Layout({ children, props }) {
  // console.log(props);
  return (
    <>
      <PageHead props={props} />
      <Header props={props} />
      <main>
        {children}
      </main>
      <Footer props={props} />
    </>
  )
}
