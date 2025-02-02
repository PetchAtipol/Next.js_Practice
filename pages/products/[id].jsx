import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    // console.log(data)
    return {
        props: { product: data }
    }
}

const ProductsDetail = ({ product }) => {


    return (
        <>
            <div className="flex justify-center w-full h-auto">
                <div className="flex justify-end w-1/2 ">
                    <Link href={'/products'} className="flex border-2 border-orange-500 rounded-md hover:bg-orange-500 duration-100 active:bg-orange-400 hover:text-white active:text-white py-2 px-5 h-[30px] items-center mt-2">Back</Link>
                    <Image alt={product.title} className="" width={300} height={300} src={product.thumbnail}></Image>
                </div>
                <div className="flex p-5 w-1/2">
                    <div className="">
                        {/* <p>รหัสสิ้นค้า : {product.id}</p> */}
                        <p className="font-bold text-[20px]">{product.title}</p>
                        <p className="mt-2">ราคา : {product.price}</p>
                        <p className="">หมวดหมู่ : {product.category}</p>
                        <p className="">แบรนด์ : {product.brand}</p>
                        <p className="">ข้อมูลพื้นฐาน : {product.description}</p>
                        <p className="mt-5">เรทติ้ง : {product.rating}/5</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsDetail;