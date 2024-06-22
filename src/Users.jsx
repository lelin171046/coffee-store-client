import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadUser = useLoaderData();
    console.log(loadUser);
    const [users, setUsers] = useState(loadUser);
    console.log(users);

    const handleDeleteUser = id =>{
        fetch(`http://localhost:5001/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            //remove user form ui
            const remaining = users.filter(user => user._id !==  id);
            setUsers(remaining)
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>CreateAt</th>
        <th>Action</th>
        <th>Last</th>
      </tr>
    </thead>
    <tbody>
     
      {
        users?.map(user => <tr key={user._id} className="bg-base-200">
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastLoggedAt}</td>
        <td>
            <button onClick={()=> handleDeleteUser(user._id)}  className="btn">X</button>
        </td>
      </tr>
     )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;