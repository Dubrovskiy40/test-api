import style from './tableRow.module.css';
import TableCell from "../tableCell/TableCell";

const TableRow = ({ dataValue, handleShow }) => {

    let difference = ((dataValue.Previous * 100 / dataValue.Value) - 100).toFixed(2);

    return (
        <tr className={style.tableRow} title={dataValue.Name} onClick={handleShow}>
            <TableCell className={style.tableRow__tr} item={dataValue.NumCode} />
            <TableCell className={style.tableRow__tr} item={dataValue.CharCode} />
            <TableCell className={style.tableRow__tr} item={dataValue.Value} />
            <TableCell className={style.tableRow__tr} item={difference} />
        </tr>
    );
};

export default TableRow;
