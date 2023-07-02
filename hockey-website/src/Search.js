import { useState } from 'react';
import { useEffect } from 'react';
import PlayerList from './PlayerList';
import { useParams } from 'react-router-dom';

const Search = () => {
    const [players, setPlayers] = useState(null);
    const [filter, setFilter] = useState(null);
    const {compare} = useParams();
    const [pos, setPos] = useState("")

    const posChange = (event) => {
        setPos(event.target.value);
      };

    const searchClick = () => {
        setFilter(players);
        if (pos !== ''){
            setFilter(filter.filter((filter) => filter.Position === pos))
        }
        console.log(filter);

    };

    useEffect(() => {
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                if (compare){
                    setPlayers(data.filter((data) => data.Name !== compare))
                } else{
                    setPlayers(data);
                    setFilter(data);
                }
            })
    }, []); 

    return (  
        <div className="container-sm">
            <h1 className='text-center py-5'>Find a player</h1>
            <div className="row">
                <div className="col">
                    <h4>Position</h4>
                </div>
                <div className="col">
                    <h4>Conference</h4>
                </div>
                <div className="col">
                    <h4>Division</h4>
                </div>
                <div className="col">
                    <h4>Team</h4>
                </div>
                <div className="col">
                    <h4>Nationality</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <select className="form-select" value={pos} onChange={posChange}>
                            <option selected value=''>---</option>
                            <option value="C">C</option>
                            <option value="RW">RW</option>
                            <option value="LW">LW</option>
                            <option value="D">D</option>
                        </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>---</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>---</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>---</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                    <option selected>---</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className="button" onClick={searchClick}>Search</button>
                </div>
            </div>
            <div className="row">
                <h2>Players</h2>
                {filter && <PlayerList players={filter} compare={compare}/>}
            </div>
            
        </div>
    );
}
 
export default Search;