var prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);

var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:",
};

var app;

var appRequire = require.config({
  context: "appRequire",
  baseUrl: "./",
  paths: {
    jquery: "https://code.jquery.com/jquery-3.5.1.slim.min",
    bootstrap:
      "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min",
  },
  shim: {
    bootstrap: {
      deps: ["jquery"],
    },
  },
});

require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources",
});

require(["js/qlik"], function (qlik) {
  //callbacks -- inserted here --
  //open apps -- inserted here --

  // EXPORTING QLIK TO GLOBAL SCOPE
  window.qlik = qlik;
  // EXPOERTING APP TO GLOBAL SCOPE
  window.app = app;

  function AppUi(app) {
    //Require app.js
    require({ context: "appRequire" }, ["app/app.js"]);
  }

  //get objects -- inserted here --

  /* Export Button logic for 2 tables. Pls change object IDs accordingly*/
  /*
	.then(function(reply){
	var qTable = qlik.table(reply);
	$('#ExportButton1').click( function ( ) {
							qTable.exportData({download: true});
							});
		
});	*/

  new AppUi(app);
});
