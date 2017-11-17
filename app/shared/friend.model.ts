export class friendModel{
  public id:number;
  public name:string;
  public city:string;
  public sex:string;
  public age:number;
  public photoPath:string;
  public userFriends:[{}];
  constructor (id:number,name:string,city:string,sex:string,age:number,photoPath:string,userFriends:[{}]){
    this.id = id;
    this.name = name;
    this.city = city;
    this.sex = sex;
    this.age = age;
    this.photoPath = photoPath;
    this.userFriends = userFriends;
  }
}
