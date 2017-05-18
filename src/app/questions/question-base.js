"use strict";
var QuestionOptions = (function () {
    function QuestionOptions() {
    }
    return QuestionOptions;
}());
var QuestionBase = (function () {
    function QuestionBase(options) {
        this.title = options.title;
        this.description = options.description || "";
        this.controlType = options.controlType;
        this.dataName = options.dataName;
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;
//# sourceMappingURL=question-base.js.map