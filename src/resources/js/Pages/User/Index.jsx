
export default function Index({ users }) {
    const userList = users.map(user =>
        <li key={user.id}>
            {user.id} : {user.name}
        </li>
    );
    return (
        <ul>
            {userList}
        </ul>
    );
}
