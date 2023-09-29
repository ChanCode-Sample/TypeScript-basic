type moji = string;
type book1 = {
    title: string;
    price: number;
};
interface book2 {
    title: string;
    price: number;
}
type fn1 = (x: number, y: number) => string;
type fn2 = () => void;
type score1 = number[];
type score2 = Array<number>;
interface opt {
    title: string;
    price?: number;
}
interface idx {
    [key: string]: string;
}
declare const sample: opt;
declare const sample2: book1 | null;
