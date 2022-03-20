import style from './table.module.css';
import TableHeader from "../tableHeader/TableHeader";
import TableRow from "../tableRow/TableRow";
import img from '../../img/depositphotos.jpg';

const Table = ({ currentDate, requestDate, state, handleShow }) => {

    return (
        <div>
            <div className={style.title_wrap}>
                <img src={img} alt='icon' className={style.icon} title="Русский военный корабль, иди на .уй"/>
                <h2 className={style.title}>Текущая дата: {currentDate}</h2>
                <h3 className={style.title}>Курс валют по состоянию на: {requestDate.slice(0, 10)}</h3>
            </div>
            <table className={style.table}>
                <TableHeader />
                { state.map(el => {
                    return <TableRow key={el.ID} dataValue={el} handleShow={handleShow} />
                })}
            </table>
        </div>
    );
};

export default Table;