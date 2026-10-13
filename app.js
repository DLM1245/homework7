const name = 'Dylan';
let hasDownloadedResume = false;
let startDate = '2026-10-12'
let endDate = '2030-10-26'

console.log('Hello World!');

document.getElementById('resumeButton').addEventListener('click', () => { alert('Your resume is downloaded successfully!');
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my Portfolio!";
}

function calculateDays(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
}

console.log(calculateDays(startDate, endDate));