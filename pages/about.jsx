import Image from "next/image"
import Head from "next/head"


export default function About() {
    return (
        <>
            <Head>
                <title>หน้าแรก</title>
                <meta name="keyword" content="ร้านค้าออนไลน์" />
            </Head>
            <div>
                <p>เกี่บวกับเรา</p>
                <Image src="/globe.svg" width={100} height={100}></Image>
            </div>
        </>
    )
}