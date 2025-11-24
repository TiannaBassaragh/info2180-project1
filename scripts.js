/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".newsletter form");
    const input = document.querySelector("#email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = input.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =
            `Thank you! Your email address ${email} has been added to our mailing list!`;

        input.value = "";
    });

});
