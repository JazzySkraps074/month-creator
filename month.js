/*
 * This program makes use of class elements, such as
 * aggregation, constructors, and methods, to create
 * a class for months and seasons of the year
*/

    const ENABLE_SEASON = false;

    let monthNumber;
    
    class Month {
    constructor(m) {
        this.monthNumber = m;

        if (m < 1 || m > 12)
            this.monthNumber = 1;
    }

    setMonthNumber (m) {
        if (m < 1 || m > 12) {
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
        if (!ENABLE_SEASON) {
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
        return this.monthNumber == month2.monthNumber;
    }
}
        
    let Jan = new Month(1);
    let Dec = new Month(12);
        
    console.log(Jan.toString());
    console.log(Dec.toString());
        
    console.log("Are these months the same? " 
                        + Jan.equals(Dec));
    
module.exports = Month;

