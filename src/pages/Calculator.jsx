import { useState } from "react";

const Calculator = () => {

const [value1, setValue1] = useState(0)
const [value2, setValue2] = useState(0)
const [result, setResult] = useState(null)

function handleAddition(e) {
    e.preventDefault();
    const sum = Number(value1) + Number(value2);
    setResult(sum);
}

    return (
        <>
            <h1>Calculator</h1>
            <div>
                <form method="post" onSubmit={handleAddition}>
                    <input type="number" value={value1} onChange={(e) => setValue1(e.target.value)}/> 
                    <br />
                    <input type="number" value={value2} onChange={(e) => setValue2(e.target.value)}/>
                    <br />
                    <br />
                    <button type="submit">+</button>
                </form>

                {result ? <h2>Result : {result}</h2> : <p>Add values to get a result</p>}
            </div>

        </>
    )
}

export default Calculator