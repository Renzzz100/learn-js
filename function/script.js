// function menghitungVolumeKubus(a, b) {
//     return a * a * a + b * b * b;
// }
// alert(menghitungVolumeKubus(9,2));

// function tambah(a,b){ //Parameter
// 	return a + b; 
// }

// function kali(a,b){
// 	return a * b;
// }

// let hasil = kali(9,9); //Argument
// console.log(hasil);


// function faktorial(n){ //rekursif function
// 	if (n === 0){ //base case
// 		return 1;
// 	}
// 	return n * faktorial(n-1);
// }

// console.log(faktorial(5))

tampilPesan("syahrendra");

function tampilPesan(nama){ //function declaration
	alert('halo' + nama)
}


let tampilPesan = function (nama) { //function expression
	alert('halo' + nama);
}

tampilPesan('rendra')