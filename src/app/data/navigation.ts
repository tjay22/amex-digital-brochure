/* 
    Navigation Menu data
    navigationTopLevelItems and navigationSecondLevelItems used in app.components.ts to build menu
    navigationItems used in content.component.ts provided through data.service.ts

    id          => very important - other data files will be referencing this ID to build content
    dropdown    => does it have a dropdown menu? (true/false)
    name        => name to be shown in navigation
    link        => link to navigate to when clicked
    parent      => needed to build dropdown menu; set null for top level and match to parent name for second level
    state       => initial state of menu //default closed
    imageID     => image to be loaded from images.ts
    pageTitleID => pageTitle to be loaded from page-title.ts
*/

import { NavigationItem } from '../models/navigation.model';

export const navigationTopLevelItems: NavigationItem[] = [
    {
        "id": 1,
        "dropdown": false,
        "name": "Introduction",
        "icon": "fas fa-handshake",
        "link": "introduction",
        "parent": "null",
        "state": "closed",
        "imageID": 1,
        "pageTitleID": 1
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Travel",
        "icon": "fas fa-map",
        "link": "null",
        "parent": "null",
        "state": "closed",
        "imageID": 0,
        "pageTitleID": 0
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Hotels",
        "icon": "fas fa-h-square",
        "link": "null",
        "parent": "null",
        "state": "closed",
        "imageID": 0,
        "pageTitleID": 0
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Lifestyle",
        "icon": "fas fa-ticket-alt",
        "link": "null",
        "parent": "null",
        "state": "closed",
        "imageID": 0,
        "pageTitleID": 0
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Rewards",
        "icon": "fas fa-gift",
        "link": "null",
        "parent": "null",
        "state": "closed",
        "imageID": 0,
        "pageTitleID": 0
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Platinum Care",
        "icon": "fas fa-heartbeat",
        "link": "null",
        "parent": "null",
        "state": "closed",
        "imageID": 0,
        "pageTitleID": 0
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Your Account",
        "icon": "fas fa-user",
        "link": "null",
        "parent": "null",
        "state": "closed",
        "imageID": 0,
        "pageTitleID": 0
    } 
];

export const navigationSecondLevelItems: NavigationItem[] = [
    {
        "id": 2,
        "dropdown": false,
        "name": "Travel Voucher",
        "icon": "travel-voucher",
        "link": "travel-voucher",
        "parent": "Travel",
        "state": "closed",
        "imageID": 2,
        "pageTitleID": 2
    },
    {
        "id": 3,
        "dropdown": false,
        "name": "Boingo",
        "icon": "boingo",
        "link": "boingo",
        "parent": "Travel",
        "state": "closed",
        "imageID": 2,
        "pageTitleID": 2
    },
    {
        "id": 4,
        "dropdown": false,
        "name": "Lounge Access",
        "icon": "lounge-access",
        "link": "lounge-access",
        "parent": "Travel",
        "state": "closed",
        "imageID": 2,
        "pageTitleID": 2
    },
    {
        "id": 5,
        "dropdown": false,
        "name": "International Airline Programme",
        "icon": "international-airline-programme",
        "link": "international-airline-programme",
        "parent": "Travel",
        "state": "closed",
        "imageID": 2,
        "pageTitleID": 2
    },
    {
        "id": 6,
        "dropdown": false,
        "name": "Partner Programmes",
        "icon": "partner-programmes",
        "link": "partner-programmes",
        "parent": "Travel",
        "state": "closed",
        "imageID": 2,
        "pageTitleID": 2
    },
    {
        "id": 7,
        "dropdown": false,
        "name": "Cruise Privileges Programme",
        "icon": "cruise-privileges-programme",
        "link": "cruise-privileges-programme",
        "parent": "Travel",
        "state": "closed",
        "imageID": 2,
        "pageTitleID": 2
    },
    {
        "id": 8,
        "dropdown": false,
        "name": "Hotels",
        "icon": "hotels",
        "link": "hotels",
        "parent": "Hotels",
        "state": "closed",
        "imageID": 3,
        "pageTitleID": 8
    },
    {
        "id": 9,
        "dropdown": false,
        "name": "Fine Hotels & Resorts",
        "icon": "fine-hotels-and-resorts",
        "link": "fine-hotels-and-resorts",
        "parent": "Hotels",
        "state": "closed",
        "imageID": 3,
        "pageTitleID": 9
    },
    {
        "id": 10,
        "dropdown": false,
        "name": "The Hotel Collection",
        "icon": "the-hotel-collection",
        "link": "the-hotel-collection",
        "parent": "Hotels",
        "state": "closed",
        "imageID": 3,
        "pageTitleID": 10
    },
    {
        "id": 11,
        "dropdown": false,
        "name": "The Vacation Collection",
        "icon": "the-vacation-collection",
        "link": "the-vacation-collection",
        "parent": "Hotels",
        "state": "closed",
        "imageID": 3,
        "pageTitleID": 11
    },
    {
        "id": 12,
        "dropdown": false,
        "name": "Hotel Loyalty Programmes",
        "icon": "hotel-loyalty-programmes",
        "link": "hotel-loyalty-programmes",
        "parent": "Hotels",
        "state": "closed",
        "imageID": 3,
        "pageTitleID": 12
    },
    {
        "id": 13,
        "dropdown": false,
        "name": "American Express Invites&reg;",
        "icon": "american-express-invites",
        "link": "american-express-invites",
        "parent": "Lifestyle",
        "state": "closed",
        "imageID": 4,
        "pageTitleID": 13
    },
    {
        "id": 14,
        "dropdown": false,
        "name": "Membership Rewards&reg;",
        "icon": "membership-rewards",
        "link": "membership-rewards",
        "parent": "Rewards",
        "state": "closed",
        "imageID": 5,
        "pageTitleID": 14
    },
    {
        "id": 15,
        "dropdown": false,
        "name": "Concierge",
        "icon": "concierge",
        "link": "concierge",
        "parent": "Platinum Care",
        "state": "closed",
        "imageID": 6,
        "pageTitleID": 15
    },
    {
        "id": 16,
        "dropdown": false,
        "name": "Travel Insurance",
        "icon": "travel-insurance",
        "link": "travel-insurance",
        "parent": "Platinum Care",
        "state": "closed",
        "imageID": 6,
        "pageTitleID": 16
    },
    {
        "id": 17,
        "dropdown": false,
        "name": "Car Rental Insurance",
        "icon": "car-rental-insurance",
        "link": "car-rental-insurance",
        "parent": "Platinum Care",
        "state": "closed",
        "imageID": 6,
        "pageTitleID": 17
    },
    {
        "id": 18,
        "dropdown": false,
        "name": "Purchase Protection",
        "icon": "purchase-protection",
        "link": "purchase-protection",
        "parent": "Platinum Care",
        "state": "closed",
        "imageID": 6,
        "pageTitleID": 18
    },
    {
        "id": 19,
        "dropdown": false,
        "name": "Managing your Account",
        "icon": "managing-your-account",
        "link": "managing-your-account",
        "parent": "Your Account",
        "state": "closed",
        "imageID": 7,
        "pageTitleID": 19
    },
    {
        "id": 20,
        "dropdown": false,
        "name": "Your Contacts",
        "icon": "your-contacts",
        "link": "your-contacts",
        "parent": "Your Account",
        "state": "closed",
        "imageID": 7,
        "pageTitleID": 20
    }
    ,
    {
        "id": 21,
        "dropdown": false,
        "name": "Online",
        "icon": "online",
        "link": "online",
        "parent": "Your Account",
        "state": "closed",
        "imageID": 7,
        "pageTitleID": 21
    }
];

export const navigationItems: NavigationItem[] = navigationTopLevelItems.concat(navigationSecondLevelItems);