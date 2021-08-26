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
var BlackLookAndFeel = /** @class */ (function (_super) {
    __extends(BlackLookAndFeel, _super);
    function BlackLookAndFeel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackLookAndFeel.prototype.createButton = function (element, controller) {
        return new BlackButton(element, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createCheckboxGroup = function (checkboxGroupName, checkboxElements, checkboxLabels, controller) {
        return new BlackCheckboxGroup(checkboxGroupName, checkboxElements, checkboxLabels, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createLabel = function (element, controller) {
        return new BlackLabel(element, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createPanel = function (identifier, contents, container, controller) {
        return new BlackPanel(identifier, contents, container, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createRadioGroup = function (radioGroupName, radioElements, radioLabels, controller) {
        return new BlackRadioGroup(radioGroupName, radioElements, radioLabels, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createSelectionHybrid = function (identifier, element, controller) {
        return new BlackSelectionHybrid(identifier, element, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createTabGroup = function (identifier, container, controller, widgetFactory) {
        return new BlackTabGroup(identifier, container, controller, widgetFactory, this.mode);
    };
    BlackLookAndFeel.prototype.createTextbox = function (identifier, container, controller) {
        return new BlackTextbox(identifier, container, controller, this.mode);
    };
    BlackLookAndFeel.prototype.createListbox = function (identifier, container, controller) {
        return new BlackListbox(identifier, container, controller, this.mode);
    };
    return BlackLookAndFeel;
}(LookAndFeel));
//# sourceMappingURL=black_look_and_feel.js.map