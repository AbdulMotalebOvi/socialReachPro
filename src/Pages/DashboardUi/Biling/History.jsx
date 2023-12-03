import React from 'react'

const History = () => {
    return (
        <div className="collapse collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                Biling History
            </div>
            <div className="collapse-content">
                <p>Your Account has no payment history</p>
            </div>
        </div>
    )
}

export default History