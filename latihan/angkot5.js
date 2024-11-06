var jmlAngkot = 10;
var angkotBeroperasi = 6;
for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot <= 4) {
		console.log("Angkot No " + noAngkot + " beroperasi dengan baik");
	}else if ( noAngkot === 5 || noAngkot === 8 || noAngkot === 10 ){
        console.log("Angkot No " + noAngkot + " sedang lembur")
    }else{
		console.log("Angkot No " + noAngkot + " sedang tidak beroperasi");
	}
}
