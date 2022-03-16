import style from './tableRow.module.css';
import TableCell from "../tableCell/TableCell";

const TableRow = ({ dataValue }) => {

    return (
        <div className={style.tableRow}>
            <TableCell item={dataValue.NumCode} />
            <TableCell item={dataValue.Name} />
            <TableCell item={dataValue.Value} />
            <TableCell item={dataValue.Previous} />
        </div>
    );
};

export default TableRow;
