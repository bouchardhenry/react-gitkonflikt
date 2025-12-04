import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <button><Link to="/calculator">Calculator</Link></button>
            <button><Link to="/todo">Todo List</Link></button>
            <button><Link to="/user-list">User List</Link></button>
        </>
    )
}

export default Home