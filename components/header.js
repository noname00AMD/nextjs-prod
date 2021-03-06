import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.sass"
export default function Header({ props }) {
    return (
        <>
            <div className={styles["top_bar"]}>
                <div className={` cont`}>
                    <div className="row">
                        <div className={styles.hot + " col-8 "}>
                            <Link href="/abc">
                                <a > #abc </a>
                            </Link>
                        </div>
                        <div className={styles.right + ` col-4`}>
                            <Link href="/abc">
                                <a > sign in </a>
                            </Link>
                            <Link href="/abc">
                                <a > sign up </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <header className={styles.header} >
                <div className={` sm-cont`}>
                    <div className="row">
                        <div className={styles.logo + ` col-2 `} >
                            <div style={{ width: "168px" }}>
                                <Link href="/" title={`home`}  >
                                    <a style={{
                                        backgroundImage: 'url("/images/logo.png")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "100% 100%"
                                    }}>
                                    </a>
                                </Link>
                            </div>

                        </div>
                        <div className={styles.right + ` col-10 `}>
                            <div>
                                <input placeholder="tim kiem" type="text" />
                                <button type="submit">Search</button>
                                <ul className={styles["search_dropdown"]}>
                                    <li>
                                        asdas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* // ----------------------- sub-header---------------------------------- */}
            <div className={styles.subheader}>
                <div className=" cont ">
                    <div className="row">
                        <ul className={` col-12 `} style={{position:"relative"}}>
                            <li style={{display:"inline-block"}} >
                                <Link href="/"><a><p>Home</p></a></Link>
                            </li>
                            {props.category.map((category, index) => {
                                if (category.type === "category") {
                                    var sub = props.category.filter(cate => {
                                        return cate.parent === category._id
                                    })
                                    return (
                                        <li key={index.toString()} style={{display:"inline-block"}}>
                                            <Link href={`/${category.slug}`}>
                                                <a><p> {category.name}</p>
                                                    {sub.length > 0 &&
                                                        <svg width="10px" height="10px" >
                                                            <polyline points="1,2 5,5 9,2" stroke="#ddd" strokeWidth={2} fill="none" strokeLinejoin="round" strokeLinecap="round" />
                                                        </svg>
                                                    }
                                                </a>
                                            </Link>
                                            {sub &&
                                                <ul className={styles.dropdown}>
                                                    {sub.map((cate, index) => {
                                                        return (
                                                            <li key={index.toString()}>
                                                                <Link href={`/${cate.slug}`}>
                                                                    <a >{cate.name} </a>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            }

                                        </li>
                                    )
                                }
                                else if (category.type === "sub") {
                                    // hide sub category
                                    return
                                }
                            })}
                            <li style={{display:"inline-block"}}>
                                <Link href={"/"}>
                                    <a style={{  color: "white",lineHeight:"34px", letterSpacing:"5px",fontWeight:"900" }} ref={"nofolow"}>...</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
