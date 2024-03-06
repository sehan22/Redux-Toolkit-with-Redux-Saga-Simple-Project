import './App.css';
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCatsFetch} from "./catState";

function App() {
    const cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((getCatsFetch()))
    }, [dispatch]);
    console.log(cats)

    return (
        <h1>check</h1>
    );
}

export default App;
