import { createContext } from "react";

const scoreContext = createContext({
    score: 0,
    updateScore: (value: number) => {}
});

export default scoreContext;