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
var ReplicaLookAndFeel = /** @class */ (function (_super) {
    __extends(ReplicaLookAndFeel, _super);
    function ReplicaLookAndFeel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReplicaLookAndFeel.prototype.createButton = function (element, controller) {
        return new ReplicaButton(element, controller);
    };
    ReplicaLookAndFeel.prototype.createCheckboxGroup = function (checkboxGroupName, checkboxElements, checkboxLabels, controller) {
        return new ReplicaCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller);
    };
    ReplicaLookAndFeel.prototype.createLabel = function (element, controller) {
        //return new ReplicaLabel(element, controller);
    };
    ReplicaLookAndFeel.prototype.createPanel = function (identifier, contents, container, controller, widgetFactory, defaultAction) {
        //  return new ReplicaPanel(identifier, contents, container, controller, widgetFactory, defaultAction);
    };
    ReplicaLookAndFeel.prototype.createRadioGroup = function (radioGroupName, radioElements, radioLabels, controller) {
        return new ReplicaRadioGroup(radioGroupName, radioElements, radioLabels, controller);
    };
    ReplicaLookAndFeel.prototype.createSelectionHybrid = function (identifier, element, controller) {
        //  return new ReplicaSelectionHybrid(identifier, element, controller);
    };
    ReplicaLookAndFeel.prototype.createTabGroup = function (identifier, container, controller, widgetFactory) {
        //  return new ReplicaTabGroup(identifier, container, controller, widgetFactory);
    };
    ReplicaLookAndFeel.prototype.createTextbox = function (identifier, container, controller) {
        return new ReplicaTextbox(identifier, container, controller);
    };
    return ReplicaLookAndFeel;
}(LookAndFeel));
//# sourceMappingURL=replica_look_and_feel.js.map