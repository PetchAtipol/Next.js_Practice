import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>หน้าแรก</title>
        <meta name="keyword" content="ร้านค้าออนไลน์"/>
     </Head>
      <div className="flex-col flex justify-center ">
        <p className="flex justify-center">หน้าแรก</p>
        <div className="flex justify-center">
          <Image src="/shopping.svg" width={652} height={570.12526}></Image>
        </div>

      </div>
    </>

  );
}
