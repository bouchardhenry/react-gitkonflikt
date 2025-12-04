import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="homeDiv">
            <h1>Home</h1>
            <div className="buttonDiv">
                <button><Link to="/calculator">Calculator</Link></button>
                <button><Link to="/todo">Todo List</Link></button>
                <button><Link to="/user-list">User List</Link></button>
            </div>
        </div>
    )
}

export default Home