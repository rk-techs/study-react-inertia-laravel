import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/react';

export default function Create() {
  const { data, setData, post, errors, processing, isDirty } = useForm({
    user_id: '',
    name: '',
    address: '',
    phone_number: '',
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('customers.store'))
  };

  return (
    <AppLayout>
      <h1 className="title title-h1">顧客 登録</h1>
      <form onSubmit={submit}>

        <div className="row">
          <input type="text"
            name="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="input-field"
            placeholder="名前"
          />
          <div className='invalid-feedback'>{errors.name}</div>
        </div>

        <div className="row">
          <input type="text"
            name="address"
            value={data.address}
            onChange={(e) => setData('address', e.target.value)}
            className="input-field"
            placeholder="住所"
          />
          <div className='invalid-feedback'>{errors.address}</div>
        </div>

        <div className="row">
          <input type="text"
            name="phone_number"
            value={data.phone_number}
            onChange={(e) => setData('phone_number', e.target.value)}
            className="input-field"
            placeholder="電話番号"
          />
          <div className='invalid-feedback'>{errors.phone_number}</div>
        </div>

        <div className="row">
          <input type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            className="input-field"
            placeholder="E-mail"
          />
          <div className='invalid-feedback'>{errors.email}</div>
        </div>

        <div className="row">
          <input type="number"
            name="user_id"
            value={data.user_id}
            onChange={(e) => setData('user_id', e.target.value)}
            className="input-field"
            placeholder="担当ユーザーID"
          />
          <div className='invalid-feedback'>{errors.user_id}</div>
        </div>

        <button className='btn btn-store' disabled={!isDirty || processing}>
          登録
        </button>
      </form>
    </AppLayout>
  );
}
