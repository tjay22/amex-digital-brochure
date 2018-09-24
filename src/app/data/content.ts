/* 
    Content data
    id          => should match ID in navigation.ts
    htmlfile    => HTML file to load from ./assets/pages
    parent      => to be used for breadcrumb
    title       => to be used for breadcrumb
*/

import { ContentItem } from '../models/content.model';

const pagespath = "./assets/pages/";

export const contentItems: ContentItem[] = [
    {
        "id": 1,
        "htmlfile": pagespath+"introduction.html",
        "parent": "null",
        "title": "Introduction",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 2,
        "htmlfile": pagespath+"travel-voucher.html",
        "parent": "Travel",
        "title": "Travel Voucher",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "Boingo",
        "nextLink": "/boingo"
    },
    {
        "id": 3,
        "htmlfile": pagespath+"boingo.html",
        "parent": "Travel",
        "title": "Boingo",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "Lounge Access",
        "nextLink": "/lounge-access"
    },
    {
        "id": 4,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Lounge Access",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 5,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "International Airline Programme",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 6,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Partner Programmes",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 7,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Cruise Privileges Programme",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 8,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "Hotels",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 9,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "Fine Hotels &amp; Resorts",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 10,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "The Hotel Collection",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 11,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "The Vacation Collection",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 12,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "Hotel Loyalty Programmes",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 13,
        "htmlfile": pagespath+"test.html",
        "parent": "Lifestyle",
        "title": "American Express Invites&reg;",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 14,
        "htmlfile": pagespath+"test.html",
        "parent": "Rewards",
        "title": "Membership Rewards&reg;",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 15,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Concierge",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 16,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Travel Insurance",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 17,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Car Rental Insurance",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 18,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Purchase Protection",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 19,
        "htmlfile": pagespath+"test.html",
        "parent": "Your Account",
        "title": "Managing your Account",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 20,
        "htmlfile": pagespath+"test.html",
        "parent": "Your Account",
        "title": "Your contacts",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    },
    {
        "id": 21,
        "htmlfile": pagespath+"test.html",
        "parent": "Your Account",
        "title": "Online",
        "previousTitle": "",
        "previousLink": "",
        "nextTitle": "",
        "nextLink": ""
    } 
];