// Data: 05/05/2026

/* 

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

*/

// ==> My Solution:

fun include(arr: IntArray, item: Int): Boolean {
    return arr.contains(item)
}


// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/* 

=> Usando contains())

fun include(arr: IntArray, item: Int): Boolean {
    return arr.contains(item)
}

=> Solução manual - para entender a lógica

fun include(arr: IntArray, item: Int): Boolean {
    for (elemento in arr) {
        if (elemento == item) {
            return true
        }
    }
    return false
}

*/
