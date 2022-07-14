import $ from "jquery";
var wrap = $("#wrap");

    wrap.on("scroll", function (e) {
      if (this.scrollTop > 60) {
        wrap.addClass("fix-search");
      } else {
        wrap.removeClass("fix-search");
      }
    });