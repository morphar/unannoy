(function () {
    function removeClass (className) {
        let elms = document.getElementsByClassName(className);

        let re = new RegExp(className, 'gi');

        for (let i = elms.length - 1; i >= 0; i--) {
            let elm = elms[i];
            elm.className = elm.className.replace(re, '');
        }
    }

    function removeClassByQuery (query, className) {
        let re = new RegExp(className, 'gi');
        let elms = document.querySelectorAll(query);
        for (let i = elms.length - 1; i >= 0; i--) {
            let elm = elms[i];
            elm.className = elm.className.replace(re, '');
        }
    }

    function removeByClassQuery (query, className) {
        let re = new RegExp(className, 'gi');
        let elms = document.querySelectorAll(query);
        for (let i = elms.length - 1; i >= 0; i--) {
            removeElement(elms[i]);
        }
    }

    function removeById (id) {
        removeElement(document.getElementById(id));
    }

    function removeElement (node) {
        if (node && typeof node !== 'undefined' && typeof node.parentNode !== 'undefined') {
            node.parentNode.removeChild(node);
        }
    }

    function removeByClass (className) {
        let elms = document.getElementsByClassName(className);
        for (let i = elms.length - 1; i >= 0; i--) {
            removeElement(elms[i]);
        }
    }

    function removeByAttribute (tag, attrName, attrValue) {
        let elms = document.querySelectorAll(`${tag}[${attrName}='${attrValue}']`);
        for (let i = elms.length - 1; i >= 0; i--) {
            removeElement(elms[i]);
        }
    }

    function getHighestZIndex () {
        let elms = document.getElementsByTagName('*');
        let highestZ = 0;
        for (let i = elms.length - 1; i >= 0; i--) {
            let z = getComputedStyle(elms[i]).zIndex;
            if (isNaN(z)) {
                continue;
            }
            highestZ = Math.max(z, highestZ);
        }
        return highestZ;
    }

    function removeOverlays () {
        let elms = document.getElementsByTagName('*');

        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;

        let highestZ = getHighestZIndex();

        for (let i = elms.length - 1; i >= 0; i--) {
            if (elms[i] instanceof Element) {
                let computedElm = getComputedStyle(elms[i]);

                if (highestZ != computedElm.zIndex) {
                    continue;
                }

                if (elms[i].className && elms[i].className.indexOf && elms[i].className.indexOf('overlay') !== -1) {
                    removeElement(elms[i]);
                    continue;
                }

                let width = elms[i].offsetWidth;
                let height = elms[i].offsetHeight;
                if (width >= viewportWidth && height >= viewportHeight) {
                    removeElement(elms[i]);
                    continue;
                }

                let computedBefore = getComputedStyle(elms[i], ':before');
                width = computedBefore.width;
                width = parseInt(width.substr(0, width.length - 2));
                height = computedBefore.height;
                height = parseInt(height.substr(0, height.length - 2));

                if (width >= viewportWidth && height >= viewportHeight) {
                    removeElement(elms[i]);
                }
            }
        }
    }

    var cssText = 'overflow:unset!important;position:unset!important;top:unset!important;bottom:unset!important;left:unset!important;right:unset!important';
    document.getElementsByTagName('html')[0].style.cssText = cssText;
    document.body.style.cssText = cssText;

    // Google funding "choice"
    removeByClass('fc-ab-root');
    removeByAttribute('iframe', 'name', 'googlefcInactive');
    removeByAttribute('iframe', 'name', 'googlefcPresent');

    // QuantCast
    removeClass('qc-cmp-showing');
    removeClass('qc-cmp-ui-showing');
    removeByClass('qc-cmp-ui-container');

    // Medium
    removeByClass('overlay');
    removeClass('u-overflowHidden');
    // Privacy Policy bar
    removeByClass('butterBar--privacy');

    // CybotCookieDialog
    // removeByAttribute('div','role','alertdialog');
    removeById('CybotCookiebotDialog');
    removeById('CybotCookiebotDialogBodyUnderlay');

    // Oil layer: https://www.oiljs.org/
    removeByClass('as-oil');
    removeClass('as-oil-js-active');

    // Generics
    removeClassByQuery('html', 'locked');
    removeClassByQuery('body', 'locked');
    removeClassByQuery('html', 'noScroll');
    removeClassByQuery('body', 'noScroll');
    removeByClass('as-oil');
    removeByClassQuery('aside', 'CookieModal');

    // Forbes (others?)
    removeClass('article-fixed');

    // Remove overlays
    removeOverlays();
}())
