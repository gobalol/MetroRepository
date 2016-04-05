(function (app) {
    'use strict';
    app.controller('MetroUIAccessCtrl', function ($scope) {

        //$scope.name = "Start With Project";

        $scope.cubo = "";
        $scope.arrayCubos = [];
        $scope.cuadrados = [

            {
                Row: 1,
                Orden: 1,
                Imagen: "#",
                Url: "#",
                Tamano: "Grande"
            },
            {
                Row: 1,
                Orden: 2,
                Imagen: "#",
                Url: "#",
                Tamano: "Medio"
            },
            {
                Row: 1,
                Orden: 3,
                Imagen: "#",
                Url: "#",
                Tamano: "Medio"
            },
            {
                Row: 1,
                Orden: 4,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 1,
                Orden: 5,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 1,
                Orden: 6,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 2,
                Orden: 1,
                Imagen: "#",
                Url: "#",
                Tamano: "Medio"
            },
            {
                Row: 2,
                Orden: 2,
                Imagen: "#",
                Url: "#",
                Tamano: "Medio"
            },
            {
                Row: 2,
                Orden: 3,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 2,
                Orden: 4,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 2,
                Orden: 5,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 2,
                Orden: 6,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 2,
                Orden: 7,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 2,
                Orden: 8,
                Imagen: "#",
                Url: "#",
                Tamano: "Chico"
            },
            {
                Row: 3,
                Orden: 1,
                Imagen: "#",
                Url: "#",
                Tamano: "Medio"
            }
        ]
        //var contadorCubos = 1;
        for (var i = 0; i < $scope.cuadrados.length; i++) {
            var indiceSiguiente = i + 1;
            if ($scope.cuadrados[i].Tamano == "Chico") {
                $scope.cubo = "<div class='square4x4containerOr3x1'>";
                var cuboChicoContenido = "<div class='small pos cuatroSquare'></div>";
              //  console.log("agrege chikito " + $scope.cubo + $scope.cuadrados[i].Orden);
                var cuboChicoCount = 1;
                var exit = false;
                do {
                    if ($scope.cuadrados[indiceSiguiente].Tamano == "Chico") {
                        cuboChicoCount++;
                        //cuboChicoContenido += "<div class='small pos cuatroSquare'></div>";
                        $scope.cubo += cuboChicoContenido;
                       // console.log("agrege chikito "+ $scope.cubo + $scope.cuadrados[indiceSiguiente].Orden);
                        indiceSiguiente++;
                    } else {
                        exit = true;
                    }
                } while ((cuboChicoCount < 4) && (indiceSiguiente < $scope.cuadrados.length) && (exit != true))
                {
                    $scope.cubo += cuboChicoContenido;
                    $scope.cubo += "</div>";
                    $scope.arrayCubos.push($scope.cubo);
                    i = indiceSiguiente-1;
                    $scope.cubo.length = 0;
                }
                //if(($scope.cuadrados[i].Tamano == "Chico" )&&( $scope.cuadrados[i+1].Tamano == "Chico") && (contadorCubos <4 ))
                //{
                //    if(contadorCubos == 1)
                //    {
                //        $scope.cubo = "<div class='square4x4containerOr3x1'>";
                //    }
                //    $scope.cubo += "<div class='small pos cuatroSquare'></div>";
                //    console.log("Cubo " + $scope.cubo);
                //    contadorCubos++;
                //}
                //else if( (($scope.cuadrados[i].Tamano == "Chico") && ($scope.cuadrados[i+1].Tamano != "Chico") ) || ( contadorCubos >= 4) )
                //{
                //    if (contadorCubos == 1)
                //    {
                //        $scope.cubo = "<div class='square4x4containerOr3x1'>";
                //        $scope.cubo += "<div class='small pos cuatroSquare'></div>";
                //        $scope.cubo += "</div>";
                //        console.log("Cerrado "+$scope.cubo);
                //    } else
                //    {
                //    $scope.cubo += "<div class='small pos cuatroSquare'></div>";
                //    console.log("Cubo " + $scope.cubo);
                //    $scope.cubo += "</div>";
                //    contadorCubos=1;
                //    console.log("Cerrado "+$scope.cubo);
                //    }
                //}

            }
            
        }
        console.log($scope.arrayCubos);
        //console.log($scope.arrayCubos);
        //MetroServiceNonSP.getAllApplications();
    });
}(app));
