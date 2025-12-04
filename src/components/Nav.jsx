import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <div>
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div>
                        <li><Link to="/calculator">Calculator</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                        <li><Link to="/user-list">User List</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Nav