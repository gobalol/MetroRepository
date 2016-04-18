<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server"/>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link href="../Content/MetroUICss/MetroStyles.css" rel="stylesheet" />
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.1/angular.min.js"></script>
    <script src="../Scripts/Angular/App/Core.js"></script>
    <script src="../Scripts/Angular/Controller/tableroController.js"></script>
    <script src="../Scripts/Angular/Service/MetroServiceNonSP.js"></script>

    <script type="text/javascript">
        // Establezca el estilo de la página de elementos web cliente para que sea coherente con el sitio web de host.
        (function () {
            'use strict';

            var hostUrl = '';
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            if (document.URL.indexOf('?') != -1) {
                var params = document.URL.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var p = decodeURIComponent(params[i]);
                    if (/^SPHostUrl=/i.test(p)) {
                        hostUrl = p.split('=')[1];
                        link.setAttribute('href', hostUrl + '/_layouts/15/defaultcss.ashx');
                        break;
                    }
                }
            }
            if (hostUrl == '') {
                link.setAttribute('href', '/_layouts/15/1033/styles/themable/corev15.css');
            }
            document.head.appendChild(link);
        })();
    </script>
    <base target="_parent">
</head>
<body data-ng-app="MetroUIAccess">
    <section class="wrapper" data-ng-controller="MetroUIAccessCtrl">
        <article class="flexContainer">
            <article class="rowContainer" data-ng-repeat="i in [1,2,3,4]">
                <div class="rowWidth">
                    <div data-ng-repeat="cuadrado in CubosLimpios | filter:{Columna: i}" data-ng-if="cuadrado[0].Tamano=='Grande'" class="big pos" data-ng-style="{'order':'{{cuadrado[0].Orden}}', 'background-image':'url({{cuadrado[0].Imagen}})'}">
                        <a class="squareLink" data-ng-href="{{cuadrado[0].Url}}"></a>
                        <p class="squareLinkText">{{cuadrado[0].UrlText}}</p>
                    </div>
                    <div data-ng-repeat="cuadrado in CubosLimpios | filter:{Columna: i}" data-ng-if="cuadrado[0].Tamano=='Mediano'" class="med pos" data-ng-style="{'order':'{{cuadrado[0].Orden}}', 'background-image':'url({{cuadrado[0].Imagen}})'}">
                        <a class="squareLink" data-ng-href="{{cuadrado[0].Url}}"></a>
                        <p class="squareLinkText">{{cuadrado[0].UrlText}}</p>
                    </div>

                    <div class="square4x4containerOr3x1 pos" data-ng-repeat="cuadrado in CubosLimpios | filter:{Columna: i}" data-ng-if="cuadrado[0].Tamano=='Chico'" data-ng-style="{'order':'{{cuadrado[0].Orden}}'}" data-ng-include src="'../Scripts/Angular/Template/cuboChicoTemplate.html'">
                            
                    </div>
                </div>
            </article>
        </article>
    </section>

</body>
</html>
