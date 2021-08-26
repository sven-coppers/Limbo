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
var ReplicaCheckboxGroup = /** @class */ (function (_super) {
    __extends(ReplicaCheckboxGroup, _super);
    function ReplicaCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller) {
        var _this = _super.call(this, checkboxGroupName, controller) || this;
        _this.initCheckboxes(checkboxElements, checkboxLabels);
        return _this;
    }
    ReplicaCheckboxGroup.prototype.initCheckboxes = function (oldElements, labels) {
        for (var i = 0; i < oldElements.length; i++) {
            var newCheckbox = new ReplicaCheckbox(labels[i], this.controller, oldElements[i], this);
            this.children[newCheckbox.identifier] = newCheckbox;
        }
    };
    return ReplicaCheckboxGroup;
}(CheckboxGroup));
//# sourceMappingURL=replica_checkbox_group.js.map