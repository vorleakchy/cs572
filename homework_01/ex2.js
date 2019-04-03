function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    const WEEKEND = "weekend";
    const WEEKDAY = "weekday";

    const days = {
        "0": WEEKEND,
        "1": WEEKDAY,
        "2": WEEKDAY,
        "3": WEEKDAY,
        "4": WEEKDAY,
        "5": WEEKDAY,
        "6": WEEKEND
    };

    return days[day];
}

console.log(isWeekend());