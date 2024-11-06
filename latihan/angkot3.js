var jmlAngkot = 10;
var angkotBeroperasi = 8;

for (noAngkot = 1 ; noAngkot <= jmlAngkot ; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No ' + noAngkot + ' beroperasi dengan baik')
    }else{
        console.log('Angkot No ' + noAngkot + ' sedang tidak beroperasi')
    }
}