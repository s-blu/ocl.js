"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastExpression = void 0;
var Expression_1 = require("../Expression");
/**
 * Returns the last element of the collection.
 *
 * @oclExpression last() : T
 * @oclExample self.collection->last()
 */
var LastExpression = /** @class */ (function (_super) {
    __extends(LastExpression, _super);
    function LastExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LastExpression.prototype.evaluate = function (visitor, localVariables) {
        var source = this.getSource().evaluate(visitor, localVariables);
        if (source instanceof Array) {
            return source[source.length - 1];
        }
    };
    return LastExpression;
}(Expression_1.SourceBasedExpression));
exports.LastExpression = LastExpression;
//# sourceMappingURL=LastExpression.js.map