/* 
    Navigation Menu data
    navigationTopLevelItems and navigationSecondLevelItems used in app.components.ts to build menu
    navigationItems used in content-detail.component.ts provided through data.service.ts
*/

import { NavigationItem } from '../models/navigation.model';

export const navigationTopLevelItems: NavigationItem[] = [
    {
        "id": 1,
        "dropdown": false,
        "name": "Introduction",
        "icon": "introduction",
        "link": "introduction",
        "parent": "null"
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Travel",
        "icon": "Travel",
        "link": "null",
        "parent": "null"
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Hotels",
        "icon": "Hotels",
        "link": "null",
        "parent": "null"
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Lifestyle",
        "icon": "Lifestyle",
        "link": "null",
        "parent": "null"
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Rewards",
        "icon": "Rewards",
        "link": "null",
        "parent": "null"
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Platinum Care",
        "icon": "platinum-care",
        "link": "null",
        "parent": "null"
    },
    {
        "id": 0,
        "dropdown": true,
        "name": "Your Account",
        "icon": "your-account",
        "link": "null",
        "parent": "null"
    } 
];

export const navigationSecondLevelItems: NavigationItem[] = [
    {
        "id": 2,
        "dropdown": false,
        "name": "Travel Voucher",
        "icon": "travel-voucher",
        "link": "travel-voucher",
        "parent": "Travel"
    },
    {
        "id": 3,
        "dropdown": false,
        "name": "Boingo",
        "icon": "boingo",
        "link": "boingo",
        "parent": "Travel"
    },
    {
        "id": 4,
        "dropdown": false,
        "name": "Lounge Access",
        "icon": "lounge-access",
        "link": "lounge-access",
        "parent": "Travel"
    },
    {
        "id": 5,
        "dropdown": false,
        "name": "International Airline Programme",
        "icon": "international-airline-programme",
        "link": "international-airline-programme",
        "parent": "Travel"
    },
    {
        "id": 6,
        "dropdown": false,
        "name": "Partner Programmes",
        "icon": "partner-programmes",
        "link": "partner-programmes",
        "parent": "Travel"
    },
    {
        "id": 7,
        "dropdown": false,
        "name": "Cruise Privileges Programme",
        "icon": "cruise-privileges-programme",
        "link": "cruise-privileges-programme",
        "parent": "Travel"
    },
    {
        "id": 8,
        "dropdown": false,
        "name": "Hotels",
        "icon": "hotels",
        "link": "hotels",
        "parent": "Hotels"
    },
    {
        "id": 9,
        "dropdown": false,
        "name": "Fine Hotels & Resorts",
        "icon": "fine-hotels-and-resorts",
        "link": "fine-hotels-and-resorts",
        "parent": "Hotels"
    },
    {
        "id": 10,
        "dropdown": false,
        "name": "The Hotel Collection",
        "icon": "the-hotel-collection",
        "link": "the-hotel-collection",
        "parent": "Hotels"
    },
    {
        "id": 11,
        "dropdown": false,
        "name": "The Vacation Collection",
        "icon": "the-vacation-collection",
        "link": "the-vacation-collection",
        "parent": "Hotels"
    },
    {
        "id": 12,
        "dropdown": false,
        "name": "Hotel Loyalty Programmes",
        "icon": "hotel-loyalty-programmes",
        "link": "hotel-loyalty-programmes",
        "parent": "Hotels"
    },
    {
        "id": 13,
        "dropdown": false,
        "name": "American Express Invites&reg;",
        "icon": "american-express-invites",
        "link": "american-express-invites",
        "parent": "Lifestyle"
    },
    {
        "id": 14,
        "dropdown": false,
        "name": "Membership Rewards&reg;",
        "icon": "membership-rewards",
        "link": "membership-rewards",
        "parent": "Rewards"
    },
    {
        "id": 15,
        "dropdown": false,
        "name": "Concierge",
        "icon": "concierge",
        "link": "concierge",
        "parent": "Platinum Care"
    },
    {
        "id": 16,
        "dropdown": false,
        "name": "Travel Insurance",
        "icon": "travel-insurance",
        "link": "travel-insurance",
        "parent": "Platinum Care"
    },
    {
        "id": 17,
        "dropdown": false,
        "name": "Car Rental Insurance",
        "icon": "car-rental-insurance",
        "link": "car-rental-insurance",
        "parent": "Platinum Care"
    },
    {
        "id": 18,
        "dropdown": false,
        "name": "Purchase Protection",
        "icon": "purchase-protection",
        "link": "purchase-protection",
        "parent": "Platinum Care"
    },
    {
        "id": 19,
        "dropdown": false,
        "name": "Managing your Account",
        "icon": "managing-your-account",
        "link": "managing-your-account",
        "parent": "Your Account"
    },
    {
        "id": 20,
        "dropdown": false,
        "name": "Your Contacts",
        "icon": "your-contacts",
        "link": "your-contacts",
        "parent": "Your Account"
    }
    ,
    {
        "id": 21,
        "dropdown": false,
        "name": "Online",
        "icon": "online",
        "link": "online",
        "parent": "Your Account"
    }
];

export const navigationItems: NavigationItem[] = navigationTopLevelItems.concat(navigationSecondLevelItems);