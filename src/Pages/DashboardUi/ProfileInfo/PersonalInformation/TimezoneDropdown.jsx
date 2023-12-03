import React, { useState } from 'react';

const TimezoneDropdown = () => {
    const timezones = [
        { name: 'US / Hawaii Time', value: 'us/ht' },
        { name: 'US / Alaska Time', value: 'us/at' },
        { name: 'US / Pacific Time', value: 'us/pt' },
        { name: 'US / Mountain Time', value: 'us/mt' },
        { name: 'US / Central Time', value: 'us/ct' },
        { name: 'US / Eastern Time', value: 'us/et' },
        { name: 'GMT (Greenwich Mean Time)', value: 'gmt' },
        { name: 'Europe / London', value: 'europe/london' },
        { name: 'Asia / Tokyo', value: 'asia/tokyo' },
        // Add more timezones here
    ];

    const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]);

    const handleTimezoneChange = (e) => {
        const selectedValue = e.target.value;
        const selectedTz = timezones.find((tz) => tz.value === selectedValue);
        setSelectedTimezone(selectedTz);
    };

    return (
        <div className="flex flex-col ">
            <label className="text-gray-800 font-medium px-2 py-2">Select a Timezone:</label>
            <select
                className="select-v-menu border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
                value={selectedTimezone.value}
                onChange={handleTimezoneChange}
            >
                {timezones.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default TimezoneDropdown;
