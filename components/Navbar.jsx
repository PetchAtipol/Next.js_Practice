import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex w-full h-[50px] bg-gray-200">
            <div className="flex w-1/2 items-center ">
                <Link href="/" className="flex">
                    <h1 className="ml-5 text-green-900 font-bold hover:text-green-600 active:text-green-800 duration-100">GANIMITE</h1>
                    <Image src="/logo.png" width={25} height={25} alt="logo" />
                </Link>
            </div>
            <div className="flex justify-end items-center w-1/2 ">
                <div className="mr-5 hidden md:flex">
                    <Link href="/" className="mr-2 cursor-pointer hover:text-green-700 active:text-green-800 duration-100">หน้าแรก</Link>
                    <Link href="about" className="mr-2 cursor-pointer hover:text-green-700 active:text-green-800 duration-100">เกี่ยวกับเรา</Link>
                    <Link href="/products" className="cursor-pointer hover:text-green-700 active:text-green-800 duration-100">สินค้าทั้งหมด</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
