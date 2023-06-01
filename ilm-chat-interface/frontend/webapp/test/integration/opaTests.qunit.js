/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/sap/ui5project/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
