import { friendModel } from './friend.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  userArray = [
    {
      id: 0,
      name: "Łukasz Strachanowski",
      city: "Tarnowskie Góry",
      sex: "m",
      age: 31,
      photoPath: "/assets/on.png",
      userFriends: [
        { friendID: 1 },
        { friendID: 2 },
        { friendID: 3 }
      ]
    },
    {
      id: 1,
      name: "Tomasz Kot",
      city: "Gliwice",
      sex: "m",
      age: 25,
      photoPath: "/assets/on.png",
      userFriends: [
        { friendID: 0 },
        { friendID: 3 },
        { friendID: 4 }
      ]
    },
    {
      id: 2,
      name: "Zuza Oleksy",
      city: "Warszaway",
      sex: "f",
      age: 15,
      photoPath: "/assets/ona.png",
      userFriends: [
        { friendID: 1 }
      ]
    },
    {
      id: 3,
      name: "Eliza Kuś",
      city: "Gdynia",
      sex: "f",
      age: 45,
      photoPath: "/assets/ona.png",
      userFriends: [
        { friendID: 1 },
        { friendID: 2 }
      ]
    },
    {
      id: 4,
      name: "Beata Czerwona",
      city: "Szczecin",
      sex: "f",
      age: 20,
      photoPath: "/assets/ona.png",
      userFriends: [
        { friendID: 0 },
        {friendID: 7},
        {friendID: 6}
      ]
    },
    {
      id: 5,
      name: "Tom Kox",
      city: "London",
      sex: "m",
      age: 25,
      photoPath: "/assets/on.png",
      userFriends: [
        { friendID: 0 },
        {friendID: 6},
        {friendID: 8}
      ]
    },
    {
      id: 6,
      name: "Alan Andersen",
      city: "Esbjerg",
      sex: "f",
      age: 37,
      photoPath: "/assets/on.png",
      userFriends: [
        { friendID: 3 },
        { friendID: 5},
        { friendID: 7},
        { friendID: 1},
        { friendID: 8}
      ]
    },
    {
      id: 8,
      name: "Maja Kruk",
      city: "Bytom",
      sex: "f",
      age: 17,
      photoPath: "/assets/ona.png",
      userFriends: [
        { friendID: 0 },
        { friendID: 2 },
        { friendID: 3 },
        { friendID: 6 }
      ]
    },
    {
      id: 8,
      name: "Katarzyna Kat",
      city: "Warszawa",
      sex: "f",
      age: 20,
      photoPath: "/assets/ona.png",
      userFriends: [
        { friendID: 0 },
        { friendID: 5 }
      ]
    }

  ];

  fetchUser(id:number){
    let serviceArray = this.userArray.slice();
    let selectedUser = serviceArray.splice(id,1);
    return selectedUser;
  }

}
