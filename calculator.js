const calcMaxFebDays = (year) => {
    let isLeapYear = false;

    // Is Leap Year
    if (year % 4 === 0) {
        // If Century Year
        if (year % 100 === 0) {
            // If 400 year century
            if (year % 400 === 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        return 29;
    } else {
        return 28;
    }
};

const getDaysInMonth = (month, year) => {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return calcMaxFebDays(year);
        default:
            return 0;
    }
};

const validate = (month, day, year) => {
    let isValid = true;
    if (year < 1900 || year > 2025) {
        isValid = false;
    }
    if (month < 1 || month > 12) {
        isValid = false;
    }

    let daysInMonth = getDaysInMonth(month, year);
    if (day < 1 || day > daysInMonth) {
        isValid = false;
    }

    return isValid;
};

const handleInputDateString = (dateString) => {
    const dateArray = dateString.split("/");
    const month = parseInt(dateArray[0]);
    const day = parseInt(dateArray[1]);
    const year = parseInt(dateArray[2]);

    return {month, day, year};
};

const toString = (month, day, year) => {
    let dateString = "";
    if (month < 10) {
        dateString += "0" + month;
    } else {
        dateString += month;
    }
    dateString += "/";
    if (day < 10) {
        dateString += "0" + day;
    } else {
        dateString += day;
    }
    dateString += "/";
    dateString += year;

    return dateString;
};

const calcNextDate = (dateString) => {
    let {month, day, year} = handleInputDateString(dateString);
    if (
        year < 1900 ||
        year > 2025 ||
        day < 1 ||
        day > getDaysInMonth(month, year) ||
        month < 1 ||
        month > 12
    ) {
        return "Invalid";
    }

    day++;
    if (!validate(month, day, year)) {
        day = 1;
        month++;
        if (!validate(month, day, year)) {
            month = 1;
            year++;
        }
    }
    return toString(month, day, year);
};

calcNextDate("01/31/1997");

module.exports = calcNextDate;
