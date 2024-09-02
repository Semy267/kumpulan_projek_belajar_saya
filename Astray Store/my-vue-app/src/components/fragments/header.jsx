import { IconArrowNarrowDown } from "@tabler/icons-react";
import Button from "../elements/button";

/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    return (
        <div className="w-full h-[644px] bg-gradient-to-r from-[#007AFF] to-[#504EB6] pt-32 mb-[280px]">
            <div className="m-auto w-fit">
                <div className="text-white space-y-10 text-center mb-[40px]">
                    <h1 className="text-xl font-semibold">Gebra Digital School</h1>
                    <h2 className="text-4xl font-semibold">Ubah Masa Depanmu Dengan Keahlian Baru</h2>
                    <p className="text-lg">"Gabung dengan ribuan pelajar yang telah sukses bersama <br /> kursus online kami. Mulai belajar sekarang dan buka peluang <br /> karier yang lebih cerah!"</p>
                </div>
                <div className="flex justify-center space-x-4 mb-[40px]">
                    <Button className={"bg-[#F8FAFC] font-semibold w-36 text-[#007A]"}>Belajar Sekarang</Button>
                    <Button className={"bg-transparent font-semibold w-36 text-white flex space-x-3 justify-center items-center"}>Selengkapnya <IconArrowNarrowDown stroke={2} /></Button>
                </div>
                <div>
                    <img src="./public/Rectangle 37.svg" alt="" />
                </div>
            </div>
        </div>
    )
}