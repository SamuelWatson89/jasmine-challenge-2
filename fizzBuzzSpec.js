describe("FizzBuzz!", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("Checks if it returns fizz. buzz NaN or Num", function() {

        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("That is  not a number", function() {
            var result = fizzBuzz("Banana")
            expect(result).toBe("That is not a number");
        });

        it("That is  not a number", function() {
            var result = fizzBuzz("Apple")
            expect(result).toBe("That is not a number");
        });

        it("Fizz", function() {
            var result = fizzBuzz(3)
            expect(result).toBe("Fizz");
        });

        it("Fizz", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });


        it("Buzz", function() {
            var result = fizzBuzz(5)
            expect(result).toBe("Buzz");
        });

        it("Buzz", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("FizzBuzz", function() {
            var result = fizzBuzz(45)
            expect(result).toBe("FizzBuzz");
        });

        it("FizzBuzz", function() {
            var result = fizzBuzz(75)
            expect(result).toBe("FizzBuzz");
        });
        
        it("Neither Fizz nor Buzz", function() {
            var result = fizzBuzz(1)
            expect(result).toBe(1);
        });
    });
});
