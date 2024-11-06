let tanya = true;

while (tanya){	
	//menangkap pilihan player
	let p = prompt(' Pilih: gajah, semut, atau orang ');
	//random computer
	let comp = Math.floor(Math.random() * 3);
	if (comp === 0) {
		comp = "gajah";
	} else if (comp === 1) {
		comp = "semut";
	} else {
		comp = "orang";
	}

	//rules
	let hasil = '';

	if (p == comp) {
		hasil = "SERI";
	} else if (p == "gajah") {
		hasil = comp == "semut" ? "KALAH" : "MENANG";
	} else if (p == "orang") {
		hasil = comp == "gajah" ? "KALAH" : "MENANG";
	} else if (p == "semut") {
		hasil = comp == "orang" ? "KALAH" : "MENANG";
	} else {
		hasil = "gaada kaya gitu blok";
	}

//menampilkan hasil 
alert('Kamu memilih: ' + p + ' \nKomputer memilih: ' + comp + ' \nmaka hasilnya :  ' + hasil);

tanya = confirm('lagi?');
}