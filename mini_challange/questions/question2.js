const matchList = [["mu", "city"],["munchen", "mu"],["city", "munchen"]]

const resultMatch = [1, 0, 1];

const generateWinner = () => {
    const scores = {
        mu: 0,
        city: 0,
        munchen: 0
    }

    for (let i = 0; i < matchList.length; i++) {
        const [home, away] = matchList[i];

        if (home > away) scores[home] += 3;
        else if (home < away) scores[away] += 3;
        else scores[i] += 1
    }

    const result = Object.values(scores);
    const winningScore = Math.max(...result)

    return Object.keys(scores).filter(team => scores[team] === winningScore)[0]
}

const winner = generateWinner();
console.log(winner);