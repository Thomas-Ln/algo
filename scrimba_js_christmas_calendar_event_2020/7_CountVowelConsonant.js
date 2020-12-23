function countVowelConsonant(str) {
  // write code here
  const arr = str.split('');
  
  const vowels = arr.filter(el => el.match(/[a|e|i|o|u]/));
  const consonants = arr.length - vowels.length;
  
  return (vowels.length + (consonants * 2));
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
