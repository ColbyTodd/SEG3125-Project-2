const DisplayPlayer = (props) => {
    const player = props.player;
    return (
        <div className="container">
            <h1 className="text-center">{player.Name}</h1>
            <div className="row">
                <div className="col text-center">
                    <img height="200" src="data:image/jpeg;base64,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"/>
                </div>
                <div className="col">
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
                <div className="col text-center">
                    <img height="200"src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1200px-Detroit_Red_Wings_logo.svg.png"/>
                </div>
            </div>
        </div>
      );
}
 
export default DisplayPlayer;