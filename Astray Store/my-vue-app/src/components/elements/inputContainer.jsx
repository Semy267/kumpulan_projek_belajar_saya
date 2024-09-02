export function InputContainer({label, type, name, placeholder}){
    return(
        <div className="flex flex-col space-y-4">
            <label htmlFor={name} className="text-lg">{label}</label>
            <input type={type} name={name} placeholder={placeholder} id={name} className="border p-4 rounded h-[70px] border-[#CBD5E1] bg-[#F1F5F9]" />
        </div>
    )
}