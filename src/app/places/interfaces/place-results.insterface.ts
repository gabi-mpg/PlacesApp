export interface Results {
    results: Place[];
    context: Context;
}

export interface Context {
    geo_bounds: GeoBounds;
}

export interface GeoBounds {
    circle: Circle;
}

export interface Circle {
    center: Center;
    radius: number;
}

export interface Center {
    latitude:  number;
    longitude: number;
}

export interface Place {
    fsq_id:         string;
    categories:     Category[];
    chains:         any[];
    distance:       number;
    geocodes:       Geocodes;
    link:           string;
    location:       Location;
    name:           string;
    related_places: RelatedPlaces;
    timezone?:      string;
}

export interface Category {
    id:   number;
    name: string;
    icon: Icon;
}

export interface Icon {
    prefix: string;
    suffix: Suffix;
}

export enum Suffix {
    PNG = ".png",
}

export interface Geocodes {
    main:  Center;
    roof?: Center;
}

export interface Location {
    address?:           string;
    address_extended?: string;
    census_block?:      string;
    admin_region?:      string;
    country:           string;
    cross_street?:     string;
    dma?:               string;
    formatted_address: string;
    locality:          string;
    postcode:          string;
    region:            string;
    neighborhood?:     string[];
}


export interface RelatedPlaces {
    parent?: Parent;
}

export interface Parent {
    fsq_id: string;
    name:   string;
}
