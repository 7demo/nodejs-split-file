$(function() {
    var t = $("#npm-search").outerWidth() - $("#site-search-submit").outerWidth();
    $.getScript("//cnstrc.com/js/ac.js", function() {
        $("#site-search").constructorAutocomplete({key: "CD06z4gVeqSXRiDL2ZNK",directResults: !0,maxHeight: 400,width: t})
    }), $(window).resize(function() {
        t = $("#npm-search").outerWidth() - $("#site-search-submit").outerWidth(), $(".autocomplete-suggestions").outerWidth(t)
    })
});
!function(e, n, t, a, c, i, s) {
    e.GoogleAnalyticsObject = c, e[c] = e[c] || function() {
        (e[c].q = e[c].q || []).push(arguments)
    }, e[c].l = 1 * new Date, i = n.createElement(t), s = n.getElementsByTagName(t)[0], i.async = 1, i.src = a, s.parentNode.insertBefore(i, s)
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-47041310-1", "auto"), ga("require", "displayfeatures"), ga("send", "pageview"), $(document).ready(function() {
    $(document).on("click", ".hiring-widget a", function() {
        ga("send", "event", "Hiring Ads", "click", $(this).parent().data("id"))
    }), $(document).on("click", ".ad a", function() {
        ga("send", "event", "Hiring Ads", "click", $(this).attr("title"))
    }), $('nav a[href="/enterprise"]').click(function() {
        ga("send", "event", "npm Enterprise", "click")
    }), $(document).on("click", "[data-event-trigger='click']", function() {
        ga("send", "event", $(this).data("eventName"), "click")
    })
});
!function(e, t, a, n) {
    if (!e.getElementById(a)) {
        var s = e.createElement(t), c = e.getElementsByTagName(t)[0];
        s.id = a, s.src = "//js.hs-analytics.net/analytics/" + Math.ceil(new Date / n) * n + "/419727.js", c.parentNode.insertBefore(s, c)
    }
}(document, "script", "hs-analytics", 3e5);
