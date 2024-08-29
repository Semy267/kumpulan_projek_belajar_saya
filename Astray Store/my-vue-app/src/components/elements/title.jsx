export default function Title({children, className}) {

    return (
        <h1 className={`text-3xl font-bold ${className} text-[#007AFF] `}>{children}</h1>
    )
}