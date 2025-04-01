import logo from '../assets/Frame 1000002803-1.png';

const Navbar = () => {
    return (
        <div className='bg-white gap-4 flex items-center py-4 px-8 rounded-[8px]'>
            <img src={logo} alt="logo" className='w-12 h-12 md:w-[55px] md:h-[55px] lg:w-[63px] lg:h-[63px]' />
            <h3 className='text-[20px] xl:text-[26px] md:text-[28px] font-medium'>
                Digital Address Verification Report
            </h3>
        </div>
    )
}

export default Navbar
