import { useState } from 'react';
import { useEffect } from 'react';

const DisplayPlayer = (props) => {
    const player = props.player;
    const [teamImage, setTeamImage] = useState(null);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Teams")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setTeamImage(data.filter((data) => data.Name === player.Team)[0].Image);
            })
}, []);
    
    return (
        <div className="container">
            <h1 className="text-center">{player.Name}</h1>
            <div className="row">
                <div className="col-2 text-center">
                    <img className="img-thumbnail" src={player.Image}/>
                </div>
                <div className="col">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Position</th>
                                <th scope="col">Goals</th>
                                <th scope="col">Assists</th>
                                <th scope="col">Points</th>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>{player.Position}</td>
                                    <td>{player.Goals}</td>
                                    <td>{player.Assists}</td>
                                    <td>{player.Points}</td>
                                    <td>{player.Team}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-2 text-center">
                    {teamImage && <img className="img-fluid" src={teamImage}/>}
                </div>
            </div>
        </div>
      );
}
 
export default DisplayPlayer;