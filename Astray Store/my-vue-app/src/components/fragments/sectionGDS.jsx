import Title from "../elements/title";

export default function SectionGDS() {
    return(
        <div className="w-fit m-auto space-y-10 mb-[150px]">
            <Title className={"text-center"}>Kenapa Gebra Digital School Berbeda</Title>
            <div className="flex space-x-10 items-center">
                <img src="./public/GDS.svg" alt="" />
                <div className="flex flex-col space-y-4">
                    <Label title="Akses mudah & program-program beragam" logo="./public/label 1.svg" className={"bg-[#187CFF]"}>akses mudah dan beragam program adalah penting untuk memastikan partisipasi yang luas.</Label>
                    <Label title="Ratusan Ribu Member. Terbukti Berdampak" logo="./public/label 2.svg" className={"bg-[#28A4D7]"}>Kami menghubungkan kamu dengan project dari Hiring Partner, Perusahaan maupun UKM agar income dan skill kamu makin jago</Label>
                    <Label title="Ratusan Ribu Member. Terbukti Berdampak" logo="./public/label 3.svg" className={"bg-white text-black"}>Kami menghubungkan kamu dengan project dari Hiring Partner, Perusahaan maupun UKM agar income dan skill kamu makin jago</Label>
                </div>

                
            </div>
        </div>
    )

}


function Label({children, logo, title, className }) {
    return (
        <div className={`flex space-x-5 w-[504px] p-4 text-white rounded shadow-lg ${className}`}>
            <img src={logo} alt="" />
            <div>
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="text-[13px]">{children}</p>
            </div>
        </div>
    )
}