import PlayerList from "./PlayerList";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const [player, setPlayer] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        name.replace("%20", " ")
        console.log(name)
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayer(data.filter((data) => data.Name === name));
            })
    }, []);

    return (  
        
        <div className="container">
            <div className="row">
                {player && <PlayerList players={player} />}
            </div>
            <div className="row">

            </div>
        </div>
    );
}
 
export default Player;