import Image from 'next/image'
import Link from 'next/link'
import styles from './home_body.module.sass'

export default function Body({ props }) {
    // console.log(props);
    return (
        <>
            <div className={styles.body + ` cont-fluid `}>
                <div className="g-row-3">
                    <section className={`${styles.section1} row-1 start-3 col-8 `}>
                        <div className="g-row-2">
                            <div className="col-8 start-1 row-1"> 1 </div>
                            <div className="col-4 start-9 row-1">
                                <div className=""> <Image src="/image/banner/600x300.png" width="300" height="600" layout="intrinsic" /></div>
                            </div>
                            <div className="col-12 row-2">
                                a
                            </div>
                        </div>
                    </section>
                    <section className={` ${styles.section2} row-2  start-3 col-8 `}>
                        <div className="sm-cont">
                            <div className="g-row-1">
                                <div className="col-8 ">b1</div>
                                <div className="col-4 ">b1</div>
                            </div>
                        </div>
                    </section>
                    <section className={` ${styles.section3} row-3  start-3 col-8 `}>
                        <div className="sm-cont">
                            <div className="g-row-1">
                                <div className="col-8 ">b1</div>
                                <div className="col-4 ">b1</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
