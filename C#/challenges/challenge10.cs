// Data: 02/05/2024

/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

// ==> My solution:

using System;
using System.Linq;

namespace Solution
{
  public static class Program
  {
    public static string RepeatStr(int n, string s)
    {
      return String.Concat(Enumerable.Repeat(s, n));
    }
  }
}
/* --> OUTRAS SOLUÇÕES INTERESSANTES:

namespace Solution
{
  public static class Program
  {
    public static string repeatStr(int n, string s)
    {
            var res = "";
            for (int i = 0; i < n; i++)
            {
                res += s;
            }
            return res;
    }
  }
}

 */



