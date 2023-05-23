var x = 1;

var y = 3;

console.log(x, y);

function teste(){
         var z = 0;

         console.log(z);

         //console.log(x);

         //console.log(y);

    }

teste();

//console.log(z);// nao vai aparecer pq nao ta no escopo local, no function, e nao no global. o contrario funciona

function testando(){

    var z = 5;

    console.log(z);
};

testando();

