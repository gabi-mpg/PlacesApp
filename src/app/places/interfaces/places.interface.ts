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
    main: Main;
}

export interface Main {
    latitude:  number;
    longitude: number;
}

export interface Location {
    address:           string;
    admin_region:      string;
    country:           string;
    cross_street:      string;
    formatted_address: string;
    locality:          string;
    postcode:          string;
    region:            string;
}

export interface RelatedPlaces {
    parent: Parent;
}

export interface Parent {
    fsq_id: string;
    name:   string;
}