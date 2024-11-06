const randomNumber = Math.floor(Math.random() * 10);
let attempts = 0 

function checkGuess(){
	const userGuess = parseInt(document.getElementById('guess').value);
	attempts++;

	if (isNaN(userGuess)||userGuess < 1 || userGuess > 10) {
		document.getElementById('message').innerText = 'Silahkan masukan angka yang valid ';
	} else if (userGuess === randomNumber) {
		document.getElementById('message').innerText = `Selamat! Anda menebak angka ${randomNumber} dengan ${attempts} percobaan.`;
	} else if (userGuess < randomNumber) {
		document.getElementById('message').innerText = 'Angka kamu terlalu kecil ';
	} else {
		document.getElementById('message').innerText = 'Angka kamu terlalu besar ';
	}
}