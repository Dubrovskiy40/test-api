import style from './tableCell.module.css';


const TableCell = ({ item }) => {
    return (
        <div className={style.tableCell}>
            <span>{item}</span>
        </div>
    );
};

export default TableCell;
