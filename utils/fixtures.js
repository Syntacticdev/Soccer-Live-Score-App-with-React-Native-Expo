const dummyFixtures = [
    {
        id: 1, // {{ edit_1 }}
        home: {
            team: "Manchester City",
            league: "Premier League",
            logo: require("../assets/club_logo/manchester_city.png"),
            shotsOnGoal: 5,
            shots: 15,
            possession: 55,
            yellowCards: 2,
            cornerKicks: 4,
            goalKicks: 3,
        },
        away: {
            team: "Liverpool",
            league: "Premier League",
            logo: require("../assets/club_logo/liverpool.png"),
            shotsOnGoal: 3,
            shots: 10,
            possession: 45,
            yellowCards: 1,
            cornerKicks: 2,
            goalKicks: 5,
        }
    },
    {
        id: 2, // {{ edit_2 }}
        home: {
            team: "Barcelona",
            league: "La Liga",
            logo: require("../assets/club_logo/barcelona.png"),
            shotsOnGoal: 7,
            shots: 12,
            possession: 60,
            yellowCards: 0,
            cornerKicks: 5,
            goalKicks: 2,
        },
        away: {
            team: "Real Madrid",
            league: "La Liga",
            logo: "",
            shotsOnGoal: 4,
            shots: 8,
            possession: 40,
            yellowCards: 3,
            cornerKicks: 1,
            goalKicks: 4,
        }
    },
    {
        id: 3, // {{ edit_3 }}
        home: {
            team: "Bayern Munich",
            league: "Bundesliga",
            logo: "",
            shotsOnGoal: 6,
            shots: 14,
            possession: 52,
            yellowCards: 1,
            cornerKicks: 3,
            goalKicks: 6,
        },
        away: {
            team: "Borussia Dortmund",
            league: "Bundesliga",
            logo: "",
            shotsOnGoal: 2,
            shots: 9,
            possession: 48,
            yellowCards: 2,
            cornerKicks: 4,
            goalKicks: 3,
        }
    },
    {
        id: 4, // {{ edit_4 }}
        home: {
            team: "Paris Saint-Germain",
            league: "Ligue 1",
            logo: "",
            shotsOnGoal: 8,
            shots: 16,
            possession: 57,
            yellowCards: 1,
            cornerKicks: 6,
            goalKicks: 2,
        },
        away: {
            team: "Marseille",
            league: "Ligue 1",
            logo: "",
            shotsOnGoal: 3,
            shots: 11,
            possession: 43,
            yellowCards: 0,
            cornerKicks: 2,
            goalKicks: 5,
        }
    },
    {
        id: 5, // {{ edit_5 }}
        home: {
            team: "Juventus",
            league: "Serie A",
            logo: "",
            shotsOnGoal: 4,
            shots: 10,
            possession: 50,
            yellowCards: 2,
            cornerKicks: 3,
            goalKicks: 4,
        },
        away: {
            team: "AC Milan",
            league: "Serie A",
            logo: "",
            shotsOnGoal: 5,
            shots: 13,
            possession: 50,
            yellowCards: 1,
            cornerKicks: 1,
            goalKicks: 3,
        }
    },
    {
        id: 6, // {{ edit_6 }}
        home: {
            team: "Chelsea",
            league: "Premier League",
            logo: require("../assets/club_logo/chelsea.png"),
            shotsOnGoal: 9,
            shots: 20,
            possession: 65,
            yellowCards: 0,
            cornerKicks: 7,
            goalKicks: 1,
        },
        away: {
            team: "Tottenham Hotspur",
            league: "Premier League",
            logo: "",
            shotsOnGoal: 2,
            shots: 5,
            possession: 35,
            yellowCards: 3,
            cornerKicks: 0,
            goalKicks: 6,
        }
    },
    {
        id: 7, // {{ edit_7 }}
        home: {
            team: "Atletico Madrid",
            league: "La Liga",
            logo: "",
            shotsOnGoal: 3,
            shots: 7,
            possession: 45,
            yellowCards: 1,
            cornerKicks: 2,
            goalKicks: 4,
        },
        away: {
            team: "Sevilla",
            league: "La Liga",
            logo: "",
            shotsOnGoal: 6,
            shots: 15,
            possession: 55,
            yellowCards: 2,
            cornerKicks: 5,
            goalKicks: 2,
        }
    },
    {
        id: 8, // {{ edit_8 }}
        home: {
            team: "Inter Milan",
            league: "Serie A",
            logo: "",
            shotsOnGoal: 5,
            shots: 12,
            possession: 58,
            yellowCards: 1,
            cornerKicks: 4,
            goalKicks: 3,
        },
        away: {
            team: "AS Roma",
            league: "Serie A",
            logo: "",
            shotsOnGoal: 4,
            shots: 9,
            possession: 42,
            yellowCards: 2,
            cornerKicks: 1,
            goalKicks: 5,
        }
    },
    {
        id: 9, // {{ edit_9 }}
        home: {
            team: "RB Leipzig",
            league: "Bundesliga",
            logo: "",
            shotsOnGoal: 7,
            shots: 14,
            possession: 60,
            yellowCards: 0,
            cornerKicks: 6,
            goalKicks: 2,
        },
        away: {
            team: "Bayer Leverkusen",
            league: "Bundesliga",
            logo: "",
            shotsOnGoal: 3,
            shots: 8,
            possession: 40,
            yellowCards: 3,
            cornerKicks: 2,
            goalKicks: 4,
        }
    },
    {
        id: 10, // {{ edit_10 }}
        home: {
            team: "Manchester United",
            league: "Premier League",
            logo: "",
            shotsOnGoal: 6,
            shots: 11,
            possession: 55,
            yellowCards: 1,
            cornerKicks: 3,
            goalKicks: 3,
        },
        away: {
            team: "Arsenal",
            league: "Premier League",
            logo: "",
            shotsOnGoal: 2,
            shots: 6,
            possession: 45,
            yellowCards: 2,
            cornerKicks: 0,
            goalKicks: 5,
        }
    },
    {
        id: 11, // {{ edit_11 }}
        home: {
            team: "FC Porto",
            league: "Primeira Liga",
            logo: "",
            shotsOnGoal: 8,
            shots: 18,
            possession: 62,
            yellowCards: 1,
            cornerKicks: 5,
            goalKicks: 2,
        },
        away: {
            team: "Benfica",
            league: "Primeira Liga",
            logo: "",
            shotsOnGoal: 4,
            shots: 10,
            possession: 38,
            yellowCards: 0,
            cornerKicks: 1,
            goalKicks: 4,
        }
    },
    {
        id: 12, // {{ edit_12 }}
        home: {
            team: "Ajax",
            league: "Eredivisie",
            logo: "",
            shotsOnGoal: 3,
            shots: 8,
            possession: 45,
            yellowCards: 1,
            cornerKicks: 2,
            goalKicks: 4,
        },
        away: {
            team: "PSV Eindhoven",
            league: "Eredivisie",
            logo: "",
            shotsOnGoal: 6,
            shots: 15,
            possession: 55,
            yellowCards: 2,
            cornerKicks: 5,
            goalKicks: 2,
        }
    },
    {
        id: 13, // {{ edit_13 }}
        home: {
            team: "Lazio",
            league: "Serie A",
            logo: "",
            shotsOnGoal: 5,
            shots: 12,
            possession: 58,
            yellowCards: 1,
            cornerKicks: 4,
            goalKicks: 3,
        },
        away: {
            team: "Napoli",
            league: "Serie A",
            logo: "",
            shotsOnGoal: 4,
            shots: 9,
            possession: 42,
            yellowCards: 2,
            cornerKicks: 1,
            goalKicks: 5,
        }
    },
    {
        id: 14, // {{ edit_14 }}
        home: {
            team: "Valencia",
            league: "La Liga",
            logo: "",
            shotsOnGoal: 7,
            shots: 14,
            possession: 60,
            yellowCards: 0,
            cornerKicks: 6,
            goalKicks: 2,
        },
        away: {
            team: "Real Betis",
            league: "La Liga",
            logo: "",
            shotsOnGoal: 3,
            shots: 8,
            possession: 40,
            yellowCards: 3,
            cornerKicks: 2,
            goalKicks: 4,
        }
    },
    {
        id: 15, // {{ edit_15 }}
        home: {
            team: "Everton",
            league: "Premier League",
            logo: "",
            shotsOnGoal: 4,
            shots: 10,
            possession: 50,
            yellowCards: 2,
            cornerKicks: 3,
            goalKicks: 4,
        },
        away: {
            team: "Leicester City",
            league: "Premier League",
            logo: "",
            shotsOnGoal: 5,
            shots: 13,
            possession: 50,
            yellowCards: 1,
            cornerKicks: 1,
            goalKicks: 3,
        }
    },
    {
        id: 16, // {{ edit_16 }}
        home: {
            team: "Feyenoord",
            league: "Eredivisie",
            logo: "",
            shotsOnGoal: 9,
            shots: 20,
            possession: 65,
            yellowCards: 0,
            cornerKicks: 7,
            goalKicks: 1,
        },
        away: {
            team: "AZ Alkmaar",
            league: "Eredivisie",
            logo: "",
            shotsOnGoal: 2,
            shots: 5,
            possession: 35,
            yellowCards: 3,
            cornerKicks: 0,
            goalKicks: 6,
        }
    },
    {
        id: 17, // {{ edit_17 }}
        home: {
            team: "Celtic",
            league: "Scottish Premiership",
            logo: "",
            shotsOnGoal: 3,
            shots: 8,
            possession: 45,
            yellowCards: 1,
            cornerKicks: 2,
            goalKicks: 4,
        },
        away: {
            team: "Rangers",
            league: "Scottish Premiership",
            logo: "",
            shotsOnGoal: 6,
            shots: 15,
            possession: 55,
            yellowCards: 2,
            cornerKicks: 5,
            goalKicks: 2,
        }
    },
    {
        id: 18, // {{ edit_18 }}
        home: {
            team: "Galatasaray",
            league: "Süper Lig",
            logo: "",
            shotsOnGoal: 5,
            shots: 12,
            possession: 58,
            yellowCards: 1,
            cornerKicks: 4,
            goalKicks: 3,
        },
        away: {
            team: "Fenerbahçe",
            league: "Süper Lig",
            logo: "",
            shotsOnGoal: 4,
            shots: 9,
            possession: 42,
            yellowCards: 2,
            cornerKicks: 1,
            goalKicks: 5,
        }
    }
];

export default dummyFixtures;