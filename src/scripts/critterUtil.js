import fishData from '../assets/data/fish.json';
import bugData from '../assets/data/bugs.json';
import TimeUtil from './timeUtil';

let CritterUtil = {};

CritterUtil.fishData = fishData;
CritterUtil.bugData = bugData;

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

CritterUtil.getCrittersNewThisMonth = function() {
    const newFish = CritterUtil.getFishNewThisMonth();
    const newBugs = CritterUtil.getBugsNewThisMonth();
    return [...newFish, ...newBugs];
}

export default CritterUtil;