import { useState } from "react";

const Collabsible = ({ children }) => {
    const [isHidden, setIsHidden] = useState(true)

    const toggleView = () => {
        setIsHidden(false)
    }
    return <section>
        {isHidden ? null : children}
        <button onClick={toggleView}>{isHidden ? "View" : "Hide" } Comments</button>
    </section>
}

export default Collabsible;