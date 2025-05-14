//logic for our custom contact form
const businessAccountCheckbox = document.getElementById("businessAccount");
const companyInfoDiv = document.getElementById("companyInfo");
companyInfoDiv.classList.add("hidden");
const contactReasonInput = document.getElementById("contactReason");
const productNameInput = document.getElementById("productNameField");
productNameInput.classList.add("hidden");
const orderNumberInput = document.getElementById("orderNumberField");
orderNumberInput.classList.add("hidden");

// event listener for form submission
businessAccountCheckbox.addEventListener("change", function (event) {
    if (this.checked) {
        companyInfoDiv.classList.remove("hidden");
    } else {
        companyInfoDiv.classList.add("hidden");
    }
});
contactReasonInput.addEventListener("change", function (event) {
    if (this.value === "product") {
        productNameInput.classList.remove("hidden");
        orderNumberInput.classList.add("hidden");
    } else if (this.value === "order") {
        orderNumberInput.classList.remove("hidden");
        productNameInput.classList.add("hidden");
    } else {
        productNameInput.classList.add("hidden");
        orderNumberInput.classList.add("hidden");
    }
});
