import Image from 'next/image'
import Link from 'next/link'
import styles from './home_body.module.sass'

export default function Body({ props }) {
    // console.log(props);
    return (
        <>
            <div className={styles.body + ` cont`}>
                <div className="row">
                    <section className={`${styles.section1} col-12`}>
                        <div className="row">
                            <div className="col-xl-9 start-1 ">
                                <div className="row">
                                    <div className="col-8 " >
                                        <div className="row">
                                            <div className="col-12">
                                                <div style={{ position: "relative", height: "252px" }}>
                                                    <Link href="#">
                                                        <a style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
                                                            <Image layout="fill" objectFit="cover" src="/image/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.webp" />
                                                            <span className={`${styles.title} ${styles.title1}`} >hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con laodfsfs fff ffff ffff fffff ffffffff ffff ffffffff fffffffffffffff fffffffffffffffff ffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff !!</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className={`${styles.swiper} swiper`} >
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">Slide 1</div>
                                                        <div className="swiper-slide">Slide 2</div>
                                                        <div className="swiper-slide">Slide 3</div>
                                                    </div>
                                                    <div className="swiper-pagination"></div>
                                                    <div className="swiper-button-prev"></div>
                                                    <div className="swiper-button-next"></div>
                                                    <div className="swiper-scrollbar"></div>
                                                </div>
                                                <div className={`${styles.swiper} swiper`} >
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">Slide 1</div>
                                                        <div className="swiper-slide">Slide 2</div>
                                                        <div className="swiper-slide">Slide 3</div>
                                                    </div>
                                                    <div className="swiper-pagination"></div>
                                                    <div className="swiper-button-prev"></div>
                                                    <div className="swiper-button-next"></div>
                                                    <div className="swiper-scrollbar"></div>
                                                </div>
                                                <div className={`${styles.swiper} swiper`} >
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">Slide 1</div>
                                                        <div className="swiper-slide">Slide 2</div>
                                                        <div className="swiper-slide">Slide 3</div>
                                                    </div>
                                                    <div className="swiper-pagination"></div>
                                                    <div className="swiper-button-prev"></div>
                                                    <div className="swiper-button-next"></div>
                                                    <div className="swiper-scrollbar"></div>
                                                </div>
                                                <div className={`${styles.slide} slide`}>
                                                    <button className={`${styles.slide__prev} slide__prev`}>
                                                        <svg viewBox='0 0 20 30'>
                                                            <path d="m20.00039,5.58501l-9.2629,9.48309l9.2629,9.48308l-5.29365,5.42272l-14.55654,-14.9058l14.55654,-14.90694" fill="#000" />
                                                        </svg>
                                                    </button>
                                                    <button className={`${styles.slide__next} slide__next`}>
                                                        <svg viewBox='0 0 20 30'>
                                                            <path d="m0.08864,24.6034l9.33698,-9.57492l-9.33698,-9.57499l5.33656,-5.47199l14.67467,15.04698l-14.67467,15.05165" fill="#000" />
                                                        </svg>
                                                    </button>
                                                    <div className={`${styles.slide__container} slide__container`}>
                                                        <div className={`${styles.slide__item} slide__item`}>
                                                            a
                                                        </div>

                                                        <div className={`${styles.slide__item} slide__item`}>
                                                            b
                                                        </div>

                                                        <div className={`${styles.slide__item} slide__item`}>
                                                            c
                                                        </div>

                                                        <div className={`${styles.slide__item} slide__item`}>
                                                            d
                                                        </div>

                                                        <div className={`${styles.slide__item} slide__item`}>
                                                            e
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 " >
                                        <div style={{ position: "relative", height: "252px" }}>
                                            <Link href="#">
                                                <a style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
                                                    <Image layout="fill" objectFit="cover" src="/image/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.webp" />
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className={`${styles.title2}`}>
                                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                                </a>

                                            </Link>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-xl-3 start-10 d-lg-none">
                                <div className="" style={{ textAlign: "center", minWidth: "300px" }}>
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
