const DisplayPlayer = (props) => {
    const player = props.player;
    return (
        <div className="container">
            <h1 className="text-center">{player.Name}</h1>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Goals</th>
                            <th scope="col">Assists</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{player.Position}</td>
                                <td>{player.Goals}</td>
                                <td>{player.Assists}</td>
                                <td>{player.Points}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button className="button">Compare</button>
                </div>
                <div className="col">
                    <button className="button">Chat</button>
                </div>
            </div>
        </div>
      );
}
 
export default DisplayPlayer;