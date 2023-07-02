import PlayerList from "./PlayerList";

const Player = (props) => {
    const player = props.player
    return (  
        <PlayerList players={player} />
    );
}
 
export default Player;