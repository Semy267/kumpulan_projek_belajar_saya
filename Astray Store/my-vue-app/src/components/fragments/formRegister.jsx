import { InputContainer } from "../elements/inputContainer";

export default function FormRegister() {
    return (
        <form action="" className=" pt-8 space-y-6">
            <InputContainer label="Nama Lengkap" type="text" name="namaLengkap" placeholder="Masukan nama lengkap" />
            <InputContainer label="Email" type="email" name="email" placeholder="Masukan email anda" />
            <InputContainer label="Nomor Hp" type="tel" name="nomorHp" placeholder="Masukan nomor hp" />
            <InputContainer label="Password" type="password" name="password" placeholder={`Buat password`} />
            <InputContainer label="Konfirmasi Password" type="password" name="konfirmasiPassword" placeholder={`Konfirmasi password`} />
            <div className="flex justify-start text-xl space-x-1">
                <input type="checkbox" name="" id="" className="w-4" />
                <p>Menyetujui Syarat dan Ketentuan yang ada</p>
            </div>
            <button className="h-[70px] bg-[#007AFF] text-white rounded text-center p-[10px] w-full font-semibold text-xl">Masuk</button>
        </form>
    )
}