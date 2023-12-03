import React, { useState } from 'react';

const TimePicker = () => {
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(0);
    const [isAM, setIsAM] = useState(true);

    const handleHoursChange = (e) => {
        setHours(e.target.value);
    };

    const handleMinutesChange = (e) => {
        setMinutes(e.target.value);
    };

    const handleAMPMChange = () => {
        setIsAM(!isAM);
    };

    return (
        <div className="time-picker flex items-center">
            <select className='text-[17px] text-black ' value={hours} onChange={handleHoursChange}>
                {/* Generate hours dynamically */}
                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <span>:</span>
            <select className='text-[17px]  text-black' value={minutes} onChange={handleMinutesChange}>
                {/* Generate minutes dynamically */}
                {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                        {i.toString().padStart(2, '0')}
                    </option>
                ))}
            </select>
            <button onClick={handleAMPMChange}>{isAM ? 'AM' : 'PM'}</button>
        </div>
    );
};

export default TimePicker;
