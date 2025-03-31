import image1 from "../assets/Rectangle 3.png"
import image2 from "../assets/Rectangle 4.png"


const BuildingImages = () => {
    return (
        <div className='flex bg-white rounded-[6px] gap-4 p-4 sm:p-8'>
            <div className='flex flex-col sm:flex-row items-start justify-between gap-4 w-full'>
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
    )
}

export default BuildingImages
