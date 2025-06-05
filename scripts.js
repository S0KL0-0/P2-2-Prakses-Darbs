let selected_task_indices = [];
let selected_task_answers = []; // will be in corresponding to selected_task_indices
let selected_task_index = -1; // current selected task arrays index

let countdownTimer = null;
let startTime = null;
let targetTime = null;
let testCompleted = false;

let TaskAmount = 30;
let TimeAmount = 30;

function isIndexUsed(index) {
    return selected_task_indices.includes(index);
}

function get_new_task() {

    if (selected_task_indices.length >= tasks.length) {
        return null;
    }

    let index;
    do {
        index = Math.floor(Math.random() * tasks.length);
    } while (isIndexUsed(index));

    selected_task_indices.push(index);
    selected_task_index++;
    return tasks[index];
}

function end_test(reason = 'completed') {

    testCompleted = true;
    stopCountdown();

    const Task = document.getElementById("task");
    Task.style.display = 'none';

    const Test_Results = document.getElementById("test_results");
    Test_Results.style.display = 'block';

    const Next_Button = document.getElementById("next-button");
    Next_Button.style.display = 'none';

    const correctAnswers = selected_task_answers.filter(answer => answer === 'correct').length;
    const totalQuestions = selected_task_answers.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    const elapsedTime = getElapsedTimeFormatted();
    const reasonText = reason === 'timeout' ? ' (laiks beidzās)' : '';

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score-display';
    scoreDiv.innerHTML = `
        <h2>Testa rezultāts${reasonText}</h2>
        <div class="score-summary">
            <p><strong>Rezultāts: ${correctAnswers}/${totalQuestions}</strong></p>
            <p><strong>Procenti: ${percentage}%</strong></p>
            <div class="time-info">Pavadītais laiks: ${elapsedTime}</div>
            ${percentage >= 70 ? '<p class="pass">✅ Tests nolikts!</p>' : '<p class="fail">❌ Tests nenolikts!</p>'}
        </div>
    `;

    Test_Results.appendChild(scoreDiv);
}

function set_new_task(task) {

    console.log(task);

    const Start_Button = document.getElementById("start-button");
    Start_Button.style.display = 'none';

    const Question = document.getElementById("question");
    Question.textContent = task.question;

    const Image = document.getElementById("image");
    Image.src = task.image;

    const Options = document.getElementById("options");
    Options.innerHTML = '';

    for (let i = 0; i < task.options.length; i++) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item';

        const input = document.createElement('input');

        if (task.type === 'single') {
            input.type = 'radio';
        } else if (task.type === 'multi') {
            input.type = 'checkbox';
        } else {
            input.type = 'radio';
            console.error('Invalid input type, only allowed single or multi, input type: ' + task.type);
        }

        input.className = 'question-option';
        input.value = task.options[i];
        input.id = `option-${i}`;
        input.name = 'question-option';

        const label = document.createElement('label');
        label.className = 'option-label';
        label.htmlFor = `option-${i}`;
        label.textContent = task.options[i];

        optionDiv.onclick = function () {
            input.checked = true;
        };

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        Options.appendChild(optionDiv);
    }

    const Next_Button = document.getElementById("next-button");
    Next_Button.style.display = 'flex';
    Next_Button.style.justifyContent = 'center';
    Next_Button.style.marginTop = '20px';
}

function arraysMatchExactly(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const countMap = (arr) => {
        const map = new Map();
        for (const val of arr) {
            map.set(val, (map.get(val) || 0) + 1);
        }
        return map;
    };

    const map1 = countMap(arr1);
    const map2 = countMap(arr2);

    if (map1.size !== map2.size) return false;

    for (const [key, count] of map1.entries()) {
        if (map2.get(key) !== count) return false;
    }

    return true;
}


function next_button_pressed() {

    let current_task = tasks[selected_task_indices[selected_task_index]];
    let current_task_answer = current_task.answer;

    if (current_task.type === 'single') {

        const selectedOption = document.querySelector('input[name="question-option"]:checked');

        if (!selectedOption) {
            alert('Lūdzu izvēlieties atbildi pirms turpinat!');
            return;
        }

        if (selectedOption.value === current_task_answer) {
            selected_task_answers[selected_task_index] = 'correct';
        } else {
            selected_task_answers[selected_task_index] = 'incorrect';
        }
    } else if (current_task.type === 'multi') {

        const selectedOptions = document.querySelectorAll('input[name="question-option"]:checked');

        if (selectedOptions.length === 0) {
            alert('Lūdzu izvēlieties vismaz vienu atbildi pirms turpinājiet!');
            return;
        }

        const selectedValues = Array.from(selectedOptions).map(option => option.value);

        let isCorrect = false;

        if (Array.isArray(current_task_answer)) {
            isCorrect = arraysMatchExactly(selectedValues, current_task_answer);
        } else {
            isCorrect = selectedValues.includes(current_task_answer);
        }

        selected_task_answers[selected_task_index] = isCorrect ? 'correct' : 'incorrect';
    } else {
        console.error('Invalid task type:', current_task.type);
        return;
    }

    console.log(`Question ${selected_task_index + 1} answered:`, selected_task_answers[selected_task_index]);

    if (selected_task_index === TaskAmount - 1) {
        end_test();
    }

    const nextTask = get_new_task();

    if (nextTask) {
        set_new_task(nextTask);
    } else {
        end_test();
    }
}

function startTest() {
    testCompleted = false;
    const task = get_new_task();
    set_new_task(task);
    startCountdown(TimeAmount);
}

// https://csnt2.csdd.lv/LAT/parskats
// https://www.csdd.lv/en/driving-licence-for-vehicle-b/the-theory-test-and-applying-for-the-test

// jābūt 30 jautājumiem, 30min, 3 kļūdām max

// TODO: Randomize the order of answer options for each question

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getElapsedTimeFormatted() {
    if (startTime === null) return "00:00";

    const endTime = testCompleted ? (targetTime - (targetTime - new Date().getTime())) : new Date().getTime();
    const elapsedMs = endTime - startTime;
    const elapsedMin = Math.floor(elapsedMs / 60000);
    const elapsedSec = Math.floor((elapsedMs % 60000) / 1000);
    return formatTime(elapsedMin, elapsedSec);
}

function startCountdown(minutes) {
    if (countdownTimer !== null) {
        clearInterval(countdownTimer); // Prevent multiple intervals
    }

    const CountdownDiv = document.getElementById('countdown-container');
    CountdownDiv.style.display = 'flex';

    startTime = new Date().getTime();
    targetTime = startTime + minutes * 60 * 1000;

    updateCountdown();

    countdownTimer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (testCompleted) return;

    const currentTime = new Date().getTime();
    const distance = targetTime - currentTime;

    if (distance <= 0) {
        clearInterval(countdownTimer);
        countdownTimer = null;
        document.getElementById("countdown").textContent = "00:00";
        document.getElementById("countdown").className = "danger";
        onCountdownEnd();
        return;
    }

    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = formatTime(mins, secs);

    // Add visual warnings for low time
    if (mins < 1) {
        countdownElement.className = "danger";
    } else if (mins < 5) {
        countdownElement.className = "warning";
    } else {
        countdownElement.className = "";
    }
}

function stopCountdown() {
    if (countdownTimer !== null) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }
}

function onCountdownEnd() {
    if (!testCompleted) {
        end_test('timeout');
    }
}