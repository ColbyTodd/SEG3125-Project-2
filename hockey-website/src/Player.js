import PlayerList from "./PlayerList";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const [player, setPlayer] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        name.replace("%20", " ")
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayer(data.filter((data) => data.Name === name)[0]);
            })
    }, []);

    return (  
        <div className="container">
            <h1 className="text-center">{player.Name}</h1>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Goals</th>
                            <th scope="col">Assists</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{player.Position}</td>
                                <td>{player.Goals}</td>
                                <td>{player.Assists}</td>
                                <td>{player.Points}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">

            </div>
        </div>
    );
}
 
export default Player;