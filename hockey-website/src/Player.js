import PlayerList from "./PlayerList";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayPlayer from "./DisplayPlayer";

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
        <div>
            {player && <DisplayPlayer player={player}/>}
        </div>
    );
}
 
export default Player;