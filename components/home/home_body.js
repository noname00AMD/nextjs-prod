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
                                                <div className={`slide`}>
                                                    <button className={`slide__prev`}>
                                                        <svg viewBox='0 0 20 30'>
                                                            <path d="m20.00039,5.58501l-9.2629,9.48309l9.2629,9.48308l-5.29365,5.42272l-14.55654,-14.9058l14.55654,-14.90694" fill="#000" />
                                                        </svg>
                                                    </button>
                                                    <button className={` slide__next`}>
                                                        <svg viewBox='0 0 20 30'>
                                                            <path d="m0.08864,24.6034l9.33698,-9.57492l-9.33698,-9.57499l5.33656,-5.47199l14.67467,15.04698l-14.67467,15.05165" fill="#000" />
                                                        </svg>
                                                    </button>
                                                    <div className={` slide__container`}>
                                                        <div className={` slide__item slide__item--active`}>
                                                            a
                                                        </div>
                                                        <div className={` slide__item`}>
                                                            b
                                                        </div>
                                                        <div className={` slide__item`}>
                                                            c
                                                        </div>
                                                        <div className={` slide__item `}>
                                                            d
                                                        </div>
                                                        <div className={` slide__item`}>
                                                            e
                                                        </div>
                                                    </div>
                                                    <div className={` slide__pagination`}></div>
                                                    <style jsx>{`
                                                        .slide{
                                                            width: 100%;
                                                            height: 400px;
                                                            border: 1px solid #000;
                                                            position: relative;
                                                        }
                                                        .slide__prev , .slide__next{
                                                            display: inline-block;
                                                            height: 70px;
                                                            position: absolute;
                                                            z-index: 9;
                                                            top: 50%;
                                                            transform: translate( 0, - 50% );
                                                            background-color: transparent;
                                                            transition: all .3s ease 0s;
                                                        }
                                                        .slide__prev svg, .slide__next svg{
                                                            line-height: 70px;
                                                            cursor: pointer;
                                                            height: 56px;
                                                            width: 30px;
                                                        }
                                                        path{
                                                            stroke: #fff;
                                                        }
                                                        .slide__prev:hover , .slide__next:hover{
                                                            background-color: rgb(255, 99, 71, 0.2);
                                                        }
                                                        .slide__prev{
                                                            left: 0;
                                                        }
                                                        .slide__next{
                                                            right: 0;
                                                        }
                                                        .slide__pagination{
                                                            height: 8px;
                                                            position: absolute;
                                                            transform: translate( -50%, 0%);
                                                            left: 50%;
                                                            background-color: #111;
                                                            bottom: 0;
                                                            z-index: 9;
                                                        }
                                                        .slide__container{
                                                            height: 100%;
                                                        }
                                                        .slide__item{
                                                            height: 100%;
                                                            width: 100%;
                                                            background-color: #fff;
                                                            position: absolute;
                                                            z-index: 0;
                                                            font-size: 45px;
                                                        }
                                                        .slide__item.slide__item--active{
                                                            z-index: 3;
                                                        }
                                                        `}</style>
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
