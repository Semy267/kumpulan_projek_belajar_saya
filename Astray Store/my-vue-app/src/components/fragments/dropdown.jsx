
export default function Dropdown() {


        return(
            <div className="border rounded h-[297px] absolute top-14 py-4 px-3 bg-white hidden">
                <h1 className="text-2xl font-bold text-[#475569]">Kategori kelas</h1>
                <div>
                    <div className="flex items-center space-x-2 mt-4">
                        <img src="./public/dropdown 1/icon.svg" alt="" />
                        <div>
                            <h1 className="text-lg font-bold text-black">Vidio Kelas</h1>
                            <p className="text-black">Vidio kelas dengan materi yang tersetruktur singkat dan padat</p>
                        </div>
                    </div>
    
                    <div className="flex items-center space-x-2 mt-4">
                        <img src="./public/dropdown 1/icon (1).svg" alt="" />
                        <div>
                            <h1 className="text-lg font-bold text-black">Artikel</h1>
                            <p className="text-black">Belajar dari artikel yang di tulis oleh para mentor profesional</p>
                        </div>
                    </div>
    
                    <div className="flex items-center space-x-2 mt-4">
                        <img src="./public/dropdown 1/icon (2).svg" alt="" />
                        <div>
                            <h1 className="text-lg font-bold text-black">Webinar</h1>
                            <p className="text-black">Mengikuti webinar atau event yang sudah terjadwal dari komunitas</p>
                        </div>
                    </div>
                </div>
            </div>
        )       
    }

