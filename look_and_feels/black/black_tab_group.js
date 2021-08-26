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
var BlackTabGroup = /** @class */ (function (_super) {
    __extends(BlackTabGroup, _super);
    function BlackTabGroup(identifier, container, controller, widgetFactory, mode) {
        return _super.call(this, identifier, container, controller, widgetFactory, mode) || this;
    }
    BlackTabGroup.prototype.initHTML = function (container, widgetFactory) {
        this.identifier = container.attr("id");
        this.container = container;
        this.container.append('<div class="tab_headers"></div><div class="tab_contents"></div>');
        var oldThis = this;
        container.children(".tab").each(function () {
            var identifier = $(this).attr("id");
            var contents = $(this).html();
            var newTab = new BlackTab(identifier, contents, $(this), oldThis.controller, widgetFactory, oldThis, oldThis.mode);
            oldThis.children[newTab.identifier] = newTab;
        });
    };
    BlackTabGroup.prototype.getTabHeaderContainer = function () {
        return this.container.children(".tab_headers");
    };
    BlackTabGroup.prototype.getTabContentContainer = function () {
        return this.container.children(".tab_contents");
    };
    return BlackTabGroup;
}(TabGroup));
//# sourceMappingURL=black_tab_group.js.map