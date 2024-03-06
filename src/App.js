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
        <div className="App">
            <h1>CAT SPECIES GALLERY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium amet consectetur, dignissimos
                ex excepturi ipsam itaque labore magnam maiores maxime rerum voluptate? Animi earum non officiis
                perspiciatis qui.</p>

            <div className="Gallery">
                {cats.map(cat =>
                    <div key={cat.id} className="row">

                        {/*<div className="column column-left">
                            <img
                                src={cat}
                                alt={cat.name}
                                width="200"
                                height="200"
                            />
                            <h1>{cat.cfa_url}</h1>
                        </div>*/}

                        <div className="column column-right">
                            <h2>{cat.name}</h2>
                            <h5>Temperament: {cat.temperament}</h5>
                            <p>{cat.description}</p>
                            <a target="_blank" href={cat.wikipedia_url}>Wikipedia</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
