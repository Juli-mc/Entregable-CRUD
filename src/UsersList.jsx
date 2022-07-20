import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div>
            <h1 className='another'>Another users already now in our API</h1>
            {users.map(user =>(
                <div className='card'>
                <h3 key={user.id}>{user.first_name}{user.last_name}</h3>
                <p>{user.email} </p>
                <p>ID: {user.id}</p>
                <p>{user.birthday}</p>
                <div className='stylebutton'>
                <button className='Editbutton' onClick={() => selectUser(user)}><i class="fa-solid fa-user-pen"></i></button>
                <button className='Deletebutton' onClick={() =>deleteUser(user.id)}><i class="fa-solid fa-user-slash"></i></button>
                </div>
                </div>
            ))}
        </div>
    );
};

export default UsersList;