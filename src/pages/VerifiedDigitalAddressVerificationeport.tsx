import Navbar from "../component/Navbar";
import tick from "../assets/Icon.svg"
import Certification from "../component/Certification";
import CustomerInfo from "../component/CustomerInfo";
import AddressInfo from "../component/AddressInfo";
import BuildingImages from "../component/BuildingImages";

const VerifiedDigitalAddressVerificationeport = () => {
    return (
        <div className='flex flex-col gap-4 w-full h-screen p-4 mb-8'>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <CustomerInfo />
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
                            <p className="text-4 font-[400]">Address building</p>
                            <img src={tick} alt="tick" className="w-[18px] h-[15px]" />
                        </div>
                        <div className="flex items-center justify-between w-full border-b border-b-[#EAECF0] px-6 py-3">
                            <p className="text-4 font-[400]">Customer resides at the declared address</p>
                            <img src={tick} alt="tick" className="w-[18px] h-[15px]" />
                        </div>
                    </div>
                </div>
                <AddressInfo />
                <BuildingImages />
            </div>
            <Certification />
        </div>
    )
}

export default VerifiedDigitalAddressVerificationeport
