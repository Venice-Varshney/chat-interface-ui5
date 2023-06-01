{
    Chat: [
        {
            botReply: true,
            reply: {
                "delay": "0",
                "markdown": false,
                "type": "text",
                "content": "Hi, How can I help you today?" }
        },
        {
            botReply: false,
            reply: {
                "delay": "0",
                "markdown": false,
                "type": "text",
                "content": "tell me about Best Practices" }
        },
        {
            botReply: true,
            reply: {
                "delay": "0",
                "markdown": true,
                "type": "text",
                "content": "No, systems provisioned does not include Best Practice (BP) activation. You are recommended to follow the below-mentioned pre-requisites: - Business Function (BF) questionnaire completeness by the customer prior to the system provisioning. If the requirement is incomplete during the system build, then recreation of the business client is required to complete this activity. Customer updates these questionnaires with support of the SAP pre-sales. - BP questionnaire completeness from customer. Note: A service request to be raised from customer by attaching the filled BP questionnaire to complete the Best Practice activation."
            }
        },
        {
            botReply: true,
            reply: {
                "delay": "0",
                "markdown": true,
                "type": "list",
                "content": {
                    "title": "Test Title",
                    "subtitle": "subtile",
                    "imageUrl": "",
                    "total": "2",
                    "upperBoundText": "",
                    "buttons": [
                      {
                        "title": "<BUTTON_TITLE>",
                        "value": "<BUTTON_VALUE>",
                        "type": "postback"
                      }
                    ],
                    "elements": [
                      {
                        "title": "Test1",
                        "subtitle": "Test1",
                        "imageUrl": "",
                        "status": "",
                        "statusState": "",
                        "description": "Test1",
                        "buttons": [
                          {
                            "title": "Test1",
                            "value": "<BUTTON_VALUE>",
                            "type": "postback"
                          }
                        ]
                      },
                      {
                        "title": "Test2",
                        "subtitle": "Test2",
                        "imageUrl": "",
                        "status": "",
                        "statusState": "",
                        "description": "Test2",
                        "buttons": [
                          {
                            "title": "Test2",
                            "value": "<BUTTON_VALUE>",
                            "type": "postback"
                          }
                        ]
                      },
                    ]
                  }
            }
        },
        {
            botReply: true,
            reply: {
                "delay": "0",
                "markdown": false,
                "type": "buttons",
                "content": {
                    "buttons":[
                        {
                            "title":"Service Request",
                            "type":"postback",
                            "value":{"input":"","entities":{},"type":"intent","title":"","intent":"pc3-service-requests"}
                        },
                        {
                            "title":"Incident",
                            "type":"postback",
                            "value":{"input":"","entities":{},"type":"intent","title":"","intent":"pc3-incident"}
                        },
                        {
                            "title":"FAQ",
                            "type":"postback",
                            "value":{"input":"","entities":{},"type":"intent","title":"","intent":"pc3-faq"}
                        }
                        ],
                        "title":"I can help you with your questions about SAP S/4HANA Cloud, private edition, delivered by SAP Enterprise Cloud Services. You can ask me a question or choose help below."
                    }
                }
        },
        {
            botReply: true,
            reply: {
                "delay": "0",
                "markdown": true,
                "type": "quickReplies",
                "content": {
                    "buttons":[
                        {
                            "title":"Service Request",
                            "type":"postback",
                            "value":{"input":"","entities":{},"type":"intent","title":"","intent":"pc3-service-requests"}
                        },
                        {
                            "title":"Incident",
                            "type":"postback",
                            "value":{"input":"","entities":{},"type":"intent","title":"","intent":"pc3-incident"}
                        },
                        {
                            "title":"FAQ",
                            "type":"postback",
                            "value":{"input":"","entities":{},"type":"intent","title":"","intent":"pc3-faq"}
                        }
                        ],
                        "title":"I can help you with your questions about SAP S/4HANA Cloud, private edition, delivered by SAP Enterprise Cloud Services. You can ask me a question or choose help below."
                    }
                }
        },
        {
            botReply: true,
            reply: {
                "type": "picture",
                "delay": "0",
                "content": "https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg"
              }
        }
    ]
}