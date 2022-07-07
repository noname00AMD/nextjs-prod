import Link from 'next/link'
import Image from 'next/image'

export default function HotTags({ hotTags }) {
    return (
        <>
            <style jsx>{`
                .sticky_top{
                    width: 100%;
                    textAlign: center;
                    minWidth: 300px;
                }
            `}</style>
            <div className="sticky_top" style={{ }}>
                <Image src="/images/banner/600x300.png" width={300} height={600} />
            </div>
        </>
    )
}
