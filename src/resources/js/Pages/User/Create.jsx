import { useEffect } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/react';

const Create = () => {
    const { data, setData, post, processing, errors, reset, isDirty } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('users.store'))
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

                <div className="row">
                    <input type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        className="input-field"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="パスワード"
                    />
                    <div className='invalid-feedback'>{errors.password}</div>
                </div>

                <div className="row">
                    <input type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="input-field"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="パスワード再確認"
                    />
                    <div className='invalid-feedback'>{errors.password_confirmation}</div>
                </div>

                <button className='btn btn-store' disabled={!isDirty}>
                    登録
                </button>
            </form>
        </>
    );
}

Create.layout = page => <AppLayout children={page} />

export default Create
