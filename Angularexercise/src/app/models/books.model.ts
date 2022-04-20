export class books
{
    id:number;
    name:string;
    author:string;
    pages:number;
    availability:number;


    constructor(id:number,name:string,author:string,pages:number,availability:number)
{
    this.id=id;
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.availability=availability;
}
}
