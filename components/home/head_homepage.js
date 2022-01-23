import Head from "next/head"
export default function PageHead({ children, props }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport"
                    content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />

                {/* -- for google  -- */}
                <link rel="canonical" href="https://www.hosting.kr" />
                <meta name="robots" content="all" />
                <meta name="googlebot" content="all" />
                <meta name="google-site-verification" content="IEQdCO8M3OHxVHlGTxrht0K1Hq9rYB-qnVAgKP_G8VE" />
                <link rel="search" type="application/opensearchdescription+xml"
                    href="//static.hostingcdn.net/20210811/js/provider.xml" title="anh gai xinh moi nhat" />
                <script async src="//www.google-analytics.com/analytics.js"></script>
                <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-MB45R3G"></script>

                {/* -- for facebook -- */}
                <meta property="fb:pages" content="122102927812763"></meta>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.hosting.kr" />
                <meta property="og:title" content={props.title} />
                <meta property="og:image" content="//static.hostingcdn.net/20210811/resources/images/og_thumb_logo.png" />
                <meta property="og:description" content={props.description} />
                <meta property="fb:app_id" content="145923738846814" />

                {/* <!-- for twitter --> */}
                <meta name="twitter:card" content="//static.hostingcdn.net/20210811/resources/images/mo_thumb_logo.png" />
                <meta property="twitter:title" content={props.title} />
                <meta property="twitter:description" content={props.description} />
                <meta property="twitter:image" content="" />
                <meta property="twitter:url" content="" />
                {/* <!-- for PWA --> */}
                <link rel="apple-touch-icon" href="/favicon.ico" />

                {/* <!-- for PSS --> */}
                <link rel="alternate" type="application/rss+xml" title={props.title} href="/feed.rss"/>

                {/* <!-- for SEO --> */}
                <title>{props.title}</title>
                <meta name="keywords" content=" gai trung, gai nhat , ao dai , mini skirt,  tin tuc gai xinh" />
                <meta name="description" content={props.description} />
                <meta name="dcterms.creator" content=" do hong" />
                <meta name="dcterms.title" content=" album playboy v12 " />
                <meta name="dcterms.publisher" content="playboy thailan" />
                <meta name="dcterms.date" content=" 26/8/2021" />
                <meta name="dcterms.language" content=" en" />
                <meta name="dcterms.subject" content="this page url" />
                <meta name="dcterms.description" content={props.description} />

                <link rel="manifest" href="/manifest.json" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />


                <meta name="theme-color" content="#20c4ab" />
                <meta name="format-detection" content="telephone=yes,date=no,address=yes,email=yes,url=yes" />
                {/* <!-- style --> */}
                {/* -- icon -- */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                {/* <!-- for devlopment only --> */}
            </Head>
        </>
    )
}
