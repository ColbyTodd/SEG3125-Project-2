const PlayerList = (props) => {
    const players = props.players;

    return (  
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Team</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            {players.map((player) => (
                <tbody key={player.Name}>
                    <tr>
                        <th scope="row">{player.Number}</th>
                        <td>{player.Name}</td>
                        <td>{player.Team}</td>
                        <td>{player.Points}</td>
                    </tr>
                </tbody>
            ))}  
        </table>
    );
}
 
export default PlayerList;