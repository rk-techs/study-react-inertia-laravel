import UserTable from "./UserTable";

export default function Index({ users }) {
    return (
        <div>
            <h1>User List</h1>
            <UserTable users={users} />
        </div>
    );
}
