const body = document.querySelector('#body');
const parent = document.querySelector('#Parent');
const dustin = document.querySelector('#Dustin');
const lucus = document.querySelector('#Lucus');
function buildPlayers(players){
    var str='';
    for(let i=0;i<players.length;i++){
        let div = document.createElement('div');
        div.id = 'wrapper';
        str='<div class="player"><center><img class="player-image" src="'+players[i].image+'"><div class="name">'+players[i].name+'</div><div class="strength">'+players[i].strength+'</div></center></div>';
        if(i<players.length/2){
            div.innerHTML=str;
            dustin.appendChild(div);
            parent.appendChild(dustin);
        }
        else{
            div.innerHTML=str;
            lucus.appendChild(div);
            parent.appendChild(lucus);
        }
        body.appendChild(parent);
    }
}
function getRandomStrength(){
    return Math.floor((Math.random() * 100) + 1);
}
function initPlayers(character){
    let json={};
    let type=["hero","villain"]
    json['name']=character;
    json['strength']=getRandomStrength();
    json['image']="images/super-"+(i+1)+".png"
    json['type']=type[Math.floor(Math.random()*type.length)];
    return json;
}
function avengers(){

    let characters=['Spiderman','Superman','Captain America','Thor','Antwoman','Catwoman','Volverine','Black Widow','Hulk','Iron Man',
                'Ultron','Loki','Thanos','Korvac','Scarlet Witch', 'Norman Osborn','Skrulls','Baron Zemo','Kang','Taskmaster']
    let data=[]

    for(i=0;i<characters.length;i++){
        data[i]=initPlayers(characters[i]);
        console.log(data[i]['name']);
    }


    buildPlayers(data);

}

