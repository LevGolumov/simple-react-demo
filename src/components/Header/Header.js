import classes from "./Header.module.css"
import Toggles from "../UI/Toggles";

function Header() {
    return <header className={classes.header}>
        <nav className={`${classes.nav} container`}>
            <span className={classes.nav__logo}>Demo Table</span>
            <div>
                <Toggles />
            </div>
        </nav>
    </header>
}

export default Header;