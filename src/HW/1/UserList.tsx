type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

  type UserType = {
  // ПРИДЕТСЯ САМОМУ)
  id: number
  name: string
  age: number
  address: AddressType
};

type UserListPropsType = {
  users: Array<UserType>                        // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = ({users}: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
       {users.map((user) => ( 
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> Age: {user.age}<strong> Address:{user.address.street}, {user.address.city}</strong>          
         </li>
        ))}
      </ul>
    </div>
  );
};
