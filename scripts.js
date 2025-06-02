
const tasks = [
    {
        name: '1. Jautājums',
        question: 'Kā ietriekties kokā?',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Car_crash_1.jpg/1024px-Car_crash_1.jpg',
        type: 'single', // single / multi
        options: ['Ietriekties kokā',
            'Braukt pa ceļu',
            'ietriekties mājā'],
        answer: 'Ietriekties kokā'
    }
];
const task_count = 1;

selected_tasks = [];

function get_new_task() {
    const index = 0;

    selected_tasks.push(index);

    return tasks[index];
}

function set_new_task(task) {

    console.log(task);

    const Start_Button = document.getElementById("start-button");
    Start_Button.style.display = 'none';

    const Title = document.getElementById("name");
    Title.textContent = task.name;

    console.log(Title);

    const Question = document.getElementById("question");
    Question.textContent = task.question;

    const Image = document.getElementById("image");
    Image.src = task.image;

   const Options = document.getElementById("options");
   // Options.innertext = task.options;

    for (let i = 0; i < task.options.length; i++) {
        if (task.type === 'single') {
            const input = document.createElement('input');
            input.type = 'radio';
            input.className = 'question-option';
            input.value = name;
            input.id = name;
            input.name = 'question-option';
        } else if (task.type === 'multi') {

        }
    }

}

function startTest() {
    const task = get_new_task();
    set_new_task(task);
}