import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/react';

export default function Edit({ customer }) {
  const { data, setData, patch, delete:destroy, errors, processing, isDirty } = useForm({
    user_id: customer.user_id,
    name: customer.name,
    address: customer.address,
    phone_number: customer.phone_number,
    email: customer.email,
  });

  const submit = (e) => {
    e.preventDefault();
    patch(route('customers.update', customer.id))
  };

  const deleteCustomer = (e) => {
    e.preventDefault();
    destroy(route('customers.destroy', customer), {
        onBefore: () => confirm('本当に削除しますか？'),
    });
  }

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
          更新
        </button>
      </form>

      <form onSubmit={deleteCustomer}>
        <button className="btn btn-delete">削除</button>
      </form>
    </AppLayout>
  );
}
