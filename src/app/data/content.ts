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
        "title": "Introduction"
    },
    {
        "id": 2,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Travel Voucher"
    },
    {
        "id": 3,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Boingo"
    },
    {
        "id": 4,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Lounge Access"
    },
    {
        "id": 5,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "International Airline Programme"
    },
    {
        "id": 6,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Partner Programmes"
    },
    {
        "id": 7,
        "htmlfile": pagespath+"test.html",
        "parent": "Travel",
        "title": "Cruise Privileges Programme"
    },
    {
        "id": 8,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "Hotels"
    },
    {
        "id": 9,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "Fine Hotels &amp; Resorts"
    },
    {
        "id": 10,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "The Hotel Collection"
    },
    {
        "id": 11,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "The Vacation Collection"
    },
    {
        "id": 12,
        "htmlfile": pagespath+"test.html",
        "parent": "Hotels",
        "title": "Hotel Loyalty Programmes"
    },
    {
        "id": 13,
        "htmlfile": pagespath+"test.html",
        "parent": "Lifestyle",
        "title": "American Express Invites&reg;"
    },
    {
        "id": 14,
        "htmlfile": pagespath+"test.html",
        "parent": "Rewards",
        "title": "Membership Rewards&reg;"
    },
    {
        "id": 15,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Concierge"
    },
    {
        "id": 16,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Travel Insurance"
    },
    {
        "id": 17,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Car Rental Insurance"
    },
    {
        "id": 18,
        "htmlfile": pagespath+"test.html",
        "parent": "Platinum Care",
        "title": "Purchase Protection"
    },
    {
        "id": 19,
        "htmlfile": pagespath+"test.html",
        "parent": "Your Account",
        "title": "Managing your Account"
    },
    {
        "id": 20,
        "htmlfile": pagespath+"test.html",
        "parent": "Your Account",
        "title": "Your contacts"
    },
    {
        "id": 21,
        "htmlfile": pagespath+"test.html",
        "parent": "Your Account",
        "title": "Online"
    } 
];