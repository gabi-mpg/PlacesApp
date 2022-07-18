import { MatOptionSelectionChange } from "@angular/material/core";

export interface Marker {
    position: Position;
    label?: Label;
    title: string;
    clickable?: boolean;
    cursor?: string;
    options: Options;
}

export interface Position {
    lat: number;
    lng: number;
}

export interface Label {
    color: string,
    text: string;
}

export interface Options {
    animation?: number;
}