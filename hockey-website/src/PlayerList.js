const PlayerList = (props) => {
    const players = props.players;

    return (  
        <div className="playerList">
            {players.map((player) => (
                <div className="row" key={player.Name}>
                    <div className="col">
                        <img src=""></img>
                    </div>
                    <div className="col">
                        <p>{ player.Name }</p>
                    </div>
                    <div className="col">
                        <p>{ player.Team }</p>
                    </div>
                    <div className="col">
                        <p>{ player.Points}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default PlayerList;