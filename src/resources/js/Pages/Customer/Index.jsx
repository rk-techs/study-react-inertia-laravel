import AppLayout from '@/Layouts/AppLayout';
import CustomerTable from "./Partials/CustomerTable";

export default function Index({ customers }) {
  return (
    <AppLayout>
      <h1 className="title title-h1">顧客マスタ</h1>
      <a href={route('customers.create')} className="btn btn-create">新規登録</a>
      <CustomerTable customers={customers} />
    </AppLayout>
  );
}
