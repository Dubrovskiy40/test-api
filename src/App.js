import './App.css';
import {useEffect, useState} from "react";
import Table from "./components/table/Table";

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    // пустой массив зависимостей [] означает, что этот useEffect будет запущен один раз
    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(valute => valute.json())
            .then((data) => {
                setIsLoaded(true);
                setItems(data);
                console.log('data',data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <div>
            {
                error
                    ? <div>Ошибка: {error.message}</div>
                    : !isLoaded
                        ? <div>Загрузка...</div>
                        : <Table value={items} />
            }
        </div>
    )
}

export default App;
