/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Example of use of the component.
 * For this example we will assume that the application's front-end is divided according to the structure below:
 *
 * __ assets
 *      |__ js
 *           |__ lib
 *           |    |__ ajax.js
 *           |
 *           |__ model
 *           |    |__ user.js
 *           |
 *           |__ controller
 *                |__ mainController.js
 */

_scriptInjector.init(); // init the component

/**
 * Object that defines the directories from where the javascript scripts will be consumed.
 * @type {Object}
 */
var dirs = Object.freeze({
    lib       : 'assets/js/lib',
    model     : 'assets/js/model',
    controller: 'assets/js/controller'
});

/**
 * Defines a generic callback for loading scripts.
 * If you want to use a function or object that is inside the script to be loaded, simply do this in the callback.
 */
var genericCallback = function () {
    console.log('Script was loaded');
};

_scriptInjector.load(dirs.lib       , 'ajax'          , genericCallback);    // load script on lib dir
_scriptInjector.load(dirs.model     , 'user'          , genericCallback);    // load script on model dir
_scriptInjector.load(dirs.controller, 'mainController', genericCallback);    // load script on controller dir
