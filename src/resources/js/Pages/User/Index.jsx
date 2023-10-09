import AppLayout from '@/Layouts/AppLayout';
import UserTable from "./UserTable";

export default function Index({ users }) {
    return (
        <AppLayout>
            <h1 className="title title-h1">User List</h1>
            <UserTable users={users} />
        </AppLayout>
    );
}
