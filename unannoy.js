(function() {
    function removeClass(className) {
        let elms = document.getElementsByClassName(className);

        let re = new RegExp(className, 'gi');

        for (let i = elms.length - 1; i >= 0; i--) {
            let elm = elms[i];
            elm.className = elm.className.replace(re, '');
        }
    }

    function removeClassByQuery(query, className) {
        let re = new RegExp(className, 'gi');
        let elms = document.querySelectorAll(query)
        for (let i = elms.length - 1; i >= 0; i--) {
            let elm = elms[i];
            elm.className = elm.className.replace(re, '');
        }
    }

    function removeById(id) {
        removeElement(document.getElementById(id));
    }

    function removeElement(node) {
        if (node && typeof node !== 'undefined' && typeof node.parentNode !== 'undefined') {
            node.parentNode.removeChild(node);
        }
    }

    function removeByClass(className) {
        let elms = document.getElementsByClassName(className);
        for (let i = elms.length - 1; i >= 0; i--) {
            removeElement(elms[i]);
        }
    }

    function removeByAttribute(tag, attrName, attrValue) {
        let elms = document.querySelectorAll(`${tag}[${attrName}='${attrValue}']`)
        for (let i = elms.length - 1; i >= 0; i--) {
            removeElement(elms[i]);
        }
    }

    // Doesn't work in Safari
    function removeOverlays() {
        let elms = document.getElementsByTagName('*');

        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;

        for (let i = elms.length - 1; i >= 0; i--) {
            if (elms[i] instanceof Element) {
                if (elms[i].className && elms[i].className.indexOf && elms[i].className.indexOf('overlay') !== -1) {
                    removeElement(elms[i]);
                    continue;
                }

                let width = elms[i].offsetWidth;
                let height = elms[i].offsetHeight;
                if (width == viewportWidth && height == viewportHeight) {
                    removeElement(elms[i]);
                    continue;
                }

                let computedBefore = getComputedStyle(elms[i], ':before')
                width = computedBefore.width
                width = parseInt(width.substr(0, width.length-2))
                height = computedBefore.height
                height = parseInt(height.substr(0, height.length-2))

                if (width >= viewportWidth && height >= viewportHeight) {
                    removeElement(elms[i]);
                }
            }
        }
    }

    // Unset hidden overflows
    document.getElementsByTagName('html')[0].style.overflow = 'unset';
    document.body.style.overflow = 'unset';

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
    removeClassByQuery('html', 'locked')
    removeClassByQuery('body', 'locked')
    removeClassByQuery('html', 'noScroll')
    removeClassByQuery('body', 'noScroll')

    // Remove overlays
    removeOverlays();
}())