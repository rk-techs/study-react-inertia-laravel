import AppLayout from '@/Layouts/AppLayout';
import UserTable from "./UserTable";

const Index = ({ users }) => {
    return (
        <>
        <h1 className="title title-h1">User List</h1>
        <UserTable users={users} />
        </>
    );
}

Index.layout = page => <AppLayout children={page} />

export default Index
