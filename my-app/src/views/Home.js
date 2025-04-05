import React, { useState } from "react";

// Dữ liệu giả cho các giải đấu và trận đấu
const tournamentData = [
  {
    id: 1,
    name: "Ngoại Hạng Anh",
    matches: [
      { id: 1, team1: "Liverpool", team2: "Chelsea", date: "2025-04-10", status: "Upcoming" },
      { id: 2, team1: "Man City", team2: "Arsenal", date: "2025-04-11", status: "Upcoming" },
    ],
  },
  {
    id: 2,
    name: "Champions League",
    matches: [
      { id: 1, team1: "Barcelona", team2: "PSG", date: "2025-04-12", status: "Upcoming" },
      { id: 2, team1: "Bayern Munich", team2: "Real Madrid", date: "2025-04-13", status: "Completed" },
    ],
  },
];

const TournamentAccordion = ({ tournament }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm để toggle việc sổ ra các trận đấu
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tournament-accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{tournament.name}</h3>
        <button>{isOpen ? "Hide Matches" : "Show Matches"}</button>
      </div>
      {isOpen && (
        <div className="matches-list">
          <ul>
            {tournament.matches.map((match) => (
              <li key={match.id}>
                <div className="match-details">
                  <span>{match.team1} vs {match.team2}</span>
                  <span>{match.date}</span>
                  <span>Status: {match.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MatchList = () => {
  return (
    <div className="match-list">
      <h1>Football Tournaments</h1>
      {tournamentData.map((tournament) => (
        <TournamentAccordion key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
};

export default MatchList;
