import { useState, useEffect } from "react"

export default function Card() {
    const [data, setData] = useState(null)
    useEffect( () => {
        async function fetchData() {
            const response =await fetch('./src/services/productDevelopment.json')
            const Data = await response.json()
            setData(Data)
        }
        fetchData()
    }, [])


    if(!data) return null


    return data.map(data => {
        return (
            <div className="flex flex-col space-y-3 w-[295px]" key={data.id}>
                <img src={data.image} alt="" />
                <h1 className="text-[24px] font-bold text-left">{data.title}</h1>
                <p className="text-sm text-left text-[#64748B]">{data.description}</p>
    
            </div>
        )
    });

}

