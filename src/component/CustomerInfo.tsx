import image from "../assets/Rectangle 636.png"

const CustomerInfo = () => {
    return (
        <div className='flex flex-col bg-white rounded-[6px] gap-4 p-4 sm:p-8'>
            <p className='text-[12px] font-[300]'>CUSTOMER INFORMATION</p>
            <div className='flex flex-wrap gap-8 items-start justify-between w-full'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[139px] h-[139px]'>
                        <img src={image} alt="image" className='w-full h-full' />
                    </div>
                    <div className='text-center'>
                        <h3 className='text-[14px] font-medium mb-[2px]'>12345H</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>CUSTOMER NUMBER</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[32px] justify-between'>
                    <div>
                        <h3 className='text-[16px] font-medium'>Victor</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>FIRST NAME</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium'>Adebowale</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>LAST NAME</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium'>01/04/2023 09:22am</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>VERIFICATION TIME STAMP</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[32px] justify-between'>
                    <div>
                        <h3 className='text-[16px] font-medium'>Nigeria</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>COUNTRY</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium'>0902 234 5678</h3>
                        <p className='text-[12px] font-[400] text-[#667085]'>PHONE NUMBER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo
