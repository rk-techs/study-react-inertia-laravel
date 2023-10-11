import AppLayout from '@/Layouts/AppLayout';
import UserTable from "./UserTable";

const Index = ({ users }) => {
    return (
        <>
        <h1 className="title title-h1">User List</h1>
        <a href="/users/create" className="btn btn-create">新規登録</a>
        <UserTable users={users} />
        </>
    );
}

Index.layout = page => <AppLayout children={page} />

export default Index
