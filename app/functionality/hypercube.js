define([], function () {
      console.log("hypercube loaded");
 
   //Logic for Reload Time
   app.getAppLayout().then((e) => {
     console.log("reload time received");
     var reloadTime = e.layout.qLastReloadTime;
     var newDate = new Date(reloadTime);
     var reloadTimeNew =
       newDate.getMonth() +
       1 +
       "/" +
       newDate.getDate() +
       "/" +
       newDate.getFullYear() +
       " " +
       newDate.toLocaleString("en-US", {
         hour: "numeric",
         minute: "numeric",
         hour12: true,
       });
     $('[class="reloadTime"]').text(reloadTimeNew);
   });
 
   function KPIhc(reply, app) {
     console.log("KPIs loaded");
     $("#QVKPI1")[0].innerText =
       reply.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
     $("#QVKPI2")[0].innerText =
       reply.qHyperCube.qDataPages[0].qMatrix[0][1].qText;
     $("#QVKPI3")[0].innerText =
       reply.qHyperCube.qDataPages[0].qMatrix[0][2].qText;
   }
   //create cubes and lists -- inserted here --
   app.createCube(
     {
       qInitialDataFetch: [
         {
           qHeight: 20,
           qWidth: 3,
         },
       ],
       qDimensions: [],
       qMeasures: [
         {
           qDef: {
             qDef: "pick(ceil(log10(sum(LineSalesAmount))/3),\r\n\n          num(sum(LineSalesAmount),'#,##0.0'),\n\n          num(sum(LineSalesAmount)/1000,'#,##0.0 K'),\n\n          num(sum(LineSalesAmount)/1000000,'#,##0.0 M')\n\n     )   & ''",
           },
           qLabel: "KPI1",
           qLibraryId: null,
           qSortBy: {
             qSortByState: 0,
             qSortByFrequency: 0,
             qSortByNumeric: 0,
             qSortByAscii: 1,
             qSortByLoadOrder: 0,
             qSortByExpression: 0,
             qExpression: {
               qv: " ",
             },
           },
         },
         {
           qDef: {
             qDef: "Count(Country)",
           },
           qLabel: "KPI2",
           qLibraryId: null,
           qSortBy: {
             qSortByState: 0,
             qSortByFrequency: 0,
             qSortByNumeric: 0,
             qSortByAscii: 1,
             qSortByLoadOrder: 0,
             qSortByExpression: 0,
             qExpression: {
               qv: " ",
             },
           },
         },
         {
           qLabel: "Margin",
           qLibraryId: "AxGzSg",
           qSortBy: {
             qSortByState: 0,
             qSortByFrequency: 0,
             qSortByNumeric: 0,
             qSortByAscii: 1,
             qSortByLoadOrder: 0,
             qSortByExpression: 0,
             qExpression: {
               qv: " ",
             },
           },
         },
       ],
       qSuppressZero: false,
       qSuppressMissing: false,
       qMode: "S",
       qInterColumnSortOrder: [],
       qStateName: "$",
     },
     KPIhc
   );
 });
 