import eye from "../assets/eye.svg"

const AddressInfo = () => {
    return (
        <div className='flex flex-col bg-white rounded-[6px] gap-4 p-8'>
            <p className='text-[12px] font-[300]'>ADDRESS INFORMATION</p>
            <div className='flex items-start flex-wrap gap-8 justify-between w-full'>
                <div className='flex flex-col items-start gap-[32px] justify-between'>
                    <div>
                        <h3 className='text-[16px] font-medium'>25 Abule-Oja road, Akoka, Yaba</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>CURRENT ADDRESS</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium'>Somolu</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>LGA</p>
                    </div>
                    <div>
                        <div className='text-[16px] font-[400] text-[#027A48] text-[13px] flex items-center gap-1'>
                            <p>View Map URL</p>
                            <img src={eye} alt="image" />
                        </div>
                        <p className='text-[12px] font-[400] text-[#667085]'>VERIFICATION TIME STAMP</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[32px] justify-between'>
                    <div>
                        <h3 className='text-[16px] font-medium'>Lagos</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>STATE</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium'>Univeristy of Lagos</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>NEARBY LANDMARK</p>
                    </div>
                    <div>
                        <div className='text-[16px] font-[400] text-[#027A48] text-[13px] flex items-center gap-1'>
                            <p>View Electricity Bill</p>
                            <img src={eye} alt="image" />
                        </div>
                        <p className='text-[12px] font-[400] text-[#667085]'>ELECTRICITY BILL URL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressInfo
