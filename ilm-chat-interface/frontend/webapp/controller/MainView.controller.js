sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/sap/ui5project/util/Constants",
    "com/sap/ui5project/model/formatter",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constant, Formatter) {
        "use strict";

        let that, oView, Chat = { Response: [] };

        return Controller.extend("com.sap.ui5project.controller.MainView", {
            formatter: Formatter,
            onInit: function () {
                that = this;
                oView = this.getView();

                let file = {
                    Chat: [
                        {
                            botReply: true,
                            reply: {
                                "delay": "0",
                                "markdown": false,
                                "type": "text",
                                "content": "Hi, How can I help you today?"
                            }
                        }
                    ]
                };

                this.initialChat(file.Chat);
                let oModel = new JSONModel(Chat);
                this.getView().setModel(oModel, "chat");

            },

            initialChat: function (chat) {
                let seq = 0;
                chat.forEach(element => {
                    seq = seq + 1;
                    if (element.botReply) {
                        this.formBotReply(element.reply, seq);
                    } else {
                        this.formUserQuery(element.reply, seq);
                    }
                });
            },

            onUserInput: function (oEvent) {

                let botReply = {
                    "delay": "0",
                    "markdown": false,
                    "type": "text",
                    "content": oEvent.getSource().getValue()
                }

                that.formUserQuery(botReply, Chat.length + 1);
                that.getView().getModel("chat").refresh();
                oEvent.getSource().resetProperty("value");

                //post call
                that.onFetchReply(botReply.content);
            },

            onFetchReply: function (query) {
                let data = JSON.stringify({
                    "text": `<at>Test</at>${query}`,
                    "conversation": {
                        "id": "1234"
                    },
                    "source": "Recast",
                    "nlp": {
                        "language": "en"
                    }
                });


                let url = `/api/msteams`;
                $.ajax({
                    url: url,
                    async: false,
                    type: "POST",
                    data: data,
                    dataType: "json",
                    contentType: 'application/json; charset=UTF-8',
                    success: function (data, textStatus, jqXHR) {
                        data.replies.forEach(element => {
                            that.formBotReply(element, Chat.length + 1);
                        });
                        that.getView().getModel("chat").refresh();
                    },
                    error: function (oError, status, xhr) {
                        let errReply = {
                            content: "Error Fetching Response",
                            type: "text"
                        }
                        that.formBotReply(errReply, Chat.length + 1);
                        that.getView().getModel("chat").refresh();
                    }
                });

            },

            formUserQuery: function (reply, seq) {
                Chat.Response.push({
                    botReply: false,
                    reply: reply,
                    seq: seq
                });
            },

            //Generate the Json Model for the Chat Preview Display of Messages
            formBotReply: function (obj, seq) {
                let data = {
                    text: { data: "", visible: false },
                    buttons: { data: "", visible: false },
                    quickReplies: { data: "", visible: false },
                    list: { data: "", visible: false },
                    picture: { data: "", visible: false },
                };

                switch (obj.type) {
                    case Constant.responseTypeKeys.TEXT:
                        if (obj.markdown) {
                            obj.content = this.formatTextForMarkdown(obj.content);
                        }
                        data.text.data = obj;
                        data.text.visible = true;
                        break;
                    case Constant.responseTypeKeys.BUTTONS:
                        data.buttons.data = obj;
                        data.buttons.visible = true;
                        break;
                    case Constant.responseTypeKeys.QUICKREPLY:
                        data.quickReplies.data = obj;
                        data.quickReplies.visible = true;
                        break;
                    case Constant.responseTypeKeys.LIST:
                        data.list.data = obj;
                        data.list.visible = true;
                        break;
                    case Constant.responseTypeKeys.IMAGE:
                        data.picture.data = obj;
                        data.picture.visible = true;
                        break;
                    default:
                        break;
                }

                Chat.Response.push({
                    botReply: true,
                    reply: data,
                    seq: seq
                });
            },

            formatTextForMarkdown: function (text) {
                let unformattedText = text.toString();
                //getting list items
                let arr = unformattedText.split("- ");
                if (arr.length > 1) {
                    unformattedText = arr[0];
                    arr.splice(0, 1);
                    let listItems;
                    arr.forEach(element => {
                        if (listItems) {
                            listItems = `${listItems}<li>${element}</li>`;
                        } else {
                            listItems = `<li>${element}</li>`;
                        };
                    });
                    unformattedText = `${unformattedText}<ul>${listItems}</ul>`;
                };

                //getting links
                let findLinkText = unformattedText.match(/[^\[\]]+(?=\])/g);
                unformattedText = unformattedText.replace(/[^\[\]]+(?=\])/g, "dummy_url");
                if (findLinkText) {
                    let findLink = unformattedText.match(/[^\(\]]+(?=\))/g), old, now;
                    for (var i = 0; i < findLinkText.length; i++) {
                        old = `[dummy_url](${findLink[i]})`;
                        now = `<a href=\"${findLink[i]}\">${findLinkText[i]}</a>`;
                        unformattedText = unformattedText.replace(old, now);
                    };
                };
                unformattedText = `<p>${unformattedText}</p>`;
                return unformattedText;
            },

            onButtonPress: function (oEvent) {
                //show selection

                let botReply = {
                    "delay": "0",
                    "markdown": false,
                    "type": "text",
                    "content": oEvent.getSource().getProperty("text")
                }

                that.formUserQuery(botReply, Chat.length + 1);
                that.getView().getModel("chat").refresh();
            }

        });
    });
