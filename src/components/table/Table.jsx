import style from './table.module.css';
import TableHeader from "../tableHeader/TableHeader";
import TableRow from "../tableRow/TableRow";
import img from '../../img/depositphotos.jpg';

const Table = ({ value }) => {
    console.log('объект с данными',value)
    // приводим данные к массиву
    let arrEntries = Object.entries(value).filter(el => el.includes('Valute'));
    console.log('arrEntries', arrEntries);

    let currentDate = value.Date;
    console.log('currentDate',currentDate)

    return (
        <div>
            <div className={style.title_wrap}>
                <img src={img} alt='icon' className={style.icon} title="Русский военный корабль, иди на .уй"/>
                <h2 className={style.title}>Курс валют на: {currentDate}</h2>
            </div>
            <table className={style.table}>

                <TableHeader />
                { arrEntries.map(el => {
                    return typeof el !== 'string'
                        ? <TableRow key={el.ID} dataValue={el} />
                        : <TableRow key={el.ID} dataValue={'string'} />
                })}
            </table>
        </div>
    );
};

export default Table;