import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayPlayer from './DisplayPlayer';

const Compare = () => {
    const [playerTop, setPlayerTop] = useState(null);
    const [playerBot, setPlayerBot] = useState(null);
    const { param } = useParams();

    useEffect(() => {
        console.log(param);


        
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayerTop(data.filter((data) => data.Name === "Dylan Larkin")[0]);
                setPlayerBot(data.filter((data) => data.Name === "Dylan Larkin")[0]);
            })
    }, []);

    return (  
        <div>
            {playerTop && <DisplayPlayer player={playerTop} />}
            {playerBot && <DisplayPlayer player={playerBot} />}
        </div>
    );
}
 
export default Compare;