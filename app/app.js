define([
    "require",
    "app/functionality/nav",
    "app/functionality/bookmarks",
    "app/functionality/selections",
    "app/functionality/hypercube",
  ], function (require) {
    //Modules loaded with relative Require call
    require(["./functionality/nav"], ["./functionality/bookmarks"], [
      "./functionality/selections",
    ], ["./functionality/hypercube"]);
  });
  