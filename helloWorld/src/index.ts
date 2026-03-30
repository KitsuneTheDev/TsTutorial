let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished: boolean = true;
let level; // any type

level = 1;
level = 'A1';

function render(document: any) {
    console.log(document); // document can be any type
}