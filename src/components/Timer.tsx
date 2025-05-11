import { useEffect, useState } from "react";

function SecondsToTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;

    if (seconds.toString().length === 1) {
        return `${minutes}:0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function Timer() {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); 

    return <h1>{time}</h1>;
}

export default Timer;
