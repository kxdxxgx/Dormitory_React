export default function Button({ className, children, style = { backgroundColor: '#D9F99D' }, onClick, disabled = false }) {
    return (
        <button
            className={`tab-size-4 user-select-text box-border flex items-center justify-center
            rounded-md text-black font-bold text-lg ${className}`}
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
