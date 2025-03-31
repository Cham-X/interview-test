import logo from '../assets/Frame 1000002803-1.png';

const Navbar = () => {
    return (
        <div className='bg-white gap-4 flex items-center py-4 px-8 rounded-[8px]'>
            <img src={logo} alt="logo" className='w-[63px] h-[63px]' />
            <h3 className='text-[28px] font-medium'>Digital Address Verification Report</h3>
        </div>
    )
}

export default Navbar
