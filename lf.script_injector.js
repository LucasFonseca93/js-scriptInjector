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
 * Object that defines how the component will behave.
 * @type {{
 *      init: _scriptInjector.init
 * }}
 */
var _scriptInjector = {

    /**
     * Function that inits the component.
     */
    init: function () {

        this.protocol = window.location.protocol;  // Retrieve the application protocol
        this.host     = window.location.host    ;  // Retrieve the application host

        /**
         * Function that returns a base link to script (with the correct full path).
         * @param _dir - string
         * @return string
         */
        this.baseLink = function (_dir) {
            return this.protocol + '//' + this.host + '/' + _dir;
        };

        /**
         * Load a script by full path and append the script tag at body, head or documentElement.
         * @param _dir    - string
         * @param _script - string
         */
        this.load = function (_dir, _script, _callback) {
            _script.indexOf('.js') < 0 ? _script += '.js' : void(0);  // append the ".js" extension
            var script = document.createElement('script');

            script.type   = 'application/javascript';
            script.src    = this.baseLink(_dir) + '/' + _script;
            script.onload = function () {
                _callback ? _callback() : void(0);  // call the callback function
            };

            (document.body || document.head || document.documentElement).appendChild(script);
        };

    }

};
