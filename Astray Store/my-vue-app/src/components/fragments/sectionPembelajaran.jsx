import Card from "../elements/card";
import Title from "../elements/title";

export default function SectionPembelajaran() {
    return (
        <>
            <div className="text-center mb-10">
                <Title>Berbagai Pembelajaran di Gebra Digital School</Title>

                <div className="grid grid-cols-4 gap-4 mt-10 w-fit m-auto">

                    <Card />

                </div>
            </div>        
        </>


    )
}