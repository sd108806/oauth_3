


function test_jsonform()
{

var newobj= {
'count':10,

'events':[
{'node':1,
'color':'blue'},




{'node':3,
'color':'green'}

]

}

document.write('newobj.count' + newobj.count +'<br/>'+'<br/>');

document.write('newobj.events[0].node  ' + newobj.events[0].node +'<br/>'+'<br/>');

document.write('newobj.events[1].node  ' + newobj.events[1].node +'<br/>'+'<br/>');



}