sap.ui.define([],
    function () {
      'use strict';
      let constants = {
        messageStates: {
          ERROR: "error",
          SUCCESS: "success",
          INFO: "information"
        },
        responseTypeKeys: {
          TEXT: "text",
          IMAGE: "picture",
          BUTTONS: "buttons",
          QUICKREPLY: "quickReplies",
          LIST: "list",
          PREVFEATURE: "previousAction",
          NEXTFEATURE: "nextAction",
          TITLE: "Title",
          SUBTITLE: "Sub Title",
          DESCRIPTION: "Description"
        }
      };
      return constants;
    });