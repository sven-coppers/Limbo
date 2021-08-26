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
var ReplicaFeedforwardLookAndFeel = /** @class */ (function (_super) {
    __extends(ReplicaFeedforwardLookAndFeel, _super);
    function ReplicaFeedforwardLookAndFeel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReplicaFeedforwardLookAndFeel.prototype.createButton = function (element, controller) {
        return new ReplicaFeedforwardButton(element, controller);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createCheckboxGroup = function (checkboxGroupName, checkboxElements, checkboxLabels, controller) {
        return new ReplicaFeedforwardCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createLabel = function (element, controller) {
        //return new ReplicaLabel(element, controller);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createPanel = function (identifier, contents, container, controller, widgetFactory, defaultAction) {
        //  return new ReplicaPanel(identifier, contents, container, controller, widgetFactory, defaultAction);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createRadioGroup = function (radioGroupName, radioElements, radioLabels, controller) {
        return new ReplicaFeedforwardRadioGroup(radioGroupName, radioElements, radioLabels, controller);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createSelectionHybrid = function (identifier, element, controller) {
        //  return new ReplicaSelectionHybrid(identifier, element, controller);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createTabGroup = function (identifier, container, controller, widgetFactory) {
        //  return new ReplicaTabGroup(identifier, container, controller, widgetFactory);
    };
    ReplicaFeedforwardLookAndFeel.prototype.createTextbox = function (identifier, container, controller) {
        return new ReplicaFeedforwardTextbox(identifier, container, controller);
    };
    return ReplicaFeedforwardLookAndFeel;
}(LookAndFeel));
//# sourceMappingURL=replica_feedforward_look_and_feel.js.map