/**
 * ILIAS-Modifikationen in PO3
 *
 * Dieses Script beinhaltet alle "Quick and Dirty"-Anpassungen,
 * die am ILIAS vorgenommen wurden.
 *
 * Konventionell "geteilte" Variablen:
 *   po.anpassungen.werkzeugbox: eine $("ul")
 *       der man eigene Menuepunkte hinzufuegen kann (gemacht von feedback.js).
 *
 **/

if(!window.po) window.po = {}; // PhysikOnline Namespace
po.anpassungen = {}; // Anpassungs-Namensraum

po.anpassungen.setup = function() {
	// Enable "JS-only" content
	$(".js-only").show(); // vgl. po3-classes.less unten.
	$(".hidden-js").hide(); // nur fuer JS-faehige Browser verstecken
    
	po.anpassungen.footer();
};

po.anpassungen.footer = function() {
	// Sven, POTT #689
	po.anpassungen.werkzeugbox = $(".ilFooter .werkzeuge ul");

	// 1. Kurzlink
	$("<li/>").append($(".permalink_label").detach()).append($("#current_perma_link").detach()).appendTo(po.anpassungen.werkzeugbox);
	$("a.permalink_label").text("Kurzlink");
    $("label[for=current_perma_link]").hide();

	// 2. Styleswitch
	$("<li/>").append($("a.iosStyleSwitch").text("Skin wechseln")).appendTo(po.anpassungen.werkzeugbox);
	$("div.iosStyleSwitch").remove();

	// 3. Feedback
	// ausgelagert in feedback.js zwecks einfacher Deaktivierung
}

