import { useState } from "react";

const Collapsible = ({ children }) => {
    const [isHidden, setIsHidden] = useState(true)

    const toggleView = () => {
        setIsHidden(!isHidden)
    }
    return <section>
        {isHidden ? null : children}
        <button id='collapse' onClick={toggleView} >{isHidden ? "View" : "Hide" } Comments</button>
    </section>
}

export default Collapsible;