import React from 'react'
import stamp from "../assets/stamp.svg"


const Certification = () => {
    return (
        <div className='bg-white p-4 py-8 sm:p-8 flex flex-col '>
            <p className='text-[12px] font-[300]'>ADDRESS INFORMATION</p>
            <div className='flex flex-col md:flex-row gap-12 md:gap-20 items-center'>
                <p className='text-[16px] font-[400] max-w-[668px] uppercase'>I {" "}<span className="border-b  w-[230px] inline-block"></span>
                    {" "} hereby certify that the information presented for the above named customer for address verification is true and accurate.</p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
                    <div className="flex flex-col items-center gap-2">
                        <span className="border-b  w-[286px] inline-block"></span>
                        <p className='text-[#667085] text-[14px] font-[400]'>SIGNATURE & DATE</p>
                    </div>
                    <img src={stamp} alt="image" className='w-[94px] h-[90px] self-center' />
                </div>
            </div>
        </div>
    )
}

export default Certification
