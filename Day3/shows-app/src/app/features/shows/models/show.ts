export interface Image {
    medium: string;
    original: string;
}

export interface Show {
    id: number;
    url: string;
    name: string;
    language: string;
    runtime: number;
    officialSite: string;
    image: Image;
    summary: string;
}
