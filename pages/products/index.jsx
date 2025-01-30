import Head from "next/head"
//https://dummyjson.com/products?limit=12
import Image from "next/image"

export async function getStaticProps(params) {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()
    console.log(data)
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
            <div className="w-full h-auto flex justify-center">
                <div className="w-4/5 h-auto bg-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-2">
                    {products.map(products => (
                        <div key={products.id} className="flex-col w-full h-[400px] bg-gray-200">
                            <Image src={products.thumbnail} alt={products.title} width={500} height={500} className="border-2 border-green-500 h-5/6"></Image>

                            <h1 className="flex h-1/6 border-2 justify-center items-end">{products.title}</h1>

                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Index;