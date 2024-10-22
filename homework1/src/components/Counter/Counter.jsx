import { useState } from "react";
import "./Countes.css"
function Counter()
{
    const [count, setCount] = useState(0)
    const [r, setR] = useState(0)
    const [g, setG] = useState(255)
    const [b, setB] = useState(0)
    const [color, setColor] = useState(`rgb(${r}, ${g}, ${b}`)

    function minusCount()
    {
        setCount(count - 1);
        setR(r - 5)
        if (count < 0){ setG(g - 5) } else{ setG(g + 5) }
        setB(b + 5)
        setColor(`rgb(${r}, ${g}, ${b}`)
    }
    function nullCount()
    {
        setCount(0);
        setR(0)
        setG(255)
        setB(0)
        setColor(`rgb(0, 255, 0)`)
    }
    function plusCount()
    {
        setCount(count + 1);
        setR(r + 5)
        if (count > 0){ setG(g - 5) } else{ setG(g + 5) }
        setB(b - 5)
        setColor(`rgb(${r}, ${g}, ${b}`)
    }

    return(
        <div className="counter" style={{backgroundColor: color}}>
            <p>{count}</p>
            <div className="buttons">
                <button onClick={minusCount}>Уменьшить</button>
                <button onClick={nullCount}>Сбросить</button>
                <button onClick={plusCount}>Увеличить</button>
            </div>
        </div>
    );
}

export default Counter;