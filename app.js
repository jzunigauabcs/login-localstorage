function handleRegisterForm(e) {
	e.preventDefault();
	
	const nombre = document.querySelector("#nombre").value;
	const correo = document.querySelector("#correo").value;
	const password = document.querySelector("#password").value;
	const repeatPassword = document.querySelector("#repeatPassword").value;

	if(password !== repeatPassword) {
		console.error("Las contraseñas no coinciden");
		return;
	}

	const userData = {
		"nombre": nombre,
		"correo": correo,
		"password": password
	};

	storeUser(userData);
}

function storeUser(userData) {
	window.localStorage.setItem("userData", JSON.stringify(userData));
	alert("Datos almacenados correctamente");
	window.location = "index.html";
}

function handleLoginForm(e) {
	e.preventDefault();
	const correo = document.querySelector("#correo").value;
	const password = document.querySelector("#password").value;

	login(correo, password);

}

function login(correo, password) {
	const userData = JSON.parse(window.localStorage.getItem("userData"));

	if(userData === null)
		alert("No se encuentran datos registrados");

	if(userData.correo === correo && userData.password === password)
		alert("Bienvenido");
	else
		alert("Usuario o contraseña incorrectos");
}

function init() {
	if(document.querySelector('.register-form')){
		const registerForm =  document.querySelector(".register-form");
		registerForm.addEventListener('submit', handleRegisterForm);
	}
	
	if(document.querySelector('.login-form')) {
		const loginForm = document.querySelector(".login-form");
		loginForm.addEventListener('submit', handleLoginForm);
	}
		
}

window.addEventListener("load", (e) => {
	init();
});
