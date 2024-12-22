mergeInto(LibraryManager.library, {
    jsReceivePuzzleSolutionCb: function (day, part, output, outputLength) {
        let solution = output !== 0 && outputLength > 0
            ? UTF8ToString(output, outputLength)
            : undefined;
        aocWasmCallbacks.reiceivePuzzleSolution(day, part, solution);
    },
    jsDebugCb: function (code) {
        var _a;
        (_a = aocWasmCallbacks.debug) === null || _a === void 0 ? void 0 : _a.call(aocWasmCallbacks, code);
    },
});
