var lista=[];

class prodcuts{
    constructor(a,b,c){
        this.name=a;
        this.lastname=b;
        this.age=c;
    }
}

function loadData(){
    var persona=new person("Aaracely", "Mendoza", 21);
    lista.push(persona);

    var persona=new person("Juan", "Judith", 18);
    lista.push(persona);

    var persona=new person("Marcela", "Mendez", 22);
    lista.push(persona);

    var persona=new person("Carla", "Lopez", 26);
    lista.push(persona);

    var persona=new person("Hazel", "Torres", 32);
    lista.push(persona);

    var persona=new person("Rafael", "Sanchez", 18);
    lista.push(persona);
    var persona=new person("Camilo", "Lopez", 21);
    lista.push(persona);

    var persona=new person("Jasmin", "Rojas", 23);
    lista.push(persona);

    var persona=new person("Bernado", "Diaz", 16);
    lista.push(persona);

}

function showData(){
    var table, thead, tbody;

    table="<table >";
    thead="<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr></thead>";
    table+=thead;

    tbody="<tbody>";
    lista.forEach(function(i){
        tbody+="<tr><td>" + i.name + "</td><td>" + i.lastname +"</td><td>" +i.age + "</td></tr>";
    });
    tbody+="</tbody>";

    table+=tbody;
    table+="</table>";

    document.getElementById('viewTable').innerHTML=table;
}

function filterTable(element){
    var table, thead, tbody;

    table="<table border=3>";
    thead="<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr></thead>";
    table+=thead;

    tbody="<tbody>";
    lista.forEach(function(i){
        if(i.name.toLowerCase().startsWith(element.value.toLowerCase())){
            tbody+="<tr><td>"+i.name+"</td><td>"+i.lastname+"</td><td>"+i.age+"</td></tr>";
        }
        
    });
    tbody+="</tbody>";

    table+=tbody;
    table+="</table>";

    document.getElementById('viewTable').innerHTML=table;
}