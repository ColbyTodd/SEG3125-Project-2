import PlayerList from "./PlayerList";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DisplayPlayer from "./DisplayPlayer";

const Player = () => {
    const [player, setPlayer] = useState(null);
    const { name } = useParams();
    const history = useHistory();

    const compareClick = () => {
        // Programmatically navigate to the desired URL
            history.push(`/search/${name}`);
      };

    useEffect(() => {
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayer(data.filter((data) => data.Name === name)[0]);
            })
    }, []);

    return (  
        <div>
            {player && <DisplayPlayer player={player}/>}
            <div className="row text-center">
                <div className="col">
                    <button className="button" onClick={() => compareClick()}>Compare</button>
                </div>
                <div className="col">
                    <button className="button">Chat</button>
                </div>
            </div>
        </div>
    );
}
 
export default Player;