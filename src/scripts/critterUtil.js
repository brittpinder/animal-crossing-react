import fishData from '../assets/data/fish.json';
import bugData from '../assets/data/bugs.json';
import seaCreatureData from '../assets/data/sea-creatures.json';
import TimeUtil from './timeUtil';

const initializeCritterData = function(critterData) {
    critterData.forEach(function(critter) {
        critter.timeText = critter.time ? TimeUtil.getTimePeriodsAsText(critter.time) : "All Day";
        critter.southMonths = [...critter.months];
        for (const i in critter.southMonths) {
            critter.southMonths[i] = TimeUtil.getSouthMonth(critter.southMonths[i]);
        }
    });
    return critterData;
}

const getCrittersNewThisMonth = function(critterData, isNorthernHemisphere) {
    let newCritters = [];
    const currentMonthId = TimeUtil.getCurrentMonthId();
    const lastMonthId = TimeUtil.getLastMonthId();

    critterData.forEach(function(critter) {
        const months = isNorthernHemisphere ? critter.months : critter.southMonths;
        if (months.includes(currentMonthId) && !months.includes(lastMonthId)) {
            newCritters.push(critter);
        }
    });
    return newCritters;
}

let CritterUtil = {};

CritterUtil.fishData = initializeCritterData(fishData);
CritterUtil.bugData = initializeCritterData(bugData);
CritterUtil.seaCreatureData = initializeCritterData(seaCreatureData);

CritterUtil.getFishNewThisMonth = function(isNorthernHemisphere) {
    return getCrittersNewThisMonth(CritterUtil.fishData, isNorthernHemisphere);
}

CritterUtil.getBugsNewThisMonth = function(isNorthernHemisphere) {
    return getCrittersNewThisMonth(CritterUtil.bugData, isNorthernHemisphere);
}

CritterUtil.getSeaCreaturesNewThisMonth = function(isNorthernHemisphere) {
    return getCrittersNewThisMonth(CritterUtil.seaCreatureData, isNorthernHemisphere);
}

CritterUtil.getAllCrittersNewThisMonth = function(isNorthernHemisphere) {
    const newFish = CritterUtil.getFishNewThisMonth(isNorthernHemisphere);
    const newBugs = CritterUtil.getBugsNewThisMonth(isNorthernHemisphere);
    const newSeaCreatures = CritterUtil.getSeaCreaturesNewThisMonth(isNorthernHemisphere);
    return [...newFish, ...newBugs, ...newSeaCreatures];
}

export default CritterUtil;