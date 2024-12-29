export interface RootObject {
    data: Datum[];
    status: string;
}
interface Datum {
    title: string;
    url: string;
    thumb: string;
}