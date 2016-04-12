(function () {
    'use strict';
    app
		.service('MetroService', function ($q, $http) {
			var self = this;

			this.connection = {
				listTitle: ''
			}

            // Trae parametros de get
			function retriveGetParameter(paramToRetrieve) {
				var params = document.URL.split("?")[1].split("&");
				var strParams = "";
				for (var i = 0; i < params.length; i = i + 1) {
					var singleParam = params[i].split("=");
					if (singleParam[0] == paramToRetrieve) {
						return singleParam[1];
					}
				}
			}

			// SharePoint Url's
			var sharePoint = {
				hostWebUrl: decodeURIComponent(retriveGetParameter('SPHostUrl')),
				appWebUrl: decodeURIComponent(retriveGetParameter('SPAppWebUrl')),
			}

			// SharePoint List Information
			var listInfo = {
				listTitle: "Aplicaciones",
				pageSize: 500,
				fields: {
					titleField: "Title",
					ordenField: "Orden",
					columnaField: "Columna",
					imagenField: "Imagen",
					UrlField: "Url",
					TamanoField: "Tamano"
				}
			}

			self.getApps = function () {
				var deferred = $q.defer();
				console.log("List Info:");
				console.log(listInfo);

				console.log("asdad");

				//Get the SharePoint Context object based upon the URL
				var ctx = new SP.ClientContext(sharePoint.appWebUrl);
				var appCtxSite = new SP.AppContextSite(ctx, sharePoint.hostWebUrl);

				var web = appCtxSite.get_web(); //Get the Web 
				var list = web.get_lists().getByTitle(decodeURIComponent(listInfo.listTitle)); //Get the List

				var query = new SP.CamlQuery(); //The Query object. This is used to query for data in the List
				query.set_viewXml('<View><Query><OrderBy> <FieldRef Name="ID" Ascending = "DESC"  /></OrderBy></Query> <RowLimit>' + listInfo.pageSize + '</RowLimit></View>');

				var items = list.getItems(query);

				ctx.load(list); //Retrieves the properties of a client object from the server.
				ctx.load(items);

			

				//Execute the Query Asynchronously
				ctx.executeQueryAsync(
					Function.createDelegate(this, function () {
					    var itemInfo = '';
					    var enumerator = items.getEnumerator();
					    var Aplicaciones = [];

					    // Add News
					    while (enumerator.moveNext()) {
					        var currentListItem = enumerator.get_current();
					        console.log(listInfo.fields.preguntaField);
					        console.log(listInfo.fields.seccionField);
					        console.log(listInfo.fields.ordenField);
					        console.log(listInfo.fields.tipoDeRespuestaField);
					        console.log(listInfo.fields.posiblesRespuestasField);
					        Aplicaciones.push(
                                {
					                Columna: currentListItem.get_item('ID'),
					                Orden: currentListItem.get_item(listInfo.fields.titleField),
					                Imagen: "#",
                                    Url: "#",
                                    Tamano: currentListItem.get_item(listInfo.fields.titleField)
                                }
                            )
						}
						console.log(Aplicaciones);
                        // ANGULAR
						deferred.resolve(Aplicaciones);
					}),
					Function.createDelegate(this, function (sender, args) {
						console.log(args.get_message());
						deferred.reject('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
					})
				);

				return deferred.promise;
			};


			self.updateQuestion = function (id, obj) {
				var ctx = new SP.ClientContext(sharePoint.appWebUrl);
				var appCtxSite = new SP.AppContextSite(ctx, sharePoint.hostWebUrl);

				var web = appCtxSite.get_web(); //Get the Web 
				var list = web.get_lists().getByTitle(decodeURIComponent(listInfo.listTitle)); //Get the List

				var listItem = list.getItemById(id);
				listItem.set_item('fb_Pregunta', obj.Seccion);
				listItem.update();

				ctx.executeQueryAsync(
					Function.createDelegate(this, function(){console.log("Work")})
					,
					Function.createDelegate(this, function (sender, args) { console.log('Fail' + args.get_message() + '\n' + args.get_stackTrace()) })
				)
			}
			
		});
})(app);