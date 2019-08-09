export interface IPost {
  id: number;
  userid: number;
  title: string;
  body: string;
}

export class Post implements IPost {
  public userid: number;
  public id: number;
  public title: string;
  public body: string;


  constructor(data: IPost) {
    this.fromData(data);
  }

  public fromData(data: IPost) {
    this.id = data.id || null;
    this.userid = data.userid || null;
    this.title = data.title || '';
    this.body = data.body || '';
  }

  // public toString(): string {
  //   return `#${this.id} - ${this.productName} - ${this.price}`
  // }
}
