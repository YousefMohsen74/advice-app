import { IoCloseSharp } from "react-icons/io5";
import { FC } from "react";

interface MobileBarProps {
    page: number;
    show: boolean;
    setShow: (value: boolean) => void;
    set: (value: number) => void;
}

const MobileBar: FC<MobileBarProps> = ({ page, show, setShow, set }) => {
    const handleClose = () => {
        setShow(false);
    };

    const handleGoAdv = () => {
        set(1);
        setShow(false);
    };

    const handleGoFav = () => {
        set(2);
        setShow(false);
    };

    return (
        <section
            style={{ display: show ? "flex" : "none" }}
            className="absolute z-40 w-full min-h-screen bg-navmob max-[800px]:top-0 max-[800px]:left-0 flex flex-col space-y-20"
        >
            <div
                className="w-full h-20 flex justify-end text-white items-center text-5xl pr-5 cursor-pointer"
                onClick={handleClose}
            >
                <IoCloseSharp />
            </div>
            <div className="flex flex-col space-y-16">
                <div
                    className="relative flex px-20 items-center cursor-pointer text-white space-x-5"
                    onClick={handleGoAdv}
                >
                    <span className="font-bold text-lg">00</span>
                    <p className="text-xl opacity-80">GET ADVICE</p>
                    <div
                        style={{ display: page !== 2 ? "flex" : "none" }}
                        className="absolute right-0 h-10 w-2 border-r-4 border-white self-end"
                    ></div>
                </div>
                <div
                    className="relative flex px-20 items-center cursor-pointer text-white space-x-5"
                    onClick={handleGoFav}
                >
                    <span className="font-bold text-lg">01</span>
                    <p className="text-xl opacity-80">FAVOURITES</p>
                    <div
                        style={{ display: page === 2 ? "flex" : "none" }}
                        className="absolute right-0 h-10 border-r-4 border-white self-end"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default MobileBar;
