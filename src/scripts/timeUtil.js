let TimeUtil = {};

TimeUtil.months = [
    {
        id: 1,
        name: "January",
        shortName: "Jan"
    },
    {
        id: 2,
        name: "February",
        shortName: "Feb"
    },
    {
        id: 3,
        name: "March",
        shortName: "Mar"
    },
    {
        id: 4,
        name: "April",
        shortName: "Apr"
    },
    {
        id: 5,
        name: "May",
        shortName: "May"
    },
    {
        id: 6,
        name: "June",
        shortName: "Jun"
    },
    {
        id: 7,
        name: "July",
        shortName: "Jul"
    },
    {
        id: 8,
        name: "August",
        shortName: "Aug"
    },
    {
        id: 9,
        name: "September",
        shortName: "Sep"
    },
    {
        id: 10,
        name: "October",
        shortName: "Oct"
    },
    {
        id: 11,
        name: "November",
        shortName: "Nov"
    },
    {
        id: 12,
        name: "December",
        shortName: "Dec"
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