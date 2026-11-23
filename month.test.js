const Month = require("./month");
console.log(Month);

describe ("Gets month or season based on month number", () => {

    /* EP Test #1: Uses 0, which is just outside the
       valid range of 1-12 */
    test("Testing if month number 0 changes to 1 " +
         " and returns January", () => {
        const month = new Month(0);
        expect (month.getMonthName()).toBe("January");
    })

    // BVA Test #1: Uses 1 in the valid range 1-12
    test("Testing if month number 1 returns January", () => {
        const month = new Month(1);
        expect (month.getMonthName()).toBe("January");
    })

    // BVA Test #2: Uses 12 in the valid range 1-12
    test("Testing if month number 12 returns " +
         "disabled message when seasons are disabled", () => {
        const config = {ENABLE_SEASON: false};
        const month = new Month(12, config);
        expect (month.getSeason()).toBe("Seasons are currently disabled");
    })

    test("Testing if month number 1 returns " +
         "Winter when seasons are enabled", () => {
        const config = {ENABLE_SEASON: true};
        const month = new Month(1, config);
        expect (month.getSeason()).toBe("Winter");
    })

    test("Testing if month number 4 returns " +
         "Spring when seasons are enabled", () => {
        const config = {ENABLE_SEASON: true};
        const month = new Month(4, config);
        expect (month.getSeason()).toBe("Spring");
    })

    test("Testing if month number 7 returns " +
         "Summer when seasons are enabled", () => {
        const config = {ENABLE_SEASON: true};
        const month = new Month(7, config);
        expect (month.getSeason()).toBe("Summer");
    })

    test("Testing if month number 10 returns " +
         "Fall when seasons are enabled", () => {
        const config = {ENABLE_SEASON: true};
        const month = new Month(10, config);
        expect (month.getSeason()).toBe("Fall");
    })

    /* EP Test #2: Uses 13, which is just outside the
       valid range of 1-12 */
    test("Testing if month number 13 changes to 1 " +
         " and returns January", () => {
        const month = new Month(13);
        expect (month.getMonthName()).toBe("January");
    })

    test("Testing if the months returned by numbers 1 " +
         " and 12 are equal, and returns No", () => {
        const month1 = new Month(1);
        const month2 = new Month(12)
        expect (month1.equals(month2)).toBe("No");
    })

    /* A test double is not needed here because there is no external
    dependency that this code relies on */

})
