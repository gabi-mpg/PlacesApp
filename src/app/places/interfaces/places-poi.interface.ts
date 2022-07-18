export interface ResultsPOI {
    results: POI;
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

export interface POI {
    fsq_id:         string;
    categories:     Category[];
    chains:         any[];
    geocodes:       Geocodes;
    link:           string;
    location:       Location;
    name:           string;
    related_places: RelatedPlaces;
    timezone:       string;
}

export interface Category {
    id:   number;
    name: string;
    icon: Icon;
}

export interface Icon {
    prefix: string;
    suffix: string;
}

export interface Geocodes {
    main:  Center;
    roof?: Center;
}

export interface Location {
    address:           string;
    census_block?:     string;
    country:           string;
    cross_street:      string;
    dma?:              string;
    formatted_address: string;
    locality:          string;
    neighborhood?:     string[];
    postcode:          string;
    region:            string;
    admin_region?:     string;
}

export interface RelatedPlaces {
}
