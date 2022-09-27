/* Complete the 'birthdayCakeCandles' function below.
*
* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY candles as parameter.
*/

function birthdayCakeCandles(candles) {
   // Write your code here
   let max = Math.max(...candles);
   let ans = candles.filter(candle => candle=== max);
   return ans.length
}