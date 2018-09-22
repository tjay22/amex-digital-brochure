/* 
    Right Panel Pafe Title data
    id                  => should match ID of data in navigation.ts and content.ts
    headline            => headline to show in image panel
    hlPosX              => position of headline on x axis relative to container (set on margin) // default = 3vw
    hlPosY              => position of headline on y axis relative to container // default = 50vh
    hlColor             => color of headline // default = #ffffff
    hlFontSize          => font size of headline (you can use any css unit / px, em, rem) // default = 2.5rem
    hlWidth             => width of headline container relative to parent // default = 30vw
    collapsedHLPosX     => headline X position in collapsed state
    collapsedHLPosY     => headline Y position in collapsed state
    collapsedHLColor    => headline color in collapsed state // default #ffffff
    collapsedHlFontSize => headline font size in collapsed state // default 1.5rem
*/

import { PageTitle } from '../models/page-title.model';

export const pageTitleItems: PageTitle[] = [
    {
        "id": 1,
        "headline": "Welcome to the Platinum World",
        "hlPosX": "",
        "hlPosY": "60vh",
        "hlColor": "#002337",
        "hlFontSize": "",
        "hlWidth": "",
        "collapsedHLPosX": "",
        "collapsedHLPosY": "70vh",
        "collapsedHLColor": "",
        "collapsedHLFontSize": "",
        "collapsedHLWidth": ""
    },
    {
        "id": 2,
        "headline": "Travel Voucher",
        "hlPosX": "",
        "hlPosY": "70vh",
        "hlColor": "",
        "hlFontSize": "",
        "hlWidth": "",
        "collapsedHLPosX": "",
        "collapsedHLPosY": "80vh",
        "collapsedHLColor": "",
        "collapsedHLFontSize": "",
        "collapsedHLWidth": ""
    }
];