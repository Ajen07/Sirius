import React from 'react'

export const status = () => {
    return (
        <div className="status flex flex-wrap gap-[20px] px-[10px] justify-center items-center">
            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
                <p>20k</p>
                <p>Farmers</p>
            </div>

            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
                <p>20k</p>
                <p>Farmers</p>
            </div>
            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
                <p>27k</p>
                <p>Farm Lands</p>
            </div>
        </div>
    )
}
