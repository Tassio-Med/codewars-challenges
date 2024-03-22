// Data: 22/03/2024

/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only

CAT YEARS:
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

DOG YEARS:
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

// ==> My solution:

public class Dinglemouse {

  public static int[] humanYearsCatYearsDogYears(int humanYears) {
    int dogYears = 0;
    int catYears = 0;

    if (humanYears >= 1) {
      if (humanYears == 1) {
        dogYears = 15;
        catYears = 15;
      }
      else if (humanYears == 2) {
        dogYears = 24;
        catYears = 24;
      }
      else {
        dogYears = 24 + (humanYears - 2) * 5;
        catYears = 24 + (humanYears - 2) * 4;
      }
    }

    return new int[]{humanYears, catYears, dogYears};
  }

}


/* --> OUTRAS SOLUÇÕES INTERESSANTES:

public class Dinglemouse {

  public static int[] humanYearsCatYearsDogYears(int humanYears) {
    
    int catYear = 15 + (humanYears >= 2 ? 9 + 4 * (humanYears-2): 0);
    int dogYear = 15+ (humanYears >= 2 ? 9 + 5 * (humanYears-2): 0);
   
    return new int[]{humanYears,catYear ,dogYear};
  }

}

 */



