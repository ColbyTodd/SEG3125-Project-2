import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DisplayPlayer from "./DisplayPlayer";
import Chatbox from "./Chatbox";

const Player = () => {
    const [player, setPlayer] = useState(null);
    const { name } = useParams();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const compareClick = () => {
        // Programmatically navigate to the desired URL
            history.push(`/search/${name}`);
      };

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Players")
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
                    <button className="button" onClick={handleOpenModal}>Chat</button>
                </div>
            </div>

            <Chatbox show={showModal} handleClose={handleCloseModal} name={name}/>
        </div>
    );
}
 
export default Player;