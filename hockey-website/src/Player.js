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
        <div className="">
            <div className="ps-5 pt-4">
                    <button className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
            </div>  
            <div className='container-sm'>
                <div className="row pb-5">
                    {player && <DisplayPlayer player={player}/>}
                </div>
                <div className="row text-center">
                    <div className="col">
                        <button className="btn btn-dark" onClick={() => compareClick()}>Compare</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-dark" onClick={handleOpenModal}>Chat</button>
                    </div>
                </div>

                <Chatbox show={showModal} handleClose={handleCloseModal} name={name}/>
            </div>
        </div>
    );
}
 
export default Player;