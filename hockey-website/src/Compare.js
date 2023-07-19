import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import DisplayPlayer from './DisplayPlayer';

const Compare = () => {
    const [playerTop, setPlayerTop] = useState(null);
    const [playerBot, setPlayerBot] = useState(null);
    const { names } = useParams();
    let history = useHistory();

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayerTop(data.filter((data) => data.Name === names.split('_')[0])[0]);
                setPlayerBot(data.filter((data) => data.Name === names.split('_')[1])[0]);
            })
    }, []);

    return (  
        <div>
            <div className="ps-5 pt-4">
                <button className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
            </div>
            {playerTop && <DisplayPlayer player={playerTop} />}
            {playerBot && <DisplayPlayer player={playerBot} />}
        </div>
    );
}
 
export default Compare;