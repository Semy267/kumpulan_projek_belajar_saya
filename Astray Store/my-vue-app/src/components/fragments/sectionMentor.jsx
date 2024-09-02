import Title from "../elements/title";
import { useEffect, useState } from "react";

export default function SectionMentor(){


    return(
        <div className="m-auto space-y-5">
        <Title className={"text-center"}>Belajar bareng mentor profesional yang <br /> sudah berpengalaman 5+ Tahun</Title>
        <div className="flex w-full justify-end space-x-2 px-7">
            <h1 className="text-4xl text-[#007AFF] focus:font-bold">&#8678;</h1>
            <h1 className="text-4xl text-[#007AFF]">&#8680;</h1>
        </div>

        <CardMentor/>
    </div>
    )
}
function CardMentor() {

    const [mentor, setMentor] = useState(null)
    useEffect( () => {
        async function fetchData() {
            const response =await fetch('./src/services/dataMentor.json')
            const Data = await response.json()
            setMentor(Data)
        }
        fetchData()
    }, [])


    if(!mentor) return null


        return (

            <div className="flex space-x-4 w-3/4 m-auto">
                {mentor.map(mentor => (
                    <div style={{backgroundImage: `url(${mentor.image})`}} className="w-[252px] h-[285px] flex flex-col justify-end px-4 py-2" key={mentor.id}>
                        <h1 className="text-white font-bold text-xl">{mentor.title}</h1>
                        <p className="text-white text-sm">{mentor.description}</p>
                    </div>
                ))}
            
            </div>


        )

}