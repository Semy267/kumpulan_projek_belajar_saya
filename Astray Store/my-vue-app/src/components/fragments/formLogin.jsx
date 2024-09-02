import { InputContainer } from "../elements/inputContainer";

export default function FormLogin() {
    return (
        <form action="" className=" pt-8 space-y-6">
            <InputContainer label="Email" type="email" name="email" placeholder="masukan email anda" />
            <InputContainer label="Password" type="password" name="password" placeholder={`masukan password`} />
            <div className="flex justify-end">
                <a href="#" className="text-[#007AFF] text-lg">Lupa password?</a>
            </div>
            <button className="h-[70px] bg-[#007AFF] text-white rounded text-center p-[10px] w-full font-semibold text-xl" >Masuk</button>
        </form>
    )
}


