import css from './TransactionHistory.module.css';

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={css.tableHeadRow}>
          <th className={css.tableHeadTitle}>Type</th>
          <th className={css.tableHeadTitle}>Amount</th>
          <th className={css.tableHeadTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(transaction => (
          <tr className={css.tableBodyRow} key={transaction.id}>
            <td className={css.tableBodyData}>
              {' '}
              {capitalizeFirstLetter(transaction.type)}
            </td>
            <td className={css.tableBodyData}>{transaction.amount}</td>
            <td className={css.tableBodyData}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
