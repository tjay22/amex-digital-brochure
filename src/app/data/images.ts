/* 
    Right Panel Image data
    id                  => should match ID in navigation.ts
    imagefile           => image to load in image panel
    background          => will be coded as div with background style (true) or div with <img> (false)
    bgPosX              => position of image on x axis relative to parent // default = -30%
    bgPosY              => position of image on y axis relative to parent // defualt = 0%
    collapsedBgPosX     => background X position in collapsed state
*/

import { ImageItem } from '../models/image.model';

const imagespath = "./assets/images/";

export const imageItems: ImageItem[] = [
    {
        "id": 1,
        "imagefile": imagespath+"introduction.jpg",
        "background": true,
        "bgPosX": "70%",
        "bgPosY": "0%",
        "collapsedBgPosX": "80%",
        "mobileBgPosX": "80%"
    },
    {
        "id": 2,
        "imagefile": imagespath+"travel.jpg",
        "background": true,
        "bgPosX": "10%",
        "bgPosY": "center",
        "collapsedBgPosX": "28%",
        "mobileBgPosX": "28%"
    }
];