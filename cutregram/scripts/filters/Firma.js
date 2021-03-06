
// Filtro que escribe una firma dados un usuario y una fecha.
angular.module("cutregram").filter("Firma", function($filter) {

    // Los filtros siempre retornes funciones.
    // Además, siempre tienen al menos un parámetro, que es el dato de entrada.
    return function(autor, fecha) {

        return "Publicado por " + autor + " en " + $filter("date")(fecha, "dd/MM/yy");
    };
});