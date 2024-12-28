export interface TeamStats {
    team: string;
    league: string;
    logo: string;
    shotsOnGoal: number;
    shots: number;
    possession: number;
    yellowCards: number;
    cornerKicks: number;
    goalKicks: number;
}

export interface Fixture {
    id: number;
    home: TeamStats;
    away: TeamStats;
}