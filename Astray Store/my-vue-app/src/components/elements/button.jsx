import PropsType from 'prop-types'

export default function Button(props) {

    const {onClick, children, className} = props

    return (
        <button
            onClick={onClick}
            className={`w-24 h-10 rounded-md ${className} text-white hover:bg-[#318AFF]`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropsType.func,
    children: PropsType.node,
    className: PropsType.string
}