export default function AuthLayout({children, title, type, para}) {
    return (
        <div className="container m-auto w-fit flex flex-col space-y-7 justify-center">
            <HeaderAuth title={title} type={type} para={para} />
            {children}
            <Navigation type={type} />
        </div>
    )
}





function HeaderAuth({title, para, type}) {
    return(
        <>
            <img src="./public/logo (2).svg" alt="" className="w-[300px] h-[104px] m-auto"/>
            <div className="flex flex-col space-y-4 text-center">
                <h1 className="text-2xl font-bold inline-block">{title}</h1>
                <p className="text-xl text-wrap w-[400px] m-auto">{para}</p>
            </div>
            <p className="text-center text-2xl">Atau</p>
            <button className="w-[700px] h-[64px] border flex justify-center space-x-1 items-center rounded-xl border-[#475569]">
                <img src="./public/google.svg" alt="" />
                <p className="text-2xl">{type} dengan Google</p>
            </button>
        </>
    )
}

const Navigation = ({type}) => {
    if(type === "Masuk"){
        return(
            <div className="flex justify-center">
                <p className="text-lg">Belum punya akun? <a href="/register" className="text-blue-600 font-bold">Daftar</a></p>
            </div>
        )
}else{
    return(
        <div className="flex justify-center">
        <p className="text-lg">Sudah punya akun? <a href="/login" className="text-blue-600 font-bold">Masuk</a></p>
    </div>
    )
}    
}