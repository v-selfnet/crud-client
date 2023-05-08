import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUsers = useLoaderData();

    const handelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email} //  body: JSON.stringify(user)
        console.log(name, email, user);

        // [PUT] data send to server for update
        fetch(`http://localhost:3000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h3>Update Data</h3>
            <h4>
                {loadedUsers.name} : {loadedUsers.email} : {loadedUsers._id}
                <form onSubmit={handelUpdate}>
                    <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
                    <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
                    <input type="submit" value="Update" id="" />
                </form>
            </h4>
        </div>
    );
};

export default Update;