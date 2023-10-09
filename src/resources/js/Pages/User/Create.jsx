import AppLayout from '@/Layouts/AppLayout';
import UserTable from "./UserTable";

const Create = () => {
    return (
        <>
        <h1 className="title title-h1">User 登録</h1>

        </>
    );
}

Create.layout = page => <AppLayout children={page} />

export default Create
