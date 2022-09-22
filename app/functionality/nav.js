define(["jquery", "bootstrap"], function ($) {

  //console.log('Nav Functionality Loaded')
  
    //Selections Navigation
    $("[data-control]").click(function () {
      var $element = $(this);
      switch ($element.data("control")) {
        case "clear":
          app.clearAll();
          break;
        case "back":
          app.back();
          break;
        case "forward":
          app.forward();
          break;
      }
    });
  
    $(function () {
      /**** JS logic for Menu Icon and Filter Icon  *****/
      $(".hamburger .hamburger__inner").click(function () {
        $(".wrapper").toggleClass("active");
      });
      $("#filter-toggle, #close-filters").click(function () {
        $(".wrapper, #bs-canvas-right").toggleClass("active-filters");
       $("body").css("display", "flex");
      
      });
    });
  
    // find the bootstrap tab changing event
    // invoke qlik.resize(); in it
    // This is used for resizing qlik charts when the navigation tabs and filter/selections tabs are triggered
    $('a[data-toggle="tab"],[data-toggle="pill"]').on(
      "shown.bs.tab",
      function () {
        // console.log('resize')
        qlik.resize();
      }
    );
    // This is used for resizing qlik charts when the filter panel and navigation side bar are triggered
    $(
      '[data-toggle="canvas"][aria-expanded="false"],.bs-canvas-close,.hamburger'
    ).on("click", function () {
      setTimeout(() => {
        //console.log('resize');
        qlik.resize();
      }, 500);
    });
    // make sure to get only the relevant qlik objects within active tab
    $(".nav-tabs > a").on("shown.bs.tab", function (a) {
      var objToActivate = $(a.currentTarget.hash).find(".qvobject");
      objToActivate.each(function (index) {
        var $obj = $(objToActivate[index]);
        var divId = $obj.attr("id");
        var vizId = $obj.attr("object-id");
        app.visualization.get(vizId).then(function (viz) {
          viz.show(divId);
      
          console.log("Active Tab:", a.currentTarget.hash);
      console.log("charts rendered -> Activate qlikId: " + vizId + " into divId: " + divId);
  
          // hide
          $(a.currentTarget).on("hide.bs.tab", function (a) {
            console.log("charts removed -> De-Activate qlikId: " + vizId);
            viz.close();
          });
        });
      });
    });
  
    $(function () {
      activaTab("nav-dashboard");
    });
  
    function activaTab(tab) {
      $('.nav-tabs a[href="#' + tab + '"]').tab("show");
    }
    
    
    
  
    
    
  });
  