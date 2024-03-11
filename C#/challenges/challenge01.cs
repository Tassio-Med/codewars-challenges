// Data: 11/03/2024

/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest' */

// ==> My solution:

public class Kata
{
  public static string Greet(string name, string owner)
  {
    if (name == owner) return "Hello boss";
    return "Hello guest";
  }  
}

/* --> OUTRAS SOLUÇÕES INTERESSANTES:

public class Kata
{
  public static string Greet(string name, string owner)
  {
    return $"Hello {name == owner ? "boss" : "guest"}";
  }  
}

public class Kata
{
  public static string Greet(string name, string owner) =>
    name == owner ? "Hello boss" : "Hello guest";
}
 */
