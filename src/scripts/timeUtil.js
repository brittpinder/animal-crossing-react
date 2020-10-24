let TimeUtil = {};

TimeUtil.months = [
    {
        id: 1,
        name: "January",
        shortName: "Jan",
        northSeason: "Winter",
        southSeason: "Summer"
    },
    {
        id: 2,
        name: "February",
        shortName: "Feb",
        northSeason: "Winter",
        southSeason: "Summer"
    },
    {
        id: 3,
        name: "March",
        shortName: "Mar",
        northSeason: "Spring",
        southSeason: "Fall"
    },
    {
        id: 4,
        name: "April",
        shortName: "Apr",
        northSeason: "Spring",
        southSeason: "Fall"
    },
    {
        id: 5,
        name: "May",
        shortName: "May",
        northSeason: "Spring",
        southSeason: "Fall"
    },
    {
        id: 6,
        name: "June",
        shortName: "Jun",
        northSeason: "Summer",
        southSeason: "Winter"
    },
    {
        id: 7,
        name: "July",
        shortName: "Jul",
        northSeason: "Summer",
        southSeason: "Winter"
    },
    {
        id: 8,
        name: "August",
        shortName: "Aug",
        northSeason: "Summer",
        southSeason: "Winter"
    },
    {
        id: 9,
        name: "September",
        shortName: "Sep",
        northSeason: "Fall",
        southSeason: "Spring"
    },
    {
        id: 10,
        name: "October",
        shortName: "Oct",
        northSeason: "Fall",
        southSeason: "Spring"
    },
    {
        id: 11,
        name: "November",
        shortName: "Nov",
        northSeason: "Fall",
        southSeason: "Spring"
    },
    {
        id: 12,
        name: "December",
        shortName: "Dec",
        northSeason: "Winter",
        southSeason: "Summer"
    },
];

TimeUtil.getCurrentMonthId = function() {
    const date = new Date();
    return date.getMonth() + 1;
}

TimeUtil.getCurrentMonthName = function() {
    const date = new Date();
    return TimeUtil.months[date.getMonth()].name;
}

TimeUtil.getLastMonthId = function() {
    const currentMonthId = this.getCurrentMonthId();
    return currentMonthId === 1 ? 12 : currentMonthId - 1;
}

TimeUtil.getNextMonthId = function() {
    const currentMonthId = this.getCurrentMonthId();
    return currentMonthId === 12 ? 1 : currentMonthId + 1;
}

TimeUtil.getSouthMonth = function(northMonthId) {
    let southMonth = northMonthId + 6;
    if (southMonth > 12) {
        southMonth -= 12;
    }
    return southMonth;
}

const getHourAsText = function(hour) {
    if (!Number.isInteger(hour)) {
        return "";
    } else if (hour >= 0 && hour < 12) {
        return hour + " am";
    } else if (hour === 12) {
        return hour + " pm";
    } else if (hour < 24) {
        return (hour - 12) + " pm";
    } else if (hour === 24) {
        return (hour - 12) + " am";
    } else {
        return "";
    }
}

TimeUtil.getTimePeriodsAsText = function(timePeriods) {
    let textString = "";
    for (let i = 0; i < timePeriods.length; i++) {
        textString += (getHourAsText(timePeriods[i].start) + " - " + getHourAsText(timePeriods[i].end));
        if (i !== timePeriods.length - 1) {
            textString += ", ";
        }
    }
    return textString;
}

export default TimeUtil;