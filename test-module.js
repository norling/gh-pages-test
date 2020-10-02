(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TestModule = {}));
}(this, (function (exports) { 'use strict';

    /**
     * @file This is a demo function to test github pages deployment.
     * @author Martin Norling
     */

    function test(targetElement) {
        const parent = document.getElementById(targetElement);
        parent.innerHTML = "This text was added by a script.";
    }

    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
