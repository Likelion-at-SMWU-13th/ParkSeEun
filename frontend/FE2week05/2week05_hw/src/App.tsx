import "./App.css";

interface TeamLCK {
  teamName: string;
}

interface TeamLCK {
  teamColor: string;
  lckRank: number;
}

interface WorldChampionShip {
  isQualified: boolean;
}

interface LCKWorldChampionTeam extends TeamLCK, WorldChampionShip {
  titles: number;
}

const WorldChampionTeam2025: LCKWorldChampionTeam = {
  teamName: "T1",
  teamColor: "red",
  lckRank: 4,
  isQualified: true,
  titles: 5,
};

function printTeam(): void {
  console.log("2025 WorldChampionShip 진출팀:", WorldChampionTeam2025);
}

function App() {
  printTeam();
}

export default App;
