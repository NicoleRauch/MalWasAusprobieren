// ==UserScript==
// @name        MalWasAusprobieren
// @namespace   nicolerauch
// @author      nicolerauch & myria
// @description TBD
// @run-at      document-end
// @include     *://www.wanikani.com/radicals/*
// @version     0.1.0
// @run-at      document-end
// ==/UserScript==

(function () {
    'use strict';

    var allRadicals = {
        // Level 1
        barb: [],
        big: [],
        construction: [],
        cross: [],
        drop: [],
        enter: [],
        fins: {
            symbol: "ハ",
            subradicals: []
        },
        ground: [],
        gun: [],
        leaf: [],
        lid: [],
        mountain: [],
        mouth: [],
        nine: [],
        person: [],
        power: [],
        prison: [],
        river: [],
        seven: [],
        slide: [],
        stick: [],
        sun: [],
        toe: [],
        tree: [],
        two: [],
        woman: [],
        // Level 2
        // Level 3
        towel: {
            symbol: "巾",
            subradicals: []
        },
        winter: {
            symbol: "夂",
            subradicals: []
        },


        // Level 11 - 20

        // Level 41 - 50
        cactus: [],
        signpost: ["winter"],
        bone: ["mustache", "forehead", "moon"],
        melon: [],
        satellite: [],
        shop: ["flag", "ground", "private", "dirt"],
        badger: [],
        imperial: ["moon", "stand"],
        plow: ["slide", "dirt", "tree"],
        can: ["mountain", "gun"],
        dragon: ["stand", "rice-paddy", "umbrella"],
        wind: ["table", "slide", "insect"],
        again: ["ground", "rice-paddy", "treasure"],
        house: ["roof", "pig"],
        protect: ["roof", "measurement"],
        fat: ["big", "drop"],
        favor: ["cross", "rice-paddy", "heart"],
        penguin: {
            symbol: "敝",
            subradicals: ["fins", "towel", "winter"]
        },
        wave: ["tsunami", "skin"],
        form: ["roof", "valley"],
        mysterious: ["lid", "poop"],
        sunlight: ["triceratops", "pi"],
        "crab-trap": ["cage", "legs", "crab"],
        times: ["mouth"],
        name: ["evening", "mouth"],
        psychopath: ["forehead", "hair", "spoon", "box", "treasure"],
        splinter: ["turtle-shell", "mustache", "head"],

        // Level 51 - 60
        stomach: ["rice paddy", "moon"],
        frostbite: ["dirt", "legs", "winter"],
        tall: ["lid", "mouth", "mustache"],
        doubt: ["spoon", "mama", "arrow", "coat-rack"],
        concave: [],
        convex: [],
        below: ["ground", "toe"],
        courage: ["mama", "man"],


    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    var url = document.URL;
    var urlParts = url.split("/");
    console.log(urlParts)
    if (urlParts[urlParts.length - 2] === "radicals") {
        var radicalName = urlParts[urlParts.length - 1];
        showSubRadicals(allRadicals[radicalName]);
        showSuperRadicals(radicalName);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function toName(slug) {
        return slug.split("-").map(capitalizeFirstLetter).join(" ");
    }

    function htmlFor(radicals, heading) {
        var sectionStartHTML = '<section>'
            + '<h2>' + heading + '</h2>'
            + '<ul class="single-character-grid">';

        var radicalHTML = radicals.map(function (subradical, idx) {
            console.log("subradical ", subradical, toName(subradical));
            return (
                '<li class="radical-' + idx + ' character-item">'
                + '<span lang="ja" class="item-badge"></span>'
                + '<a href="/radicals/' + subradical + '">'
                + '<span class="character" lang="ja">' + allRadicals[subradical].symbol + '</span>'
                + '<ul><li>' + toName(subradical) + '</li></ul>'
                + '</a>'
                + '</li>'
            );
        }).join("");
        var sectionEndHTML = "</ul></section>";

        return sectionStartHTML + radicalHTML + sectionEndHTML;
    }

    function showSubRadicals(radical) {
        console.log("showSubRadicals", radical)
        if (!radical || !radical.subradicals || radical.subradicals.length === 0) {
            return; // nothing to show here
        }

        $("#information").parent().append(htmlFor(radical.subradicals, "Contained Radicals"));
    }

    function showSuperRadicals(radicalName) {
        console.log("showSuperRadicals", radicalName)
        var superRadicals = Object.keys(allRadicals).filter(function (r) {
            var radical = allRadicals[r];
            return (radical && radical.subradicals && radical.subradicals.includes(radicalName));
        });

        if (!superRadicals || superRadicals.length === 0) {
            return; // nothing to show here
        }

        $("#information").parent().append(htmlFor(superRadicals, "Found In Radicals"));
    }

})();
