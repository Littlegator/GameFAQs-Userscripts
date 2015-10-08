// ==UserScript==
// @name         GameFAQs Alt+Z Hotkey
// @namespace    gfaqs_hotkey
// @version      1.0
// @description  GameFAQs hotkey to post message
// @author       Littlegator
// @grant        none
// @downloadURL http://gates.coffee/gfaqs_hotkey.user.js
// @include http://www.gamefaqs.com/boards/*
// ==/UserScript==

/* 
    The MIT License (MIT)

    This greasemonkey script for GameFAQs converts image and webm
    links into their embedded form. It can be considered as a spiritual successor
    to text-to-image for GameFAQs. Many of its features are inspired from appchan x
    by zixaphir at http://zixaphir.github.io/appchan-x/.
    
    Copyright (c) 2015 FightingGames@gamefaqs <adrenalinebionicarm@gmail.com>
    Copyright (c) 2015 FeaturingDante@gamefaqs <featuringDante@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

*/

$.alt = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[]; // IE barks when args is null 

        if(e.keyCode == key.charCodeAt(0) && e.altKey) {
            callback.apply(this, args);
            return false;
        }
    });        
};

$.alt('Z', function() {
    document.querySelector('input.btn.btn_primary').click();
});
