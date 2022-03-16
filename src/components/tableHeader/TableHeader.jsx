import style from './tableHeader.module.css';

const TableHeader = () => {
    return (
        <tr className={style.tableHeader}>
            <th className={style.tableHeader__th}>Код валюты</th>
            <th className={style.tableHeader__th}>Название валюты</th>
            <th className={style.tableHeader__th}>Текущий курс</th>
            <th className={style.tableHeader__th}>% изменения относительно предыдущего дня</th>
        </tr>
    );
};

export default TableHeader;
