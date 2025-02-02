import Head from "next/head"
//https://dummyjson.com/products?limit=12
import Image from "next/image"
import Link from "next/link"

export async function getStaticProps(params) {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()
    // console.log(data)
    return {
        props: { products: data.products }
    }
}

const Index = ({ products }) => {
    return (
        <>
            <Head>
                <title>หน้าแรก</title>
                <meta name="keyword" content="ร้านค้าออนไลน์" />
            </Head>
            <div className="w-full h-auto flex justify-center ">
                <div className="w-4/5 h-auto bg-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-2 px-2 py-2">
                    {products.map(products => (
                        <div key={products.id} className="flex-col w-full h-[400px] bg-gray-200 cursor-pointer rounded-md">
                            <Link href={'/products/' + products.id}>
                                <Image src={products.thumbnail} alt={products.title} width={500} height={500} className="border-2 hover:border-orange-400 active:bg-orange-600 duration-100 h-5/6 rounded-t-md"></Image>
                                <h1 className="flex text-[15px] h-1/6 justify-center items-center hover:bg-orange-400 active:bg-orange-600 duration-100 font-semibold rounded-b-md">{products.title}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Index;