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
var BlackSelectionHybrid = /** @class */ (function (_super) {
    __extends(BlackSelectionHybrid, _super);
    function BlackSelectionHybrid(identifier, container, controller, mode) {
        return _super.call(this, identifier, container, controller, mode) || this;
    }
    BlackSelectionHybrid.prototype.initHTML = function (oldContainer) {
        var label = oldContainer.html();
        var classes = oldContainer.attr('class');
        var newHTML = '<div class="' + classes + '" id="' + this.identifier + '_black">' + label + '</div>';
        this.container = $(newHTML);
        oldContainer.replaceWith(this.container);
    };
    return BlackSelectionHybrid;
}(SelectionHybrid));
//# sourceMappingURL=black_selection_hybrid.js.map