import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService{

  commentsArr = [
        {
          userId:0,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Drogi Marszałku, Wysoka Izbo. PKB rośnie. Z drugiej strony, zakres i określenia systemu wymaga sprecyzowania i realizacji odpowiednich warunków aktywizacji. Nie muszę państwa przekonywać, że wzmocnienie i rozwijanie struktur ukazuje nam efekt dalszych kierunków postępowego wychowania.",
                postDate:"21/11/2016, 08:00:00 AM",
                userComments:[
                  {content:"Ale ta wiara w tym ciemne miejsca w boru chodziła etc, a on niejest predykatem innej rzeczy. Ale żądze każą się ustanie. Kiedy Dobro talenta i cnotliwość bywa połączone z...",
                  postDate:"21/11/2016, 08:00:00 AM"},
                  {
                    content:" Pobudka do doskonałości służącej za skład, więc dostarcza sama możliwość bycia takiej Istnością żeby religia nastąpić.",
                    postDate:"21/11/2016, 08:00:00 AM"
                  }
                ]
              },
              {
                postId:1,
                content:"Proszę państwa, zmiana przestarzałego systemu obsługi pomaga w restrukturyzacji przedsiębiorstwa. Koleżanki i rozwijanie struktur powoduje docenianie wag istniejących kryteriów wymaga sprecyzowania i realizacji form oddziaływania.",
                postDate:"17/10/2016, 09:54:00 AM",
                userComments:[
                  {content:"Pewny Dyogenes, wynałazca jego rzeczywistość, nazywa się było godności, więc musi być święta, dobrotliwa i zwierzchności są właśnie domyślamy się dla tego.",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              }
            ]
          }
        },
        {
          userId:1,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:" Z pełną odpowiedzialnością mogę stwierdzić iż zmiana przestarzałego systemu szkolenia kadr koliduje z tym, że aktualna struktura organizacji powoduje docenianie wag modelu rozwoju. ",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[]
              },
              {
                postId:1,
                content:" PKB rośnie Nikt inny was nie zapewni iż dokończenie aktualnych projektów wymaga sprecyzowania i realizacji kolejnych kroków w tym zakresie jest ważne z dotychczasowymi zasadami obecnej sytuacji",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[
                  {content:"Cras nonummy enim eget leo velit pede sed felis. Maecenas quis justo. Donec condimentum, pulvinar vulputate augue, dictum ut, urna. Sed aliquet eget, suscipit in, commodo congue",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              }
            ]
          }
        },
        {
          userId:2,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Podobnie, zawiązanie koalicji wymaga sprecyzowania i rozwijanie struktur wymaga sprecyzowania i unowocześniania nowych propozycji. Gdy za 4 lata. Reasumując. rozpoczęcie powszechnej akcji kształtowania podstaw powoduje docenianie wag systemu obsługi wymaga niezwykłej precyzji w kształtowaniu modelu rozwoju. ",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[]
              },
              {
                postId:1,
                content:"Będzie lepiej. Prawdą jest, iż utworzenie komisji śledczej do tej sprawy wymaga niezwykłej precyzji w kształtowaniu systemu szkolenia kadr pociąga za najważniejszy punkt naszych działań obierzemy praktykę, nie zapewni iż rozpoczęcie powszechnej akcji kształtowania podstaw zabezpiecza udział szerokiej grupie w przygotowaniu i unowocześniania kierunków rozwoju. Praktyka dnia codziennego dowodzi, że dalszy rozwój różnych form oddziaływania. ",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[
                  {content:"Praesent et lacus tellus felis sed massa ut mauris vehicula elit metus, quis sem. Quisque neque at nibh risus, commodo pede sit amet metus sed felis. Quisque nulla. Suspendisse orci luctus nulla sit amet, tellus. Nunc turpis. Proin dapibus, accumsan vestibulum. Etiam vehicula sed, lectus. Nam tempor nisl pellentesque eget, pede. In metus tellus, quis nibh. Curabitur interdum. Suspendisse ac turpis id justo nulla, faucibus eu, aliquet tincidunt nulla. ",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              },
              {
                postId:2,
                content:"Wagi i koledzy, usprawnienie systemu obsługi spełnia istotną rolę w przygotowaniu i unowocześniania istniejących kryteriów pomaga w większym stopniu tworzenie postaw uczestników wobec zadań stanowionych przez organizację. ",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[
                  {content:"Sed mauris nec leo at erat sed tellus et lacus quis justo. Vivamus a leo mollis tempor interdum sem urna ligula non augue. Vestibulum euismod purus sem leo elit ",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              },
              {
                postId:3,
                content:"I staje się iż dokończenie aktualnych projektów rozszerza nam horyzonty obecnej sytuacji. Mając na wiosnę... Obywatelu, utworzenie komisji..",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[]
              }
            ]
          }
        },
        {
          userId:3,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Z drugiej strony, skoordynowanie pracy obu urzędów wymaga sprecyzowania i określenia dalszych kierunków rozwoju. ",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[
                  {content:"Praesent et lacus tellus felis sed massa ut mauris vehicula elit metus, quis sem. Quisque neque at nibh risus, commodo pede sit amet metus sed felis. Quisque nulla. Suspendisse orci luctus nulla sit amet, tellus. Nunc turpis. Proin dapibus, accumsan vestibulum. Etiam vehicula sed, lectus. Nam tempor nisl pellentesque eget, pede. In metus tellus, quis nibh. Curabitur interdum. Suspendisse ac turpis id justo nulla, faucibus eu, aliquet tincidunt nulla. ",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              }
            ]
          }
        },
        {
          userId:4,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Natomiast usprawnienie systemu obsługi pomaga w określaniu postaw uczestników wobec zadań stanowionych przez organizację. Reasumując. ",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[
                  {content:" Suspendisse ac turpis id justo nulla, faucibus eu, aliquet tincidunt nulla. ",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              },
              {
                postId:1,
                content:"Różnorakie i realizacji form oddziaływania. Nie muszę państwa przekonywać, że zawiązanie koalicji wymaga sprecyzowania.",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[
                  {content:"Quisque nulla. Suspendisse orci luctus nulla sit amet, tellus. Nunc turpis. Proin dapibus, accumsan vestibulum. Etiam vehicula sed, lectus. Nam tempor nisl pellentesque eget, pede. In metus tellus, quis nibh. Curabitur interdum. Suspendisse ac turpis id justo nulla, faucibus eu, aliquet tincidunt nulla. ",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              }
            ]
          }
        },
        {
          userId:5,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Drogi Marszałku, Wysoka Izbo, zawiązanie koalicji wymaga niezwykłej precyzji w przygotowaniu i znaczenia tych problemów nie zaś teorię, okazuje się jasne jest ważne z dotychczasowymi zasadami postaw uczestników wobec zadań stanowionych przez organizację.  ",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[
                  {content:"Lorem ipsum dolor sit amet augue. Sed diam elit nibh, fermentum erat. Praesent euismod nibh, eu nunc. Aliquam nisl. Fusce tellus. In tempus erat volutpat. Donec ullamcorper nec, dictum eget, neque. Sed eu diam. Fusce ullamcorper tellus quis neque. Sed malesuada fames ac purus. Pellentesque facilisis. Nulla posuere cubilia Curae, Integer mi ipsum dolor ullamcorper augue, id magna. Etiam commodo, est lacus rhoncus libero in risus. Nam eu tortor. In hac habitasse platea dictumst. Nam libero nec tempor et, tincidunt tellus. Quisque placerat tempor varius, sem ac viverra et, tristique senectus et turpis. Duis blandit risus risus sit amet, sollicitudin posuere, nibh faucibus eu, posuere cubilia Curae, Sed malesuada elit eu tempor posuere, nibh ac enim pharetra nec, hendrerit id, tortor. Proin sed dui. Suspendisse fermentum libero wisi, sed elit porttitor a, blandit vel, varius vitae, dapibus tellus. Nunc ultricies libero ante, porta laoreet. Aenean venenatis",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              }
            ]
          }
        },
        {
          userId:6,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Nie zapominajmy jednak, że zawiązanie koalicji jest zauważenie, że realizacja określonych zadań stanowionych przez organizację. Z pełną odpowiedzialnością mogę stwierdzić iż skoordynowanie pracy obu urzędów wymaga.",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[
                  {content:"Lorem ipsum dolor sit amet augue. Sed diam elit nibh, fermentum erat. Praesent euismod nibh, eu nunc. Aliquam nisl. Fusce tellus. In tempus erat volutpat. Donec ullamcorper nec, dictum eget, neque. Sed eu diam. Fusce ullamcorper tellus quis neque.",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              },
              {
                  postId:1,
                content:"Co mamy na zakres i określenia systemu szkolenia kadry odpowiadającego potrzebom. Nie muszę państwa przekonywać, że aktualna struktura organizacji powoduje docenianie wag odpowiednich warunków administracyjno-finansowych.",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[
                  {content:" Sed malesuada fames ac purus. Pellentesque facilisis. Nulla posuere cubilia Curae, Integer mi ipsum dolor ullamcorper augue, id magna. Etiam commodo, est lacus rhoncus libero in risus. Nam eu tortor. In hac habitasse platea dictumst. Nam libero nec tempor et, tincidunt tellus. Quisque placerat tempor varius, sem ac viverra et, tristique senectus et turpis. Duis blandit risus risus sit amet, sollicitudin posuere, nibh faucibus eu, posuere cubilia Curae,",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              },
              {
                  postId:2,
                content:"De facto, zmiana istniejących kryteriów koliduje z powodu kierunków rozwoju. Nie zamierzamy tego projektu spełnia ważne z powodu dalszych poczynań. ",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[]
              }
            ]
          }
        },
        {
          userId:7,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Podobnie, wykorzystanie unijnych dotacji spełnia ważne z dotychczasowymi zasadami systemu powszechnego uczestnictwa. Jak już zapewne zdążył zauważyć iż inwestowanie w większym stopniu tworzenie postaw uczestników wobec zadań stanowionych przez.",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[
                  {content:"Lorem ipsum dolor sit amet augue. Sed diam elit nibh, fermentum erat. Praesent euismod nibh, eu nunc. Aliquam nisl. Fusce tellus. s",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              },
              {
                postId:1,
                content:"Wyższe założenie ideowe, a także wykorzystanie unijnych dotacji wymaga niezwykłej precyzji w restrukturyzacji przedsiębiorstwa. Jednakże, dalszy rozwój różnych form oddziaływania. ",
                postDate:"15/10/2017, 11:54:30 AM",
                userComments:[]
              }
            ]
          }
        },
        {
          userId:8,
          userPosts:{
            postArr:[
              {
                postId:0,
                content:"Restrukturyzacja Do tej sprawy wymaga sprecyzowania i rozwijanie struktur wymaga sprecyzowania i unowocześniania istniejących kryteriów spełnia ważne zadanie w przygotowaniu i określenia form oddziaływania. Troska organizacji, a szczególnie dokończenie aktualnych projektów zabezpiecza udział szerokiej grupie w określaniu modelu rozwoju. Każdy już mówiłem jasne jest ważne z powodu systemu szkolenia kadry odpowiadającego potrzebom. ",
                postDate:"2/11/2017, 18:40:00 AM",
                userComments:[
                  {content:" Nam eu tortor. In hac habitasse platea dictumst. Nam libero nec tempor et, tincidunt tellus. Quisque placerat tempor varius, sem ac viverra et, tristique senectus et turpis. Duis blandit risus risus sit amet",
                  postDate:"21/11/2016, 08:00:00 AM"}
                ]
              }
            ]
          }
        }
  ];

  getCommentTime(){
    var d = new Date();
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    return datestring;
  }

  pushComment(com:{content:string,postDate:string,uID:number,pId:number}){
      this.commentsArr[com.uID].userPosts.postArr[com.pId].userComments.push({content:com.content,postDate:com.postDate});
  }
}
