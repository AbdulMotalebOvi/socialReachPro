import React from "react"
export default function SectionTitle({ header, desc }) {

    return (
        <div className="m-auto text-center space-y-4">
            <h2 className="font-bold text-3xl text-[#012B6D]">{header}</h2>
            <p className="w-[40%] m-auto">{desc}</p>
        </div>
    )
}

