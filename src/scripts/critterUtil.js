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

const getCrittersAvailableThisMonth = function(critterData, isNorthernHemisphere) {
    let critters = [];
    critterData.forEach(function(critter) {
        const months = isNorthernHemisphere ? critter.months : critter.southMonths;
        if (months.includes(TimeUtil.getCurrentMonthId())) {
            critters.push(critter);
        }
    });
    return critters;
}

const getCrittersNewThisMonth = function(critterData, isNorthernHemisphere) {
    let newCritters = [];
    critterData.forEach(function(critter) {
        const months = isNorthernHemisphere ? critter.months : critter.southMonths;
        if (months.includes(TimeUtil.getCurrentMonthId()) && !months.includes(TimeUtil.getLastMonthId())) {
            newCritters.push(critter);
        }
    });
    return newCritters;
}

const getCrittersLeavingAfterThisMonth = function(critterData, isNorthernHemisphere) {
    let newCritters = [];
    critterData.forEach(function(critter) {
        const months = isNorthernHemisphere ? critter.months : critter.southMonths;
        if (months.includes(TimeUtil.getCurrentMonthId()) && !months.includes(TimeUtil.getNextMonthId())) {
            newCritters.push(critter);
        }
    });
    return newCritters;
}

let CritterUtil = {};

CritterUtil.fishData = initializeCritterData(fishData);
CritterUtil.bugData = initializeCritterData(bugData);
CritterUtil.seaCreatureData = initializeCritterData(seaCreatureData);

seaCreatureData.forEach(function(seaCreature) {
    seaCreature.location = "Sea";
});

CritterUtil.AvailabilityType = {
    ALL: 'all',
    NEW: 'new',
    LEAVING: 'leaving'
}

CritterUtil.CritterType = {
    FISH: 'fish',
    BUGS: 'bugs',
    SEA_CREATURES: 'seaCreatures'
}

CritterUtil.getCrittersForAvailabilityType = function(critterType, availabilityType, isNorthernHemisphere) {
    let critters = CritterUtil.fishData;
    if (critterType === CritterUtil.CritterType.BUGS) {
        critters = CritterUtil.bugData;
    } else if (critterType === CritterUtil.CritterType.SEA_CREATURES) {
        critters = CritterUtil.seaCreatureData;
    }
    switch (availabilityType) {
        case CritterUtil.AvailabilityType.NEW:
            return getCrittersNewThisMonth(critters, isNorthernHemisphere);
        case CritterUtil.AvailabilityType.LEAVING:
            return getCrittersLeavingAfterThisMonth(critters, isNorthernHemisphere);
        default:
            return getCrittersAvailableThisMonth(critters, isNorthernHemisphere);
    }
}

export default CritterUtil;