class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;
    };

    changeScoreBy(points) {
        return (privateScore + points);
    };

    setName(newName) {
        this.name = newName;
    };

    rewardStudent() {
        changeScoreBy(1);
    }

    penalizeStudent() {
        changeScoreBy(-1);
    }

    getScore() {
        return { name: score };
    }
}