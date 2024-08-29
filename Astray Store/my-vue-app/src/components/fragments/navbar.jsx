import Button from "../elements/button";

export default function Navbar() {
    return (
        <div className="w-full h-16 flex justify-around items-center space-x-4 px-4 bg-gradient-to-r from-[#007AFF] to-[#504EB6] fixed z-10">
            <img src="./public/Logo (1).svg" alt="" />

            <List />

            <div className="flex space-x-4">
                <Button className={"bg-transparent"} onClick={() => window.location.href = "/login"} >Masuk</Button>
                <Button className={"bg-[#007AFF]"} onClick={() => window.location.href = "/register"} >Daftar</Button>
            </div>
        </div>
    )
}



function List(){
    return (
        <ul className="flex space-x-4 text-white">
            <li>Kelas</li>
            <li>Program</li>
            <li>Event</li>
            <li>Komunitas</li>
            <li>Tentang Kami</li>
            <li>Artikel</li>
        </ul>
    )
}