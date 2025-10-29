import { useState } from "react";
import { Advicee } from "./utils/types"; 
import GenerateAdvice from "./components/generateAdvice";
import NavBar from "./components/NavBar";
import ShowAdvice from "./components/ShowAdvice";
import Favourite from "./components/Favourite";
import MobileBar from "./components/MobileBar";

function App() {
    const [page, setPage] = useState(0);
    const [list, setList] = useState<Advicee[]>([]);
    const [show, setShow] = useState(false);

    return (
        <>
            <NavBar page={page} set={(num) => setPage(num)} setshow={(ttt) => setShow(ttt)} />
            <GenerateAdvice pa={page} set={(num) => setPage(num)} />
            <ShowAdvice pa={page} set={(num) => setList(num)} list={list} />
            <Favourite page={page} list={list} setList={(num) => setList(num)} />
            <MobileBar page={page} show={show} setShow={(ttt) => setShow(ttt)} set={(num) => setPage(num)} />
        </>
    );
}

export default App;
