// Data: 27/03/2024

/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

// ==> My solution:

using System;
using System.Linq;
public class Kata03
{
    public static int Grow(int[] x)
    {
        return x.Aggregate((sum, num) => sum * num);
    }
}

/* --> OUTRAS SOLUÇÕES INTERESSANTES:

using System;
using System.Linq;

public class Kata
{
    public static int Grow(int[] x)
    {
        int result = 1; // Comece com o produto igual a 1
        foreach (int num in x)
        {
            result *= num; // Multiplicar cada número pelo resultado atual
        }
        return result; // Retornar o resultado final
    }
}

using System.Linq;

public class Kata
{
  public static int Grow(int[] x)
  {
    var sum = 1;
    for(var i = 0; i < x.Length; i++)
    {
      sum *= x[i];
    }
    return sum;
  }
}


 */



