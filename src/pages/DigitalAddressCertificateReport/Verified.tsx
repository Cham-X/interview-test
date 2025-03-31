import logo from '../../assets/Frame 1000002803-1.png';
import image from "../../assets/Rectangle 636.png";
import image1 from "../../assets/Rectangle 4.png";
import image2 from "../../assets/Rectangle 3.png"

const Verified = () => {
    return (
        <div className='flex flex-col gap-4 w-full h-screen p-4'>
            <div className='bg-white gap-4 flex items-center py-4 px-8 rounded-[8px]'>
                <img src={logo} alt="logo" className='w-[63px] h-[63px]' />
                <h3 className='text-[28px] font-medium'>Digital Address Verification Report</h3>
            </div>
            <div className='grid grid-cols-2 gap-4 w-full'>
                <div className='flex flex-col bg-white rounded-[6px] gap-4 p-8'>
                    <p className='text-[12px] font-[300]'>CUSTOMER INFORMATION</p>
                    <div className='flex items-start justify-between w-full'>
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
                <div className='flex flex-col bg-white rounded-[6px] gap-4 p-8'>
                    hello
                </div>
                <div className='flex flex-col bg-white rounded-[6px] gap-4 p-8'>
                    <p className='text-[12px] font-[300]'>ADDRESS INFORMATION</p>
                    <div className='flex items-start justify-between w-full'>
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
                                <h3 className='text-[16px] font-medium'>View Map URL</h3>
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
                                <h3 className='text-[16px] font-medium'>View Electricity Bill</h3>
                                <p className='text-[12px] font-[400] text-[#667085]'>ELECTRICITY BILL URL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex bg-white rounded-[6px] gap-4 p-8'>
                    <div className='flex items-start justify-between gap-4 w-full'>
                        <div className='flex flex-col items-start gap-4 justify-between'>
                            <p className='text-[12px] font-[300]'>BUILDING IMAGE</p>
                            <div className='max-w-[280px] h-[251px]'>
                                <img src={image1} alt="image" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-4 justify-between'>
                            <p className='text-[12px] font-[300]'>NEARBY LANDMARK</p>
                            <div className='max-w-[280px] h-[251px]'>
                                <img src={image2} alt="image" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verified
