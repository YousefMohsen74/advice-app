import { useEffect, useState } from 'react';
import Mars from '../assets/destination/image-mars.png';
import Moon from '../assets/destination/image-moon.png';
import image from '../assets/destination/image-europa.png';
import React, { FC } from 'react';

interface Advice {
    id?: number; // optional, depending on your API response
    advice: string;
}

interface ShowAdviceProps {
    pa: number;
    set: React.Dispatch<React.SetStateAction<Advice[]>>;
    list: Advice[];
}

const ShowAdvice: FC<ShowAdviceProps> = ({ pa, set, list }) => {
    const [advice, setAdvice] = useState<Advice | null>(null); // Initialize as null
    const [another, setAnother] = useState(true);

    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
            .then(res => res.json())
            .then(data => {
                setAdvice(data.slip);
            });
    }, [another]);

    const handleSave = () => {
        if (advice) {
            set([...list, advice]); // Ensure advice is defined
            setAnother(!another);
        }
    };

    const handleAnother = () => {
        setAnother(!another);
    };

    return (
        <section style={{ display: pa === 1 ? "flex" : "none" }} className="w-full min-h-screen bg-[url('..\\src\\assets\\destination\\background-destination-desktop.jpg')] bg-cover bg-no-repeat flex flex-col space-y-16">
            <div className='absolute top-48 left-40 max-[800px]:left-52 max-[800px]:top-5 max-[800px]:w-72 max-[800px]:h-72'>
                <img src={Mars} alt="" />
            </div>
            <div className="w-full flex-1 pt-32 flex">
                <div className='w-3/4 flex justify-center tracking-widest max-[800px]:hidden'>
                    {/* Optional content can be added here */}
                </div>
                <div className='w-full flex flex-col py-16 items-center space-y-5 max-[800px]:pt-32'>
                    <div className='text-white font-medium opacity-80 text-2xl text-center'>HERE IS YOUR ADVICE</div>
                    <div className='w-96 border-t-2 border-t-white opacity-10'></div>
                    <div className='text-white font-bold text-xl pt-10 opacity-80 w-3/4 text-center'>{advice?.advice}</div>
                </div>
            </div>
            <div className='absolute right-20 bottom-20 w-40 h-40 cursor-pointer flex justify-center max-[800px]:bottom-10 max-[800px]:right-20' onClick={handleSave}>
                <img className='absolute w-full h-full' src={Moon} alt="" />
                <div className='text-white z-20 py-12 font-semibold text-xl'>SAVE</div>
            </div>
            <div className='absolute left-1/2 bottom-20 w-40 h-40 cursor-pointer flex justify-center items-center max-[800px]:bottom-10 max-[800px]:left-20' onClick={handleAnother}>
                <img className='absolute w-full h-full' src={image} alt="" />
                <div className='w-full text-white z-20 font-semibold text-xl text-center pr-5'>ANOTHER ADVICE</div>
            </div>
        </section>
    );
};

export default ShowAdvice;
