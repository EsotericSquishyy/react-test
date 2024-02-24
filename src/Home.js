import { useState } from 'react';

const Home = () => {

    const [games, setGame] = useState([
        { title: 'Slime Game', body: 'A game about a slime.', developers: "Pixil Pilgrims", id: 1 },
        { title: 'R6', body: 'Tactical Shooter.', developers: "Ubisoft", id: 2 },
        { title: 'GTA5', body: 'Openworld LA.', developers: "Rockstar", id: 3 }
    ])

    const handleClick = (e) => {
    }

    return(
        <div className="home">
            {games.map((game) => (
                <div className="game-preview" key={game.id}>
                    <h2>{ game.title }</h2>
                    <p>Developed by {game.developers}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
