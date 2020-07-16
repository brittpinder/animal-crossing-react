import fishData from '../assets/data/fish.json';
import bugData from '../assets/data/bugs.json';
import seaCreatureData from '../assets/data/sea-creatures.json';
import TimeUtil from './timeUtil';

let CritterUtil = {};

CritterUtil.fishData = fishData;
CritterUtil.bugData = bugData;
CritterUtil.seaCreatureData = seaCreatureData;

CritterUtil.fishData.forEach(function(fish) {
    fish.timeText = fish.time ? TimeUtil.getTimePeriodsAsText(fish.time) : "All Day";
});
CritterUtil.bugData.forEach(function(bug) {
    bug.timeText = bug.time ? TimeUtil.getTimePeriodsAsText(bug.time) : "All Day";
});
CritterUtil.seaCreatureData.forEach(function(seaCreature) {
    seaCreature.timeText = seaCreature.time ? TimeUtil.getTimePeriodsAsText(seaCreature.time) : "All Day";
});

const getCritterNewThisMonth = function(critterData) {
    let newCritters = [];
    const currentMonthId = TimeUtil.getCurrentMonthId();
    const lastMonthId = TimeUtil.getLastMonthId();

    critterData.forEach(function(critter) {
        if (critter.months.includes(currentMonthId) && !critter.months.includes(lastMonthId)) {
            newCritters.push(critter);
        }
    });
    return newCritters;
}

CritterUtil.getFishNewThisMonth = function() {
    return getCritterNewThisMonth(CritterUtil.fishData);
}

CritterUtil.getBugsNewThisMonth = function() {
    return getCritterNewThisMonth(CritterUtil.bugData);
}

CritterUtil.getSeaCreaturesNewThisMonth = function() {
    return getCritterNewThisMonth(CritterUtil.seaCreatureData);
}

CritterUtil.getCrittersNewThisMonth = function() {
    const newFish = CritterUtil.getFishNewThisMonth();
    const newBugs = CritterUtil.getBugsNewThisMonth();
    const newSeaCreatures = CritterUtil.getSeaCreaturesNewThisMonth();
    return [...newFish, ...newBugs, ...newSeaCreatures];
}

export default CritterUtil;