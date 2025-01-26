import { useState } from "react"
import "./style.css"

function Counterapp() {
    var [count, setcount] = useState(0)

    function increment(event) {
        event.preventDefault()
        setcount(count + 1)
    }

    function decrement(event) {
        event.preventDefault()
        setcount(count - 1)
    }

    function reset()
    {
        setcount(0)
    }

    return (
        <section className="whole_container">
            <form className="container">
                <h1 className="container_title">Counter APP</h1>
                <h1 className="container_result">{count}</h1>
                <button className="increment_btn" onClick={increment}>Increment</button>
                <button className="decrement_btn" onClick={decrement}>Degrement</button>
                <input type="reset" className="reset_btn" onClick={reset}></input>
            </form>
        </section>
    )
}

export default Counterapp
