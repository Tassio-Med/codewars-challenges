// Data: 20/03/2024

/* Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied */

// ==> My solution:

using System;
using System.Collections.Generic;

public static class Kata02
{
    public static string Greet(string language)
    {
        Dictionary<string, string> database = new Dictionary<string, string>
        {
            {"english", "Welcome"},
            {"czech", "Vitejte"},
            {"danish", "Velkomst"},
            {"dutch", "Welkom"},
            {"estonian", "Tere tulemast"},
            {"finnish", "Tervetuloa"},
            {"flemish", "Welgekomen"},
            {"french", "Bienvenue"},
            {"german", "Willkommen"},
            {"irish", "Failte"},
            {"italian", "Benvenuto"},
            {"latvian", "Gaidits"},
            {"lithuanian", "Laukiamas"},
            {"polish", "Witamy"},
            {"spanish", "Bienvenido"},
            {"swedish", "Valkommen"},
            {"welsh", "Croeso"}
        };

        if (database.ContainsKey(language.ToLower()))
        {
            return database[language.ToLower()];
        }
        else
        {
            return database["english"];
        }
    }
}



/* --> OUTRAS SOLUÇÕES INTERESSANTES:

using System.Collections.Generic;
public static class Kata
{
    public static string Greet(string language)
    {
      return (lang.ContainsKey(language)) 
        ? lang[language] 
        : "Welcome";
    }
    
    private static readonly Dictionary<string, string> lang = new Dictionary<string, string>
    {
        {"english", "Welcome"},
        {"czech", "Vitejte"},
        {"danish", "Velkomst"},
        {"dutch", "Welkom"},
        {"estonian", "Tere tulemast"},
        {"finnish", "Tervetuloa"},
        {"flemish", "Welgekomen"},
        {"french", "Bienvenue"},
        {"german", "Willkommen"},
        {"irish", "Failte"},
        {"italian", "Benvenuto"},
        {"latvian", "Gaidits"},
        {"lithuanian", "Laukiamas"},
        {"polish", "Witamy"},
        {"spanish", "Bienvenido"},
        {"swedish", "Valkommen"},
        {"welsh", "Croeso"}
    };
    
}

 */



