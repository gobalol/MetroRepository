'use strict';
angular
    .module('MetroUIAccess')
    .controller('MetroUIAccessCtrl', [colsYcubos]);

        //$scope.name = "Start With Project";
function colsYcubos() {
    var self = this;
    self.numeroColumnas = function () {
        self.cols = [1, 2, 3];
        return self.cols;
    }
    self.colectorCubos = function () {
        self.cubo = "";
        self.arrayCubos = [];
        self.cuadrados = [

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
        for (var i = 0; i < self.cuadrados.length; i++) {
            var indiceSiguiente = i + 1;
            //if (self.cuadrados[i].Tamano == "Grande") {
            //    self.cuadrados = "<div class='big pos'></div>";
            //    self.cubo.length = 0;
            //}
            //else if (self.cuadrados[i].Tamano == "Mediano") {
            //    self.cuadrados = "<div class='big pos'></div>";
            //    self.cubo.length = 0;
            //}
            if (self.cuadrados[i].Tamano == "Chico") {
                self.cubo = "<div class='square4x4containerOr3x1'>";
                var cuboChicoContenido = "<div class='small pos cuatroSquare'></div>";
                console.log("agrege chikito " + self.cubo + cuboChicoContenido);
                var cuboChicoCount = 1;
                var exit = false;
                do {
                    if (self.cuadrados[indiceSiguiente].Tamano == "Chico") {
                        cuboChicoCount++;
                        //cuboChicoContenido += "<div class='small pos cuatroSquare'></div>";
                        self.cubo += cuboChicoContenido;
                        console.log("agrege chikito " + cuboChicoContenido + self.cuadrados[indiceSiguiente].Orden);
                        indiceSiguiente++;
                    } else {
                        exit = true;
                    }
                } while ((cuboChicoCount < 4) && (indiceSiguiente < self.cuadrados.length) && (exit != true))
                {
                    self.cubo += cuboChicoContenido;
                    self.cubo += "</div>";
                    self.arrayCubos.push(self.cubo);
                    i = indiceSiguiente - 1;
                    self.cubo.length = 0;
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
        return self.arrayCubos;
        console.log(self.arrayCubos);
        //console.log($scope.arrayCubos);
        //MetroServiceNonSP.getAllApplications();
    }
}