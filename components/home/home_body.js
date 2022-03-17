import Image from 'next/image'
import Link from 'next/link'
import styles from './home_body.module.sass'

export default function Body({ props }) {
    // console.log(props);
    return (
        <>
            <div className={styles.body + ` cont-fluid`}>
                <div className="row">
                    <section className={`${styles.section1} col-md-12 `}>
                        <div className="row">
                            <div className="col-8 start-1 ">
                                <div className="row">
                                    <div className="col-8 " >
                                        <div style={{ position: "relative", height: "212px" }}>
                                            <Link href="#">
                                                <a style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
                                                    <Image layout="fill" objectFit="cover" src="/image/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.webp" />
                                                        <span  className={`${styles.title} ${styles.title1}`} >hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con laodfsfs fff ffff ffff fffff ffffffff ffff ffffffff fffffffffffffff fffffffffffffffff ffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff !!</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4 " >
                                        <div style={{ position: "relative", height: "212px" }}>
                                            <Link href="#">
                                                <a style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
                                                    <Image layout="fill" objectFit="cover" src="/image/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.webp" />
                                                    <span className={`${styles.title} ${styles.title2}`}>hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!</span>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                 
                                    <div className="col-8 " >
                                        <div style={{ position: "relative", height: "212px", marginTop:"10px" }}>
                                            <Link href="#">
                                                <a style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
                                                    <Image layout="fill" objectFit="cover" src="/image/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.webp" />
                                                        <span  className={`${styles.title} ${styles.title1}`} >hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con laodfsfs fff ffff ffff fffff ffffffff ffff ffffffff fffffffffffffff fffffffffffffffff ffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff !!</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4 " >
                                        <div style={{ position: "relative", height: "212px", marginTop:"10px" }}>
                                            <Link href="#">
                                                <a style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
                                                    <Image layout="fill" objectFit="cover" src="/image/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.webp" />
                                                    <span className={`${styles.title} ${styles.title2}`}>hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!</span>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                            <div className="col-4 start-9 d-md-none">

                                <div className="" style={{ textAlign: "center" }}>
                                    <Image src="/image/banner/600x300.png" width="300" height="600" layout="intrinsic" />
                                </div>
                            </div>
                            <div className="col-12 ">
                                a
                            </div>
                        </div>
                    </section>
                    <section className={` ${styles.section2}   start-3 col-8 `}>
                        <div className="sm-cont">
                            <div className="row">
                                <div className="col-8 ">b1</div>
                                <div className="col-4 ">b1</div>
                            </div>
                        </div>
                    </section>
                    <section className={` ${styles.section3}   start-3 col-8 `}>
                        <div className="sm-cont">
                            <div className="row">
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
