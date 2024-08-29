import { useEffect, useState } from "react";
import Title from "../elements/title";




export default function TrainingForm(){
    return(
        <div className="bg-slate-50 py-12">
            <div className="w-fit m-auto space-y-6 relative z-0">
                <Title className={"text-center"}>Training Form</Title>
                <div className="grid grid-cols-3 gap-4" >
                    <Card />           
                </div>

            </div>
        </div>

    )
}




 function Card() {
    const [data, setData] = useState(null)
    useEffect( () => {
        async function fetchData() {
            const response =await fetch('./src/services/dataTraining.json')
            const Data = await response.json()
            setData(Data)
        }
        fetchData()
    }, [])


    if(!data) return null
  
    return data.map(data => {
        return(

            <div className="flex flex-col w-[396px] space-y-5 rounded shadow-xl px-4 py-6" key={data.id}>
                <img src={data.image} alt="" className="w-[65px] h-[65px]" />
                <h1 className="font-bold text-2xl">{data.title}</h1>
                <p className="text-[13px]">{data.description}</p>
            </div>  
    
        )        
    })

}