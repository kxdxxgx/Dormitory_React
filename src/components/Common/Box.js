export default function Box({ className, children }) {
    return (
        <div
            className={`text-black w-full text-sm font-normal bg-white border border-gray-300 rounded-lg p-6 pb-10 ${className}`}
        >
            {children}
        </div>
    )
}
