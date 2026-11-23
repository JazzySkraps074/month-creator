/*
 * This program makes use of class elements, such as
 * aggregation, constructors, and methods, to create
 * a class for months and seasons of the year
*/
    const config = require("./config.json");

    let monthNumber;
    let totalMonthObjects = 0;
    let invalidMonthInputs = 0;
    
    class Month {
    constructor(m, c = config) {
        totalMonthObjects++;
        this.config = c;

        if (m < 1 || m > 12) {
            invalidMonthInputs++;
            this.monthNumber = 1;
        } else {
            this.monthNumber = m;
        }
    }

    setMonthNumber (m) {
        if (m < 1 || m > 12) {
            invalidMonthInputs++;
            this.monthNumber = 1;
        } else {
            this.monthNumber = m;
        }
    }
    
    getMonthNumber() {
        return this.monthNumber;
    }
    
    getMonthName() {
        const monthList = ["January", "February", "March",
                        "April", "May", "June", "July",
                        "August", "September", "October",
                        "November", "December"];
        return monthList[this.monthNumber - 1];
        
    }
    
    getSeason() {
        if (!this.config.ENABLE_SEASON) {
            return "Seasons are currently disabled";
        }

        if (this.monthNumber == 12 || this.monthNumber <= 2)
           return "Winter";
        else if (this.monthNumber >= 3 && this.monthNumber <= 5)
            return "Spring";
        else if (this.monthNumber >= 6 && this.monthNumber <= 8)
            return "Summer";
        else if (this.monthNumber >= 9 && this.monthNumber <= 11)
            return "Fall";
    }
    
    toString() {
        return "Month Number: " + this.monthNumber + "\n" 
                + "Month Name: " + this.getMonthName() + "\n"
                + "Season: " + this.getSeason() + "\n";
    }
    
    equals(month2) {
        return this.monthNumber === month2.monthNumber
            ? "Yes\n" : "No\n";
    }
}

function reportMetrics() {
    const validationRate = totalMonthObjects === 0
        ? 0
        : (invalidMonthInputs / totalMonthObjects) * 100;

    console.log("-----MONTH CREATOR METRICS-----");
    console.log("Number of Month Objects created:", totalMonthObjects);
    console.log("Number of Invalid Month inputs:", invalidMonthInputs);
    console.log("Invalid Input Rate:", validationRate.toFixed(2) + "%");
}
        
    let Jan = new Month(1, {ENABLE_SEASON: true});
    let Dec = new Month(12, {ENABLE_SEASON: false});
    let InvalidMonth = new Month(15, {ENABLE_SEASON: false});
        
    console.log(Jan.toString());
    console.log(Dec.toString());
        
    console.log("Are these months the same? " 
                        + Jan.equals(Dec));

    reportMetrics();
    
module.exports = Month;

