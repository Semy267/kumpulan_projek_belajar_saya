import Button from "../elements/button";
import Dropdown from "./dropdown";

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
            <li className="cursor-pointer flex items-center space-x-2 kelas" onClick={dropdown}><span>Kelas</span> <img src="./public/arrowDown.svg" alt="" id="arr1" className="duration-300"/></li>
            <Dropdown></Dropdown>
            <li className="cursor-pointer flex items-center space-x-2 program" onClick={dropdown2}><span>Program</span> <img src="./public/arrowDown.svg" alt="" id="arr2" className="duration-300"/></li>
            <li className="cursor-pointer">Event</li>
            <li className="cursor-pointer">Komunitas</li>
            <li className="cursor-pointer">Tentang Kami</li>
            <li className="cursor-pointer">Artikel</li>
        </ul>
    )
}

let count = false
function dropdown(){
    const arr1 = document.getElementById("arr1");
    if(count){
        arr1.style.transform = "rotate(0deg)";
    }else{
        arr1.style.transform = "rotate(180deg)";
    }

    count = !count
}

let count2 = false
function dropdown2(){
    const arr2 = document.getElementById("arr2");
    if(count2){
        arr2.style.transform = "rotate(0deg)";
    }else{
        arr2.style.transform = "rotate(180deg)";
    }

    count2 = !count2
}
