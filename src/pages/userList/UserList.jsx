import { useState } from "react"
import style from './style.module.css'

const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ])
    const [addUserModalOpen, setAddUserModalOpen] = useState(false)
    return (
        <>  
            <header className={style.userListHeader}>
                <h1>User list</h1>
                <button onClick={()=> setAddUserModalOpen(true)}><p>Add user</p></button>
            </header>
            <main>
                {users.length === 0 ? (
                    <p>No users available.</p>
                ) : (
                    <table className={style.userTable}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {addUserModalOpen && (
                    <div className={style.modal}>
                        <div className={style.modalContent}>
                            <h2>Add New User</h2>
                            <form className={style.addUserForm} onSubmit={(e) => {
                                e.preventDefault()
                                const formData = new FormData(e.target)
                                const newUser = {
                                    id: users.length + 1,
                                    name: formData.get('name'),
                                    email: formData.get('email'),
                                }
                                setUsers([...users, newUser])
                                setAddUserModalOpen(false)
                            }}>
                                <label>Name:</label>
                                <input type="text" name="name" />
                                <label>Email:</label>
                                <input type="email" name="email" />
                                <button type="submit">Add User</button>
                                <button type="button" onClick={() => setAddUserModalOpen(false)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default UserList