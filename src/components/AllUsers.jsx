import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllUsers = () => {
    const loadUsers = useLoaderData();
    // D - DELETE instanr delette on UI using state
    const [users, setUsers] = useState(loadUsers);

    // D - Delete
    const handleDelet = id => {
        console.log(id);
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // D - DELETE instanr delette on UI using filter
                if (data.deletedCount > 0) {
                    alert('User Delete Successfully');
                    const remain = users.filter(user => user._id !== id)
                    setUsers(remain);
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <h4>Total Users: {users.length}</h4>
            <div>
                {
                    // R - Read & Display
                    users.map(user => <p key={user._id}>
                        {user.name} : {user.email} : {user._id}

                        {/* U - UPDATE using dynamic route */}
                        <Link to={`/update/${user._id}`}>
                            <button>updata</button>
                        </Link>
                        {/* D - DELETE */}
                        <button onClick={() => handleDelet(user._id)}>x</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default AllUsers;