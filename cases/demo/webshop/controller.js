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
$(document).ready(function () {
    new WebShopController();
});
var WebShopController = /** @class */ (function (_super) {
    __extends(WebShopController, _super);
    function WebShopController() {
        return _super.call(this, $("#webshop")) || this;
    }
    WebShopController.prototype.initState = function (applicationState) {
        var newWindowState = applicationState.getMainWindowState();
        applicationState.setModel(WebShopController.DISCOUNT_ACTIVE, false);
        applicationState.setModel(WebShopController.PRODUCT_PRICE, 549.90);
        applicationState.setModel(WebShopController.VALID_COUPON, "FREESHIPPING");
        newWindowState.getWidgetState("checkout_flow").selectTab("tab_cart");
        newWindowState.getWidgetState("billing_home").selected = true;
        newWindowState.getWidgetState("shipping_home").selected = true;
        newWindowState.getWidgetState("shipping_standard").selected = true;
        newWindowState.getWidgetState("payment_credit").selected = true;
        newWindowState.getWidgetState("coupon").value = applicationState.getModel(WebShopController.VALID_COUPON);
        this.updateDependencies(applicationState);
    };
    WebShopController.prototype.proceedAddressClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_address");
    };
    WebShopController.prototype.proceedShippingClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_shipping");
    };
    WebShopController.prototype.proceedPaymentClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_payment");
    };
    WebShopController.prototype.proceedOverviewClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_overview");
    };
    WebShopController.prototype.previousCartClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_cart");
    };
    WebShopController.prototype.previousAddressClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_address");
    };
    WebShopController.prototype.previousShippingClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_shipping");
    };
    WebShopController.prototype.previousPaymentClick = function (event, newApplicationState) {
        newApplicationState.getMainWindowState().getWidgetState("checkout_flow").selectTab("tab_payment");
    };
    WebShopController.prototype.couponValueChange = function (event, newApplicationState) {
        var validCoupon = newApplicationState.getMainWindowState().getWidgetState("coupon").value === newApplicationState.getModel(WebShopController.VALID_COUPON);
        newApplicationState.addModel(WebShopController.VALID_COUPON, validCoupon);
        newApplicationState.getMainWindowState().getWidgetState("apply_coupon").enabled = validCoupon;
    };
    WebShopController.prototype.billingHomeSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.billingWorkSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.shippingHomeSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.shippingWorkSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.shippingExpressSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.shippingStandardSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.paymentCreditSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.paymentOnlineSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.paymentBankSelect = function (event, newApplicationState) {
        this.updateDependencies(newApplicationState);
    };
    WebShopController.prototype.applyCouponClick = function (event, newApplicationState) {
        var newWindowState = newApplicationState.getMainWindowState();
        if (newWindowState.getWidgetState("coupon").value === newApplicationState.getModel(WebShopController.VALID_COUPON)) {
            newWindowState.getWidgetState("shipping_standard").selected = true;
            newWindowState.getWidgetState("shipping_express").selected = false;
            newApplicationState.addModel(WebShopController.DISCOUNT_ACTIVE, true);
            this.updateDependencies(newApplicationState);
        }
    };
    WebShopController.prototype.previewApplyCouponClick = function (event, newApplicationState) {
        var newWindowState = newApplicationState.getMainWindowState();
        if (newWindowState.getWidgetState("coupon").value === newApplicationState.getModel(WebShopController.VALID_COUPON)) {
            newWindowState.getWidgetState("shipping_standard").selected = true;
            newWindowState.getWidgetState("shipping_express").selected = false;
            newApplicationState.addModel(WebShopController.DISCOUNT_ACTIVE, true);
            this.updateDependencies(newApplicationState);
        }
    };
    WebShopController.prototype.updateDependencies = function (applicationState) {
        var newWindowState = applicationState.getMainWindowState();
        var estimatedDate = 0.0;
        var shippingCosts = 0.0;
        var paymentCosts = 0.0;
        var grandTotal = 0.0;
        var hawaii = newWindowState.getWidgetState("shipping_work").selected;
        var express = newWindowState.getWidgetState("shipping_express").selected;
        var bank = newWindowState.getWidgetState("payment_bank").selected;
        var credit = newWindowState.getWidgetState("payment_credit").selected;
        var online = newWindowState.getWidgetState("payment_online").selected;
        if (hawaii) {
            estimatedDate = express ? 5 : 14;
        }
        else {
            estimatedDate = express ? 3 : 10;
        }
        if (bank) {
            estimatedDate += 3;
        }
        if (applicationState.getModel(WebShopController.DISCOUNT_ACTIVE)) {
            shippingCosts = express ? 30 : 0;
        }
        else {
            shippingCosts = express ? 30 : 15;
        }
        if (bank) {
            paymentCosts = 5.00;
        }
        else if (credit) {
            paymentCosts = parseFloat(applicationState.getModel(WebShopController.PRODUCT_PRICE)) * 0.05;
        }
        else if (online) {
            paymentCosts = parseFloat(applicationState.getModel(WebShopController.PRODUCT_PRICE)) * 0.02;
        }
        grandTotal = parseFloat(applicationState.getModel(WebShopController.PRODUCT_PRICE)) + paymentCosts + shippingCosts;
        newWindowState.getWidgetState("delivery_date").value = estimatedDate + "";
        newWindowState.getWidgetState("shipping_costs").value = shippingCosts.toFixed(2);
        newWindowState.getWidgetState("transaction_fee").value = paymentCosts.toFixed(2);
        newWindowState.getWidgetState("total_price").value = grandTotal.toFixed(2);
    };
    WebShopController.DISCOUNT_ACTIVE = "discount_active";
    WebShopController.PRODUCT_PRICE = "product_price";
    WebShopController.VALID_COUPON = "valid_coupon";
    return WebShopController;
}(Controller));
//# sourceMappingURL=controller.js.map