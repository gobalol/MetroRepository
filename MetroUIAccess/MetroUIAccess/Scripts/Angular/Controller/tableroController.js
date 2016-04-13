(function (app) {
    'use strict';

    app.controller('MetroUIAccessCtrl', function ($scope, MetroService) {

        var getApps = MetroService.getApps();
        $scope.Aplicaciones;

        getApps.then(function (resp) {
            $scope.Aplicaciones = resp;
            $scope.colectorCubos();


            console.log("Aplicaciones");
            console.log($scope.Aplicaciones);
            console.log("Cubos Limpios");
            console.log($scope.CubosLimpios);
        }, function (err) {
            $scope.ErrorMessage = "Error" + err.status;
        });

        $scope.row = [];
        $scope.CubosLimpios = new Array();

        $scope.colectorCubos = function () {
            for (var i = 0; i < $scope.Aplicaciones.length; i++) {
                var indiceSiguiente = i + 1;
                $scope.row = [];
                if ($scope.Aplicaciones[i].Tamano == "Grande" || $scope.Aplicaciones[i].Tamano == "Mediano") {
                    $scope.row.push({
                        Columna: $scope.Aplicaciones[i].Columna,
                        Orden: $scope.Aplicaciones[i].Orden,
                        Imagen: $scope.Aplicaciones[i].Imagen,
                        Tamano: $scope.Aplicaciones[i].Tamano
                    });
                    $scope.CubosLimpios.push($scope.row);
                    $scope.row = [];
                }
                if ($scope.Aplicaciones[i].Tamano == "Chico") {

                    $scope.row.push({
                        Columna: $scope.Aplicaciones[i].Columna,
                        Orden: $scope.Aplicaciones[i].Orden,
                        Imagen: $scope.Aplicaciones[i].Imagen,
                        Tamano: $scope.Aplicaciones[i].Tamano
                    });

                    var cuboChicoCount = 1;
                    var exit = false;
                    do {
                        if ($scope.Aplicaciones[indiceSiguiente].Tamano == "Chico") {
                            cuboChicoCount++;
                            $scope.row.push({
                                Columna: $scope.Aplicaciones[indiceSiguiente].Columna,
                                Orden: $scope.Aplicaciones[indiceSiguiente].Orden,
                                Imagen: $scope.Aplicaciones[indiceSiguiente].Imagen,
                                Tamano: $scope.Aplicaciones[indiceSiguiente].Tamano
                            });

                            indiceSiguiente++;
                        } else {
                            exit = true;
                        }
                    } while ((cuboChicoCount < 4) && (indiceSiguiente < $scope.Aplicaciones.length) && (exit !== true))

                    $scope.CubosLimpios.push($scope.row);
                    i = indiceSiguiente - 1;
                    $scope.row = [];

                }
            }
            console.log($scope.CubosLimpios);

        }
        $scope.TraerTemplate = function (parametro) {
            console.log("a");
            console.log(parametro);
            if (parametro[0].Tamano == "Grande") {

                return "/Angular/Template/cuboGrandeTemplate.html";

            }
            if (parametro[0].Tamano == "Mediano") {

                return "/Angular/Template/cuboMedianoTemplate.html";

            }
            if (parametro[0].Tamano == "Chico") {

                return "/Angular/Template/cuboChicoTemplate.html";

            }
        };

    })
}(app));