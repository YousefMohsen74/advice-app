import Logo from '../assets/shared/logo.svg';
import { CiMenuBurger } from "react-icons/ci";
import { FC } from "react";

interface NavBarProps {
    page: number;
    set: (value: number) => void;
    setshow: (value: boolean) => void;
}

const NavBar: FC<NavBarProps> = ({ page, set, setshow }) => {
    const handleMenu = () => {
        setshow(true);
    };

    const handleGet = () => {
        if (page === 0 || page === 1) {
            return;
        } else {
            set(1);
        }
    };

    const handleFavourite = () => {
        if (page === 2) {
            return;
        } else {
            set(2);
        }
    };

    return (
        <section className="fixed pl-9 top-10 w-full h-20 flex items-center justify-between max-[800px]:pr-9">
            <div className='rounded-full w-10 h-10 flex justify-center items-center'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='absolute w-5/12 h-0.5 left-44 opacity-15 z-40 bg-white max-[800px]:hidden'></div>
            <div className="w-1/2 h-full bg-nav backdrop-blur-sm flex items-center text-white justify-evenly max-[800px]:hidden">
                <div className='relative h-full flex flex-col justify-center'>
                    <div className='flex space-x-2 items-center cursor-pointer' onClick={handleGet}>
                        <span className='font-bold text-sm'>00</span>
                        <p className='text-base opacity-80'>GET ADVICE</p>
                    </div>
                    <div style={{ display: page !== 2 ? "flex" : "none" }} className='absolute -bottom-1 w-full h-2 border-t-4 border-white self-end'></div>
                </div>
                <div className='relative h-full flex flex-col justify-center'>
                    <div className='flex space-x-2 items-center cursor-pointer' onClick={handleFavourite}>
                        <span className='font-bold text-sm'>01</span>
                        <p className='text-base opacity-80'>FAVOURITE</p>
                    </div>
                    <div style={{ display: page === 2 ? "flex" : "none" }} className='absolute -bottom-1 w-full h-2 border-t-4 border-white self-end'></div>
                </div>
            </div>
            <div onClick={handleMenu} className='w-10 h-10 cursor-pointer hidden max-[800px]:block'>
                <CiMenuBurger className='w-full h-full text-white' />
            </div>
        </section>
    );
};

export default NavBar;
