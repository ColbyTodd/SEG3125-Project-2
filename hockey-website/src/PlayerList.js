const PlayerList = (props) => {
    const players = props.players;

    return (  
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">#</th>
                    <th scope="col">Position</th>
                    <th scope="col">Team</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            {players.map((player, index) => (
                <tbody key={index}>
                    <tr>
                        <th scope="row">{player.Name}</th>
                        <td>{player.Number}</td>
                        <td>{player.Position}</td>
                        <td>{player.Team}</td>
                        <td>{player.Points}</td>
                    </tr>
                </tbody>
            ))}  
        </table>
    );
}
 
export default PlayerList;