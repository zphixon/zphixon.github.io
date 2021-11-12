
// lemon tuesday is
// W E B S C A L E
// E
// B
// S
// C
// A
// L
// E

function byId(id) {
    return document.getElementById(id);
}

// returns 3rd tuesday of a given year
function findDate(year) {
    var first = new Date(year, 10, 1).getDay();

    if (first === 0) { return 17; }
    else if (first === 1) { return 16; }
    else if (first === 2) { return 15; }
    else if (first === 3) { return 21; }
    else if (first === 4) { return 20; }
    else if (first === 5) { return 19; }
    else if (first === 6) { return 18; }
}

var updatedCounterImg = false;

const useNew = true;

function update() {
    // CURRENT_YEAR
    var year = new Date().getFullYear();

    // get our countdown
    var timespan = countdown(new Date(year, 10, findDate(year)),
        null, countdown.MONTHS | countdown.WEEKS | countdown.DAYS | countdown.HOURS
        | countdown.MINUTES | countdown.SECONDS);

    // lemon tuesday has passed :C
    if (timespan.value >= 1000 * 60 * 60 * 24)
        timespan = countdown(new Date(year + 1, 10, findDate(year + 1)),
            null, countdown.MONTHS | countdown.WEEKS | countdown.DAYS | countdown.HOURS
            | countdown.MINUTES | countdown.SECONDS);

    // today's the big day!
    if (0 <= timespan.value && timespan.value <= 1000 * 60 * 60 * 24) {
        byId("counterDetail").innerHTML = "Today!";
        byId("counterOverview").innerHTML = ":)";
        byId("counterIcon").src = "img/counter.png";
        byId("counterUnit").innerHTML = "<br/>";
        return;
    }

    if (useNew) {
        // lemon logo
        console.log(timespan);
        byId("counterOverview").innerHTML = timespan.months;
        if (timespan.months == 1) {
            byId("monthUnit").innerHTML = "month";
            byId("counterUnit").innerHTML = "month";
        } else {
            byId("monthUnit").innerHTML = "months";
            byId("counterUnit").innerHTML = "months";
        }
        if (timespan.months == 0) {
            byId("counterOverview").innerHTML = timespan.weeks;
            if (timespan.weeks == 1) {
                byId("counterUnit").innerHTML = "week";
            } else {
                byId("counterUnit").innerHTML = "weeks";
            }

            if (timespan.weeks == 0) {
                byId("counterOverview").innerHTML = timespan.days;
                if (timespan.days == 1) {
                    byId("counterUnit").innerHTML = "day";
                } else {
                    byId("counterUnit").innerHTML = "days";
                }

                if (timespan.days == 0) {
                    byId("counterOverview").innerHTML = timespan.hours;
                    if (timespan.hours == 1) {
                        byId("counterUnit").innerHTML = "hour";
                    } else {
                        byId("counterUnit").innerHTML = "hours";
                    }

                    if (timespan.hours == 0) {
                        byId("counterOverview").innerHTML = timespan.minutes;
                        if (timespan.minutes == 1) {
                            byId("counterUnit").innerHTML = "minute";
                        } else {
                            byId("counterUnit").innerHTML = "minutes";
                        }

                        if (timespan.minutes == 0) {
                            byId("counterOverview").innerHTML = timespan.seconds;
                            if (timespan.seconds == 1) {
                                byId("counterUnit").innerHTML = "second";
                            } else {
                                byId("counterUnit").innerHTML = "seconds";
                            }
                        }
                    }
                }
            }
        }

        // actual counter
        if (timespan.months == 1) {
            byId("months").innerHTML = "1";
            byId("monthUnit").innerHTML = "month";
        } else if (timespan.months >= 2) {
            byId("months").innerHTML = timespan.months;
            byId("monthUnit").innerHTML = "months";
        } else {
            byId("months").innerHTML = "";
            byId("monthUnit").innerHTML = "";
        }

        if (timespan.weeks == 1) {
            byId("weeks").innerHTML = "1";
            byId("weekUnit").innerHTML = "week";
        } else if (timespan.weeks >= 2) {
            byId("weeks").innerHTML = timespan.weeks;
            byId("weekUnit").innerHTML = "weeks";
        } else {
            byId("weeks").innerHTML = "";
            byId("weekUnit").innerHTML = "";
        }

        if (timespan.days == 1) {
            byId("days").innerHTML = "1";
            byId("dayUnit").innerHTML = "day";
        } else if (timespan.days >= 2) {
            byId("days").innerHTML = timespan.days;
            byId("dayUnit").innerHTML = "days";
        } else {
            byId("days").innerHTML = "";
            byId("dayUnit").innerHTML = "";
        }

        if (timespan.hours == 1) {
            byId("hours").innerHTML = "1";
            byId("hourUnit").innerHTML = "hour";
        } else if (timespan.hours >= 2) {
            byId("hours").innerHTML = timespan.hours;
            byId("hourUnit").innerHTML = "hours";
        } else {
            byId("hours").innerHTML = "";
            byId("hourUnit").innerHTML = "";
        }

        if (timespan.minutes == 1) {
            byId("minutes").innerHTML = "1";
            byId("minuteUnit").innerHTML = "minute";
        } else if (timespan.minutes >= 2) {
            byId("minutes").innerHTML = timespan.minutes;
            byId("minuteUnit").innerHTML = "minutes";
        } else {
            byId("minutes").innerHTML = "";
            byId("minuteUnit").innerHTML = "";
        }

        byId("seconds").innerHTML = timespan.seconds;
        if (timespan.seconds == 1)
            byId("secondUnit").innerHTML = "second";
        else
            byId("secondUnit").innerHTML = "seconds";
    } else {

        // lemon logo
        console.log(timespan);
        byId("counterOverview").innerHTML = timespan.months;
        if (timespan.months == 1) {
            byId("monthUnit").innerHTML = "month";
            byId("counterUnit").innerHTML = "month";
        } else {
            byId("monthUnit").innerHTML = "months";
            byId("counterUnit").innerHTML = "months";
        }
        if (timespan.months == 0) {
            byId("counterOverview").innerHTML = timespan.weeks + " " + timespan.days;
            if (timespan.weeks == 1) {
                byId("counterUnit").innerHTML = "week, ";
            } else {
                byId("counterUnit").innerHTML = "weeks, ";
            }
            if (timespan.days == 1) {
                byId("counterUnit").innerHTML += "day";
            } else {
                byId("counterUnit").innerHTML += "days";
            }

            if (timespan.weeks == 0) {
                byId("counterOverview").innerHTML = timespan.days + " " + timespan.hours;
                if (timespan.days == 1) {
                    byId("counterUnit").innerHTML = "day, ";
                } else {
                    byId("counterUnit").innerHTML = "days, ";
                }
                if (timespan.hours == 1) {
                    byId("counterUnit").innerHTML += "hour";
                } else {
                    byId("counterUnit").innerHTML += "hours";
                }

                if (timespan.days == 0) {
                    byId("counterOverview").innerHTML = timespan.hours + " " + timespan.minutes;
                    if (timespan.hours == 1) {
                        byId("counterUnit").innerHTML = "hour, ";
                    } else {
                        byId("counterUnit").innerHTML = "hours, ";
                    }
                    if (timespan.minutes == 1) {
                        byId("counterUnit").innerHTML += "minute";
                    } else {
                        byId("counterUnit").innerHTML += "minutes";
                    }

                    if (timespan.hours == 0) {
                        byId("counterOverview").innerHTML = timespan.minutes + " " + timespan.seconds;
                        if (timespan.minutes == 1) {
                            byId("counterUnit").innerHTML = "minute, ";
                        } else {
                            byId("counterUnit").innerHTML = "minutes, ";
                        }
                        if (timespan.seconds == 1) {
                            byId("counterUnit").innerHTML += "second";
                        } else {
                            byId("counterUnit").innerHTML += "seconds";
                        }

                        if (timespan.minutes == 0) {
                            byId("counterOverview").innerHTML = timespan.seconds;
                            if (timespan.seconds == 1) {
                                byId("counterUnit").innerHTML = "second";
                            } else {
                                byId("counterUnit").innerHTML = "seconds";
                            }
                        }
                    }
                }
            }
        }

        // actual counter
        byId("months").innerHTML = timespan.months;
        byId("weeks").innerHTML = timespan.weeks;
        byId("days").innerHTML = timespan.days;
        byId("hours").innerHTML = timespan.hours;
        byId("minutes").innerHTML = timespan.minutes;
        byId("seconds").innerHTML = timespan.seconds;

        if (timespan.weeks == 1)
            byId("weekUnit").innerHTML = "week";
        else
            byId("weekUnit").innerHTML = "weeks";

        if (timespan.days == 1)
            byId("dayUnit").innerHTML = "day";
        else
            byId("dayUnit").innerHTML = "days";

        if (timespan.hours == 1)
            byId("hourUnit").innerHTML = "hour";
        else
            byId("hourUnit").innerHTML = "hours";

        if (timespan.minutes == 1)
            byId("minuteUnit").innerHTML = "minute";
        else
            byId("minuteUnit").innerHTML = "minutes";

        if (timespan.seconds == 1)
            byId("secondUnit").innerHTML = "second";
        else
            byId("secondUnit").innerHTML = "seconds";
    }

    if (!updatedCounterImg) {
        byId("counterIcon").src = "img/counter-" + (12 - timespan.months) + ".png";
        updatedCounterImg = true;
    }
}

update();
setInterval(update, 1000);

