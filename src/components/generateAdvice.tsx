import { FC } from "react";
import background from "../assets/home/background-home-desktop.jpg";

interface GenerateAdviceProps {
  pa: number;
  set: (value: number) => void;
}

const GenerateAdvice: FC<GenerateAdviceProps> = ({ pa, set }) => {
  const handleClick = () => {
    set(1);
  };

  return (
    <section
      style={
        ({ display: pa === 0 ? "flex" : "none" },
        { backgroundImage: `url(${background})` })
      }
      className="w-full min-h-screen bg-[url('..\\src\\assets\\home\\background-home-desktop.jpg')] bg-cover bg-no-repeat flex flex-col space-y-16"
    >
      <div className="w-full flex-1 mt-36 flex items-center px-40 max-[800px]:items-start max-[800px]:pt-20 max-[800px]:justify-center">
        <div className="flex flex-col text-white space-y-8">
          <p className="text-xl tracking-widest">SO, YOU WANT SOME</p>
          <p className="text-7xl tracking-widest font-semibold">ADVICES</p>
          <p className="w-96 text-base tracking-widest opacity-80">
            CLICK THE ADVICE BUTTON TO GET A RANDOM ADVICE FROM API
          </p>
        </div>
        <div
          onClick={handleClick}
          className="absolute bottom-10 shadow-2xl cursor-pointer left-3/4 w-40 h-40 rounded-full bg-white flex justify-center items-center max-[800px]:left-1/2"
        >
          <p className="text-xl tracking-widest font-medium">ADVICE</p>
        </div>
      </div>
    </section>
  );
};

export default GenerateAdvice;
