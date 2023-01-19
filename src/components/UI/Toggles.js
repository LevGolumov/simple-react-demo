import Locale from "./Locale";
import About from "./About";

function Toggles() {
    return <div style={{ margin: "auto", cursor: "pointer", width: "fit-content" }}>
<About />
<Locale />
    </div>;
}

export default Toggles;