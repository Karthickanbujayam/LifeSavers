/**
 * Created by equuvwl on 10/8/2015.
 */

define([], function() {
    return {
        data: {
            "id": null,
            "accountName": "Here is an account with super long name hardcoded by me and probably you don't know who am I and it is ABSOLUTELY doesn't m",
            "accountType": null,
            "accountStatus": null,
            "description": null,
            "pin": null,
            "deposit": null,
            "primary": null,
            "active": null,
            "archive": null,
            "validFor": {
                "startDateTime": "2013-04-19T16:42:23.0Z",
                "endDateTime": "2013-06-19T00:00:00.0Z"
            },
            "parentAccountId": null,
            "billingMedium": {
                "id": null,
                "ownerId": null,
                "type": null,
                "value": null,
                "validFor": {
                    "startDateTime": "2013-04-19T16:42:23.0Z",
                    "endDateTime": "2013-06-19T00:00:00.0Z"
                },
                "contactName": null,
                "primary": null
            },
            "customer": null,
            "contact": {
                "id": null,
                "href": null,
                "contact": {}
            },
            "accountRelationship": [{
                "relationshipType": "ChildOf",
                "validFor": {
                    "startDateTime": "2013-04-19T16:42:23.0Z",
                    "endDateTime": "2013-06-19T00:00:00.0Z"
                },
                "customerAccount": [{
                    "id": "1",
                    "href": "http://serverlocation:port/customerManagement/customerAccount/1",
                    "account": {}
                }]
            }, {
                "relationshipType": "ParentOf",
                "validFor": {
                    "startDateTime": "2013-04-19T16:42:23.0Z",
                    "endDateTime": "2013-06-19T00:00:00.0Z"
                },
                "customerAccount": [{
                    "id": "12",
                    "href": "http://serverlocation:port/customerManagement/customerAccount/12",
                    "account": {}
                }]
            }],
            "paymentPlan": {
                "billingCycle": null,
                "billingTerms": null,
                "billingCurrency": null,
                "invoiceLanguage": null,
                "invoiceOption": null,
                "numberOfPayments": null,
                "amount": null,
                "validFor": {
                    "startDateTime": "2013-04-19T16:42:23.0Z",
                    "endDateTime": "2013-06-19T00:00:00.0Z"
                },
                "paymentMean": {
                    "id": null,
                    "paymentMean": {}
                }
            },
            "externalIdentifier": [{
                "id": null,
                "externalSystem": null,
                "primary": null,
                "ownerType": null
            }],
            "communications": [{
                "type": null,
                "optOut": null,
                "contactMedium": {
                    "id": null,
                    "href": null,
                    "contactMedium": {}
                }
            }]
        }
        }
});

