import { useEffect, useState } from "react";
import titan from '../assets/destination/image-titan.png';
import { Advicee } from "../utils/types"; // Import from the same source


interface FavouriteProps {
    page: number;
    list: Advicee[]; // Ensure consistent type usage
    setList: (advice: Advicee[]) => void; // Type should match
}

const Favourite: React.FC<FavouriteProps> = ({ page, list, setList }) => {
    const [li, setLi] = useState<Advicee[]>(list);
    const [advice, setAdvice] = useState<Advicee | null>(null);

    useEffect(() => {
        setLi(list);
        if (list.length > 0) {
            setAdvice(list[0]);
        } else {
            setAdvice(null);
        }
    }, [list]);

    const handleShow = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.innerText) - 1;
        setAdvice(li[index]);
    };

    const handleDelete = () => {
        if (advice) {
            const updatedList = li.filter((item) => item.id !== advice.id);
            setList(updatedList);
            setAdvice(null);
        }
    };

    return (
        <section
            className={`w-full min-h-screen bg-[url('../src/assets/technology/background-technology-desktop.jpg')] bg-cover bg-no-repeat flex flex-col space-y-16 ${page === 2 ? 'flex' : 'hidden'}`}
        >
            <div className="absolute w-full top-48 text-white font-bold text-3xl flex justify-center max-[800px]:top-36">
                There are 
                <span className="w-10 h-10 border-border border-2 flex justify-center items-center mx-2 text-2xl">{li.length}</span>
                advices found
            </div>
            {li.length === 0 || !advice ? (
                <div className="w-full flex-1 mt-20 flex justify-center items-center">
                    <p className="text-white font-bold text-3xl">NO ADVICES BEEN SAVED</p>
                </div>
            ) : (
                <div className="w-full flex-1 flex items-center justify-between px-60 max-[800px]:flex-col max-[800px]:justify-start max-[800px]:pt-40 max-[800px]:space-y-12 max-[800px]:items-center">
                    <div id="scroll" className="w-20 h-72 overflow-x-auto flex flex-col justify-start items-center space-y-5 max-[800px]:flex-row max-[800px]:w-72 max-[800px]:items-center max-[800px]:justify-start max-[800px]:space-y-0 max-[800px]:space-x-5 max-[800px]:h-20 max-[800px]:overflow-auto">
                        {li.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: advice.id === item.id ? "white" : "transparent",
                                    color: advice.id === item.id ? "black" : "white",
                                }}
                                className="w-16 h-16 rounded-full border-border border-2 text-white flex justify-center items-center cursor-pointer font-medium flex-shrink-0 flex-grow-0"
                                onClick={handleShow}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <p className="w-3/4 text-white font-bold text-xl mb-10 opacity-80 text-center max-[800px]:w-96">{advice?.advice}</p>
                        <div className="w-1/2 border-t-2 border-t-white opacity-10 max-[800px]:w-80"></div>
                        <div className="absolute w-40 h-40 bottom-20 flex justify-center items-center max-[800px]:bottom-10" onClick={handleDelete}>
                            <img className="w-full h-full absolute" src={titan} alt="" />
                            <div className='text-white z-20 py-12 font-semibold text-xl text-center cursor-pointer'>DELETE THIS ADVICE</div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Favourite;
