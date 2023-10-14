import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/react';

const Edit = ({ user }) => {
    const { data, setData, patch, processing, errors, reset, isDirty } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('users.update', user.id))
    };

    return (
        <>
            <h1 className="title title-h1">User 登録</h1>
            <form onSubmit={submit}>

                <div className="row">
                    <input type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        className="input-field"
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="名前"
                    />
                    <div className='invalid-feedback'>{errors.name}</div>
                </div>

                <div className="row">
                    <input type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        className="input-field"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="E-mail"
                    />
                    <div className='invalid-feedback'>{errors.email}</div>
                </div>

                <button className='btn btn-update' disabled={!isDirty}>
                    更新
                </button>
            </form>
        </>
    );
}

Edit.layout = page => <AppLayout children={page} />

export default Edit
