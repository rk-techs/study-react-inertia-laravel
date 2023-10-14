export default function UserTable({ users }) {
    return (
        <table className="table">
            <thead className="table-header">
                <tr>
                    <th className="th-cell">ID</th>
                    <th className="th-cell">Name</th>
                    <th className="th-cell">E-mail</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className="td-cell">
                            <a href={route('users.edit', user.id)}>
                            {user.id}
                            </a>
                            </td>
                        <td className="td-cell">{user.name}</td>
                        <td className="td-cell">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
