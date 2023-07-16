import { useState } from 'react';
import { useEffect } from 'react';
import PlayerList from './PlayerList';

const HotPlayers = () => {
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                data.sort((a, b) => b.Points - a.Points);
                setPlayers(data.slice(0, 5));
            })
    }, []);
    return (  
        <div className="container-sm">
            <div className="row">
                <h3 className="text-center">NHL Point Leaders</h3>
                {players && <PlayerList players={players}/>}
            </div>
            
        </div>
    );
}
 
export default HotPlayers