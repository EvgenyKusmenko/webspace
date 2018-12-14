/*
Copyright (c) 2013 Andrea Cardaci <cyrus.and@gmail.com>
I.S.T.I. - C.N.R. Pisa

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

define(function(require, exports, module) {
    exports.commands = {
        'Console': [
            'clearMessages',
            'disable',
            'enable'
        ],
        'Debugger': [
            'canSetScriptSource',
            'continueToLocation',
            'disable',
            'enable',
            'evaluateOnCallFrame',
            'getScriptSource',
            'pause',
            'removeBreakpoint',
            'resume',
            'searchInContent',
            'setBreakpoint',
            'setBreakpointByUrl',
            'setBreakpointsActive',
            'setPauseOnExceptions',
            'setScriptSource',
            'stepInto',
            'stepOut',
            'stepOver'
        ],
        'DOM': [
            'getAttributes',
            'getDocument',
            'getOuterHTML',
            'hideHighlight',
            'highlightNode',
            'highlightRect',
            'moveTo',
            'querySelector',
            'querySelectorAll',
            'removeAttribute',
            'removeNode',
            'requestChildNodes',
            'requestNode',
            'resolveNode',
            'setAttributeValue',
            'setAttributesAsText',
            'setNodeName',
            'setNodeValue',
            'setOuterHTML'
        ],
        'DOMDebugger': [
            'removeDOMBreakpoint',
            'removeEventListenerBreakpoint',
            'removeXHRBreakpoint',
            'setDOMBreakpoint',
            'setEventListenerBreakpoint',
            'setXHRBreakpoint'
        ],
        'Network': [
            'canClearBrowserCache',
            'canClearBrowserCookies',
            'clearBrowserCache',
            'clearBrowserCookies',
            'disable',
            'enable',
            'getResponseBody',
            'setCacheDisabled',
            'setExtraHTTPHeaders',
            'setUserAgentOverride'
        ],
        'Tab': [
            'disable',
            'enable',
            'navigate',
            'reload'
        ],
        'Runtime': [
            'callFunctionOn',
            'evaluate',
            'getProperties',
            'releaseObject',
            'releaseObjectGroup'
        ],
        'Timeline': [
            'start',
            'stop'
        ]
    };
});