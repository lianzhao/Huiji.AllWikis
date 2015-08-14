// ==UserScript==
// @name         Huiji.AllWikis
// @namespace    Huiji
// @version      0.0.2
// @description  显示所有灰机维基
// @author       lianzhao
// @match        http://*.huiji.wiki/*
// @grant        none
// ==/UserScript==

$(function(){
    var current = window.location.href;
	var index = current.indexOf('.huiji.wiki');
	$('.more-link').append('<li><a href="/wiki/特殊:跨wiki">所有Wiki</a></li>');
	
	if (current.indexOf('.huiji.wiki/wiki/%E7%89%B9%E6%AE%8A:%E8%B7%A8wiki') > 0){
        $('.mw-interwikitable-row').filter(function(i, e){
            return $(e).children('.mw-interwikitable-local-yes').length > 0
        }).each(function(i, e){
            var cell = $(e).children()[0];
            var text = $(cell).text();
            $(cell).html('<a href="http://' + text + '.huiji.wiki/">' + text + '</a>');
        })
	}
});