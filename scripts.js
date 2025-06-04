const tasks = [
    {
        question: 'Vai attēlotajā situācijā ir atļauts attīstīt atļauto braukšanas ātrumu 90km/h?',
        image: 'imgs/img-1.jpg',
        type: 'single', // single / multi
        options:
            [
                'Atļauts.',
                'Aizliegts.'
            ],
        answer: 'Atļauts.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-2.png',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu tikai sarkanā automobiļa vadītājam.',
                'Dosiet ceļu abiem transportlīdzekļu vadītājiem.',
                'Dosiet ceļu tikai zaļā automobiļa vadītājam.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Šķērsosiet krustojumu pirmais.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-3.jpg',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu tikai operatīvā transportlīdzekļa vadītājam.',
                'Dosiet ceļu abu transportlīdzekļu vadītājiem.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Dosiet ceļu tikai operatīvā transportlīdzekļa vadītājam.'
    },
    {
        question: 'Kā degvielas patēriņu ietekmē antispārns?',
        image: 'imgs/img-4.jpg',
        type: 'single', // single / multi
        options:
            [
                'Degvielas patēriņš palielinās.',
                'Degvielas patēriņš samazinās.'
            ],
        answer: 'Degvielas patēriņš palielinās.'
    },
    {
        question: 'Kura transportlīdzekļa vadītājam ir priekšroka apdzīvotās vietās?',
        image: 'imgs/img-5.jpg',
        type: 'single', // single / multi
        options:
            [
                'Autobusa vadītājam.',
                'Vieglā automobiļa vadītājam.'
            ],
        answer: 'Autobusa vadītājam.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-6.png',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu tikai pretim braucošā transportlīdzekļa vadītājam.',
                'Dosiet ceļu tikai kravas automobiļa vadītājam.',
                'Dosiet ceļu abiem transportlīdzekļu vadītājiem.'
            ],
        answer: 'Dosiet ceļu abiem transportlīdzekļu vadītājiem.'
    },
    {
        question: 'Kā jārīkojas automobiļa vadītājam attēlotajā situācijā?',
        image: 'imgs/img-7.jpg',
        type: 'single', // single / multi
        options:
            [
                'Jābrauc ar tādu ātrumu, lai, ja nepieciešams, varētu nekavējoties apturēt automobili.',
                'Veicot apbraukšanu pilnībā jāiebrauc pretējā braukšanas joslā .',
                'Jāsignalizē un jāieslēdz avārijas gaismas signalizācija.'
            ],
        answer: 'Jābrauc ar tādu ātrumu, lai, ja nepieciešams, varētu nekavējoties apturēt automobili.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-8.png',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu pretim braucošajam vieglā automobiļa vadītājam.',
                'Dosiet ceļu kravas automobiļa vadītājam.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Dosiet ceļu kravas automobiļa vadītājam.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-9.png',
        type: 'single', // single / multi
        options:
            [
                'Šķērsosiet krustojumu pirmais.',
                'Dosiet ceļu tikai velosipēda vadītājam.',
                'Dosiet ceļu vieglā automobiļa un velosipēda vadītājam.',
                'Dosiet ceļu tikai vieglā automobiļa vadītājam.'
            ],
        answer: 'Šķērsosiet krustojumu pirmais.'
    },
    {
        question: 'Kā rīkosieties attēlotajā situācijā?',
        image: 'imgs/img-10.png',
        type: 'single', // single / multi
        options:
            [
                'Apbrauksiet šķērsli pa labo pusi.',
                'Dosiet ceļu zilajam automobilim un apbrauksiet šķērsli pa kreiso pusi.'
            ],
        answer: 'Apbrauksiet šķērsli pa labo pusi.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-11.jpg',
        type: 'single', // single / multi
        options:
            [
                'Dosiet ceļu velosipēda vadītājam.',
                'Šķērsosiet krustojumu pirmais.'
            ],
        answer: 'Dosiet ceļu velosipēda vadītājam.'
    },
    {
        question: 'Kā alkoholiskie dzērieni ietekmē transportlīdzekļa vadītāja reakcijas laiku?',
        image: 'imgs/img-12.png',
        type: 'single', // single / multi
        options:
            [
                'Reakcijas laiku neizmaina.',
                'Reakcijas laiku palielina.',
                'Reakcijas laiku samazina.'
            ],
        answer: 'Reakcijas laiku samazina.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā?',
        image: 'imgs/img-13.jpg',
        type: 'single', // single / multi
        options:
            [
                'Šķērsosiet krustojumu pirmais.',
                'Dosiet ceļu motociklam.'
            ],
        answer: 'Dosiet ceļu motociklam.'
    },
    {
        question: 'Kāda būs Jūsu pirmā rīcība, ja vēlaties nogriezties pa kreisi attēlotajā situācijā?',
        image: 'imgs/img-14.png',
        type: 'single', // single / multi
        options:
            [
                'Ieslēgšu pagrieziena signālu.',
                'Pārliecināšos par drošību.'
            ],
        answer: 'Ieslēgšu pagrieziena signālu.'
    },
    {
        question: 'Par ko brīdina ceļa zīme?',
        image: 'imgs/img-15.png',
        type: 'single', // single / multi
        options:
            [
                'Par bīstamu labo pagriezienu.',
                'Par bīstamiem pagriezieniem, kur pirmais pagrieziens būs pa labi.',
                'Par lejupceļu ar sekojošu augšupceļu.'
            ],
        answer: 'Par bīstamiem pagriezieniem, kur pirmais pagrieziens būs pa labi.'
    },
    {
        question: 'Kāda ir darbības zona ceļa zīmei “Braukt taisni” attēlotajā situācijā?',
        image: 'imgs/img-16.png',
        type: 'single', // single / multi
        options:
            [
                'Līdz nākošajam krustojumam.',
                'Līdz ceļa zīmei “Apdzīvotas vietas beigas”'
            ],
        answer: 'Līdz nākošajam krustojumam.'
    },
    {
        question: 'Kā jārīkojas dzeltenā automobiļa vadītājam attēlotā situācijā?',
        image: 'imgs/img-17.jpg',
        type: 'single', // single / multi
        options:
            [
                'Jāturpina kustība nesamazinot ātrumu.',
                'Strauji jābremzē.'
            ],
        answer: 'Strauji jābremzē.'
    },
    {
        question: 'Kuriem transportlīdzekļu vadītājiem atļauts braukt attēlotajā situācijā?',
        image: 'imgs/img-18.jpg',
        type: 'single', // single / multi
        options:
            [
                'Kravas automobiļa, vieglā automobiļa un autobusa vadītājiem.',
                'Visiem transportlīdzekļu vadītājiem braukt aizliegts.',
                'Kravas automobiļa un vieglā automobiļa vadītājiem.'
            ],
        answer: 'Visiem transportlīdzekļu vadītājiem braukt aizliegts.'
    },
    {
        question: 'Par ko brīdina attēlotais ceļa apzīmējums?',
        image: 'imgs/img-19.jpg',
        type: 'single', // single / multi
        options:
            [
                'Par nepārtrauktās līnijas tuvošanos.',
                'Par to, ka atrodaties uz ātrgaitas ceļa.'
            ],
        answer: 'Par nepārtrauktās līnijas tuvošanos.'
    },
    {
        question: 'Vai attēlotajā situācijā atļauts apdzīt?',
        image: 'imgs/img-20.jpg',
        type: 'single', // single / multi
        options:
            [
                'Aizliegts.',
                'Atļauts.'
            ],
        answer: 'Atļauts.'
    },
    {
        question: 'Kāds ir maksimāli atļautais braukšanas ātrums velkot automobili?',
        image: 'imgs/img-21.jpg',
        type: 'single', // single / multi
        options:
            [
                '90km/h.',
                '50km/h.',
                '80km/h.',
                '100km/h.'
            ],
        answer: '90km/h.'
    },
    {
        question: 'Vai velosipēds ir pareizi nostiprināts pārvadāšanai?',
        image: 'imgs/img-22.png',
        type: 'single', // single / multi
        options:
            [
                'Pareizi, jo nerada lieku gaisa pretestību.',
                'Nepareizi, jo aizsedz apgaismes ierīces un numurzīmi.'
            ],
        answer: 'Nepareizi, jo aizsedz apgaismes ierīces un numurzīmi.'
    },
    {
        question: 'Pa kuru trajektoriju automobiļa vadītājam atļauts krustojumā nogriezties pa labi?',
        image: 'imgs/img-23.jpg',
        type: 'single', // single / multi
        options:
            [
                'Tikai A.',
                'Pa A vai B.',
                'Tikai B.'
            ],
        answer: 'Tikai A.'
    },
    {
        question: 'Kuram no minētajiem faktoriem ir būtiskākā ietekme uz degvielas patēriņu pilsētā?',
        image: 'imgs/img-24.jpg',
        type: 'single', // single / multi
        options:
            [
                'Optimālai maršruta plānošanai.',
                'Cilvēku skaitam transportlīdzeklī.',
                'Vēja ātrumam.'
            ],
        answer: 'Optimālai maršruta plānošanai.'
    },
    {
        question: 'Kad velkamajam automobilim ir jābūt iedegtai avārijas gaismas signalizācijai?',
        image: 'imgs/img-25.png',
        type: 'single', // single / multi
        options:
            [
                'Braucot apdzīvotās vietās.',
                'Braucot ārpus apdzīvotām vietām.',
                'Braucot diennakts tumšajā laikā.',
                'Vienmēr.'
            ],
        answer: 'Vienmēr.'
    },
    {
        question: 'Kuram satiksmes dalībniekam ir priekšroka attēlotajā situācijā?',
        image: 'imgs/img-26.png',
        type: 'single', // single / multi
        options:
            [
                'Automobiļa vadītājam.',
                'Gājējam.'
            ],
        answer: 'Gājējam.'
    },
    {
        question: 'Kurā attēlā pareizāk tiek veikta cietušā izvilkšana no ceļu satiksmes negadījumā iekļuvušā automobiļa?',
        image: 'imgs/img-27.png',
        type: 'single', // single / multi
        options:
            [
                'A.',
                'B.',
                'Abi paņēmieni ir pareizi.'
            ],
        answer: 'Abi paņēmieni ir pareizi.'
    },
    {
        question: 'Vai vieglā automobiļa vadītājam atļauts apdzīt attēlotajā situācijā?',
        image: 'imgs/img-28.jpg',
        type: 'single', // single / multi
        options:
            [
                'Aizliegts, jebkurā gadījumā.',
                'Atļauts.',
                'Aizliegts, tikai gadījumos, ja tuvojas transportlīdzekļi no kreisās puses.'
            ],
        answer: 'Aizliegts, jebkurā gadījumā.'
    },
    {
        question: 'Ko norāda attēlotā papildzīme?',
        image: 'imgs/img-29.png',
        type: 'single', // single / multi
        options:
            [
                'Norāda ieteicamo braukšanas virzienu pa labi.',
                'Ka atrodaties uz mazāksvarīga ceļa, kurš krustojumā maina virzienu pa labi.',
                'Ka atrodaties uz galvenā ceļa, kurš krustojumā maina virzienu pa labi.'
            ],
        answer: 'Ka atrodaties uz galvenā ceļa, kurš krustojumā maina virzienu pa labi.'
    },
    {
        question: 'Vai pasažieriem atļauts atrasties velkamajā automobilī?',
        image: 'imgs/img-30.png',
        type: 'single', // single / multi
        options:
            [
                'Aizliegts.',
                'Atļauts.'
            ],
        answer: 'Aizliegts.'
    },
    {
        question: 'Pa kuru no trajektorijām vieglā automobiļa vadītājam atļauts apsteigt kravas automobili apdzīvotā vietā?',
        image: 'imgs/img-31.png',
        type: 'single', // single / multi
        options:
            [
                'Pa A un B.',
                'Tikai pa B.',
                'Tikai pa A.'
            ],
        answer: 'Pa A un B.'
    },
    {
        question: 'Kuros virzienos automobiļa vadītājam ir atļauts braukt attēlotā situācijā?',
        image: 'imgs/img-32.jpg',
        type: 'single', // single / multi
        options:
            [
                'A C D E.',
                'B C D.',
                'B C E.'
            ],
        answer: 'A C D E.'
    },
    {
        question: 'Kā rīkosieties, šķērsojot krustojumu, attēlotajā situācijā (dzeltens mirgojošs signāls)?',
        image: 'imgs/img-33.jpg',
        type: 'single', // single / multi
        options:
            [
                'Šķērsosiet krustojumu pirmais.',
                'Dosiet ceļu pretim braucošā automobiļa vadītājam.'
            ],
        answer: 'Dosiet ceļu pretim braucošā automobiļa vadītājam.'
    }/*,
    {
        question: '',
        image: 'imgs/',
        type: 'single', // single / multi
        options:
            [
                '',
                ''
            ],
        answer: ''
    }*/
];

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