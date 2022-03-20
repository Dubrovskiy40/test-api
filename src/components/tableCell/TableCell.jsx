import style from './tableCell.module.css';


const TableCell = ({ item }) => {
    return (
        <td className={style.tableCell}>
            <span>{item}</span>
        </td>
    );
};

export default TableCell;
