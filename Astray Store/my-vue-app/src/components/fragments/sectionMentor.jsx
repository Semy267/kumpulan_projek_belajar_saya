import Title from "../elements/title";

export default function SectionMentor() {
    return (
        <div className="w-[1340px] m-auto space-y-5">
            <Title className={"text-center"}>Belajar bareng mentor profesional yang <br /> sudah berpengalaman 5+ Tahun</Title>
            <div className="flex w-full justify-end space-x-2 px-7">
                <h1 className="text-4xl text-[#007AFF] focus:font-bold">&#8678;</h1>
                <h1 className="text-4xl text-[#007AFF]">&#8680;</h1>
            </div>
            <div className="flex space-x-4">
                <div style={{backgroundImage: `url('./public/mentor/1.svg')`}} className="w-[252px] h-[285px] flex flex-col justify-end px-4 py-2">
                    <h1 className="text-white font-bold text-xl">Fikry Nurzaman</h1>
                    <p className="text-white text-sm">Senior Product Designer at oxinos</p>
                </div>



            </div>
        </div>
    )
}