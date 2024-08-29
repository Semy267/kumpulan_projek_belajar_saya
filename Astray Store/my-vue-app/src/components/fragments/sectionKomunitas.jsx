import Button from "../elements/button";

export default function SectionKomunitas() {
  return (
    <div style={{ backgroundImage: `url('/public/indonesia 1.png')` }} className="w-[1348px] h-[575px] m-auto relative mb-12">
        <div className="w-[460px] m-auto absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center space-y-6">

            <h1 className="text-[#007AFF] text-xl font-bold">Gebra Digital School Comunity</h1>
            <p className="text-lg">Komunitas Gebra Digital School Sudah Tersebar Di Seluruh Daerah Indonesia Yu Gabung Sekarang Dengan Komunitas Kami</p>

            <Button className={"bg-[#007AFF] w-[226px] text-nowrap text-xl"}>Gabung Komunitas</Button>
        </div>
    </div>
  );
}
