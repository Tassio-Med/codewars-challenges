// Data: 19/03/2024

/* Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10)  should return  {1,2,3,4,5,6,7,8,9,10}
countBy(2,5)  should return {2,4,6,8,10} */

// ==> My solution:

using System;

public static class Kata01
{
    public static int[] CountBy(int x, int n)
    {
        int[] arrayOfMultiples = new int[n]; 
        for (int i = 0; i < n; i++)
        {
            arrayOfMultiples[i] = x * (i + 1); 
        }
        return arrayOfMultiples; 
    }
}

/* --> OUTRAS SOLUÇÕES INTERESSANTES:

using System;
using System.Linq;

public static class Kata
{
  public static int[] CountBy(int x, int n)
  {
    return Enumerable.Range(1, n).Select(i => i * x).ToArray();    
  }
}

 */



