import image from "../../assets/Rectangle 636.png";
import image1 from "../../assets/Rectangle 4.png";
import image2 from "../../assets/Rectangle 3.png"
import eye from "../../assets/eye.svg"
import stamp from "../../assets/stamp.svg"
import Navbar from "../../component/Navbar";
import tick from "../../assets/Icon.svg"

const Verified = () => {
    return (
        <div className='flex flex-col gap-4 w-full h-screen p-4 mb-8'>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
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
                <div className='flex flex-col bg-white rounded-[6px] p-4 sm:p-8 w-full'>
                    <div className="flex items-center justify-between w-full ">
                        <p className='text-[12px] font-[300]'>VERIFICATION STATUS</p>
                        <div className="text-[#027A48] text-4 font-medium bg-[#ECFDF3] px-2 py-3 rounded-[8px]">Verified</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between w-full border-b border-b-[#EAECF0] px-6 py-3">
                            <p className="text-4 font-[400]">Valid address</p>
                            <img src={tick} alt="tick" className="w-[18px] h-[15px]" />
                        </div>
                        <div className="flex items-center justify-between w-full border-b border-b-[#EAECF0] px-6 py-3">
                            <p className="text-4 font-[400]">Valid address</p>
                            <img src={tick} alt="tick" className="w-[18px] h-[15px]" />
                        </div>
                        <div className="flex items-center justify-between w-full border-b border-b-[#EAECF0] px-6 py-3">
                            <p className="text-4 font-[400]">Valid address</p>
                            <img src={tick} alt="tick" className="w-[18px] h-[15px]" />
                        </div>
                    </div>
                </div>
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
                <div className='flex bg-white rounded-[6px] gap-4 p-4 sm:p-8'>
                    <div className='flex flex-wrap items-start justify-between gap-4 w-full'>
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
        </div>
    )
}

export default Verified
