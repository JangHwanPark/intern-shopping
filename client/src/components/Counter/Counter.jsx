import React, { useState } from 'react';

export default function Counter() {
    const [Like, setLike] = useState(0);
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number+1);
    }
    const onDecrease = () => {
        setNumber(number-1);
    }

    return (
        <div>
            <div onClick={() => {
                setLike(Like + 1)
            }}> ❤️ {Like}</div>

            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}