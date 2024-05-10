// Data: 10/05/2024

/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
 */


// ==> My solution:

using System.Linq;

public class Kata04
{
    public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
    {
        int sum = ClassPoints.Sum();
        int quantity = ClassPoints.Length;
        double average = (double)sum / quantity;
        return YourPoints > average;
    }
}

/* --> OUTRAS SOLUÇÕES INTERESSANTES:

SOLUÇÃO 01:

using System.Linq;

public class Kata
{
  public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
  {
    return YourPoints > ClassPoints.Average();
  }
}


SOLUÇÃO 02:

using System.Linq;

public class Kata
{
    public static bool BetterThanAverage(int[] classPoints, int yourPoints)
    {
        int average = (classPoints.Sum() + yourPoints) / (classPoints.Length + 1);
        return yourPoints > average;
    }
}
 */



