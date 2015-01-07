
function byId(id)
    {
        return document.getElementById(id);
    }
var cont = byId('contbox').getElementsByTagName('div');
var nav = byId('btphoto').getElementsByTagName('li');
var arr = byId('arrow');
var l=nav.length;
var getCurIndex = function(){
    for(var i = 0; i < l; i++){
        if(nav[i].className.indexOf('selected')!=-1)
            return i;
    }
}
var index = 0;
var move = function(flag){
    index = getCurIndex();
    if(flag){
        index++;
        if(index >= l)
            index = 0;
    }
    else{
        index--;
        if(index < 0)
            index = l - 1;
    }
    display(index);
}

var display = function(index){
    for (var i = 0; i < l; i++) {
        cont[i].className = '';
        nav[i].className = '';
    }
    cont[index].className = 'show';
    nav[index].className = 'selected';
}
var Timehand;
var autoStart = function(){
    Timehand = setInterval(function(){
        move(true);
    },2000);
}
var autoStop = function(){
    clearInterval(Timehand);
}
var showOrHidden = function(flag) {
    if(flag)
        arr.style.display = 'block';

    else 
        arr.style.display = 'none';             
}
var showAndStop = function(){
    showOrHidden(true);
    autoStop();
}
var hiddenAndStart = function(){
    showOrHidden(false);
    autoStart();
}