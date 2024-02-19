interface Iinput {
    label?: string
    required?: boolean
}

export const Input = ({label, required}: Iinput) => {
    return (
        <div className="">
            <label className="text-[12px] font-[600]" htmlFor="inputId">{label} {required && <span className="text-red-700">*</span>}</label>
            <input id="inputId" type="text" placeholder={`Enter here ${label}`} className="w-full text-[12px] px-2 py-3 rounded-[5px] bg-transparent outline-none border-[0.5px] border-solid border-gray-400"/>
        </div>
      
    )
}