import React, { useState } from 'react'


const Business = () => {
    const options = [
        { label: 'Select one...', value: 0 },
        { label: 'Beachbody', value: 1 },
        { label: 'Bella Shaye Jewelry', value: 2 },
        { label: 'Chloe + Isabel', value: 3 },
        { label: 'Close to My Heart', value: 4 },
        { label: 'Color Street', value: 34 },
        { label: 'Damsel In Defense', value: 5 },
        { label: 'Direct Cellars', value: 6 },
        { label: 'doTERRA', value: 7 },
        { label: 'Endless Xpressions', value: 8 },
        { label: 'It Works!', value: 9 },
        { label: 'Jamberry', value: 10 },
        { label: 'Lemongrass Spa', value: 11 },
        { label: 'LipSense', value: 12 },
        { label: 'LuLaRoe', value: 13 },
        { label: 'Mary & Martha', value: 14 },
        { label: 'Mary Kay', value: 15 },
        { label: 'Miche Bags', value: 16 },
        { label: 'Moji Life', value: 17 },
        { label: 'Norwex', value: 18 },
        { label: 'Pampered Chef', value: 19 },
        { label: 'PartyLite', value: 20 },
        { label: 'Perfectly Posh', value: 21 },
        { label: 'Rodan + Fields', value: 22 },
        { label: 'Scentsy', value: 23 },
        { label: 'Senegence', value: 35 },
        { label: 'SimplyFun', value: 24 },
        { label: 'Steeped Tea', value: 25 },
        { label: 'Stella & Dot', value: 26 },
        { label: 'Tastefully Simple', value: 27 },
        { label: 'Thirty One Gifts', value: 28 },
        { label: 'Tupperware', value: 29 },
        { label: 'Uppercase Living', value: 30 },
        { label: 'Usborne Books & More', value: 31 },
        { label: 'Young Living Essential Oils', value: 32 },
        { label: 'Younique', value: 33 },
        { label: 'Other...', value: 1000 },
    ];

    const [selectedValue, setSelectedValue] = useState(0);

    const handleChange = (e) => {
        setSelectedValue(parseInt(e.target.value, 10));
    };

    return (
        <div className='flex flex-col '>
            <label className="text-gray-800 font-medium px-2 py-2">
                Primary Business:
            </label>

            <select
                className="select-v-menu border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
                value={selectedValue}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}


export default Business