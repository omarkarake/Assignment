const calculateAverage = scores => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / scores.length;
  };
  
  const checkWinners = (team1Name, team1Scores, team2Name, team2Scores) => {
    const avgTeam1 = calculateAverage(team1Scores);
    const avgTeam2 = calculateAverage(team2Scores);
  
    if (avgTeam1 >= 2 * avgTeam2) {
      console.log(`${team1Name} win (${avgTeam1} vs. ${avgTeam2})`);
    } else if (avgTeam2 >= 2 * avgTeam1) {
      console.log(`${team2Name} win (${avgTeam2} vs. ${avgTeam1})`);
    } else {
      console.log("No team wins...");
    }
  };
  
  const dolphinsScores = [85, 54, 41];
  const koalasScores = [23, 34, 27];
  
  checkWinners('Dolphins', dolphinsScores, 'Koalas', koalasScores);
  