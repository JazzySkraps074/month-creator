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
         "the season Winter", () => {
      const month = new Month(12);
      expect (month.getSeason()).toBe("Winter");
    })

    /* EP Test #2: Uses 13, which is just outside the
       valid range of 1-12 */
    test("Testing if month number 13 changes to 1 " +
         " and returns January", () => {
      const month = new Month(13);
      expect (month.getMonthName()).toBe("January");
    })

    test("Testing if month number 100 returns " +
         "the season Winter, due to any numbers " +
         "outside of 1-12 being set to 1", () => {
      const month = new Month(100);
      expect (month.getSeason()).toBe("Winter");
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