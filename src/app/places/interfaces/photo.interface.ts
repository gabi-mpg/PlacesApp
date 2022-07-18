export interface Photo {
    id:               string;
    created_at:       Date;
    prefix:           string;
    suffix:           string;
    width:            number;
    height:           number;
    classifications?: string[];
}