import Header from "../fragments/header";
import Navbar from "../fragments/navbar";
import SectionGDS from "../fragments/sectionGDS";
import SectionKomunitas from "../fragments/sectionKomunitas";
import SectionMentor from "../fragments/sectionMentor";
import SectionPembelajaran from "../fragments/sectionPembelajaran";
import TrainingForm from "../fragments/trainingForm";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Header></Header>
            <SectionPembelajaran />
            <SectionGDS />
            <TrainingForm />
            <SectionKomunitas />
            <SectionMentor />        
        </>

    )
}