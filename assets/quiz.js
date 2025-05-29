const prev_btn = document.getElementById("prev-button");
const next_btn = document.getElementById("next-button");
const finish_btn = document.getElementById("finish-button");

const quiz_form = document.querySelector("#quizForm");
const answers = {};

let currentQuestionIndex = 0;

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
    //code to store answers
    answers[event.target.name] = event.target.value;
}

prev_btn.addEventListener("click", function () {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
    updateButtonStates(currentQuestionIndex);
});

next_btn.addEventListener("click", function () {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
    updateButtonStates(currentQuestionIndex);
});

finish_btn.addEventListener("click", function () {
    if (answers.product_type && answers.bike_type && answers.color) {
        alert("Here are your answers: " + JSON.stringify(answers));
    } else {
        alert("Please answer all the questions!");
    }
});

function updateButtonStates(index) {
    /*
  disable previous button on first question.
  disable next button on last question.
  */
    prev_btn.disabled = index === 0;
    next_btn.classList.toggle("hidden", index === questions.length - 1);
    finish_btn.classList.toggle("hidden", index !== questions.length - 1);
}

function displayQuestion(index) {
    /*
  1) display qustion dynamically based on index
  2) confirm selecting the answers still works
  3) when generating a question, check if we already have an answer to that question stored, and pre-select that option.  
  */
    const question = questions[index];
    const questionContainer = document.getElementById("quizForm");

    const optionsHTML = question.options
        .map((option) => {
            const inputId = `${question.name}-${option.value}`;
            const isChecked =
                answers[question.name] === option.value ? "checked" : "";

            return `
                    <input 
                        type="radio" 
                        id="${inputId}" 
                        name="${question.name}" 
                        value="${option.value}" 
                        ${isChecked} 
                    />
                    <label for="${inputId}">
                        <div class="img-wrap">
                            <img src="${option.img} | ${option.image_url}" alt="${option.label}" />
                        </div>
                        <span>${option.label}</span>
                    </label>
            `;
        })
        .join("");

    questionContainer.innerHTML = `
        <h2>${question.text}</h2>
        <div class="label-container">${optionsHTML}</div>
    `;
}

// initialize
displayQuestion(currentQuestionIndex);
updateButtonStates(currentQuestionIndex);
