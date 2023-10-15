export default function CustomerTable({ customers }) {
  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th className="th-cell">ID</th>
          <th className="th-cell">名前</th>
          <th className="th-cell">住所</th>
          <th className="th-cell">電話番号</th>
          <th className="th-cell">E-mail</th>
          <th className="th-cell">担当ユーザーID : 名前</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
            <td className="td-cell">{customer.id}</td>
            <td className="td-cell">{customer.name}</td>
            <td className="td-cell">{customer.address}</td>
            <td className="td-cell">{customer.phone_number}</td>
            <td className="td-cell">{customer.email}</td>
            <td className="td-cell">{customer.user_id} : {customer.user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
