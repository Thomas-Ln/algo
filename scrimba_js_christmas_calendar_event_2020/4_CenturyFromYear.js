function centuryFromYear(num) {
    //  write code here.
    num = num.toString();
    
    let isNegative = num.search(/-/) > -1;
    
    num = (isNegative) ? num.replace('-', '') : num;
    num = (num.length < 4) ? num.padStart(4, 0) : num;
    num = num.split('');
  
    let century = num.slice(0, 2).join('');
    let year = num.slice(2).join('');
    
    century = Number(century);
    century = (year > 0) ? century + 1 : century;
  
    return (isNegative) ? Number(-century) : century;
}



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});
