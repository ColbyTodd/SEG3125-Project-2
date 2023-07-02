import { useState } from 'react';
import { useEffect } from 'react';
import PlayerList from './PlayerList';

const Search = () => {
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayers(data);
            })
    }, []);

    return (  
        <div className="container-sm">
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
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className="button">Search</button>
                </div>
            </div>
            <div className="row">
                <h2>Players</h2>
                {players && <PlayerList players={players}/>}
            </div>
            
        </div>
    );
}
 
export default Search;