function container_toggle() {
	const container = document.getElementById("container-popup");

	if (container.classList.contains("hidden")){
		container.classList.remove("hidden");
		container.classList.add("visible");
	}
	else {
		container.classList.remove("visible");
		container.classList.add("hidden");
	}
}

const form = document.getElementById('form-container');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', (event) => {
	event.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    if (isValid) {
        container_toggle();

        const success = document.getElementById("success");
        success.classList.remove("hidden");
        success.classList.add("visible");

        const timer = setTimeout(() => {
        	success.classList.remove("visible");
        	success.classList.add("hidden");
        }, 1000);
    }
});

const buttons = document.getElementsByClassName("popup-button");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", container_toggle);
});

document.getElementById("close").addEventListener("click", container_toggle);