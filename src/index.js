import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
import { GalacticAge } from '../src/js/galactic-age-cal';


const submitBtn = document.getElementById('submit');
const updateInfoBtn = document.getElementById('update-info');
const resultSection = document.getElementById('planets');
resultSection.style.display = 'none';
updateInfoBtn.style.display = 'none';

submitBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    if (age && name) {
        const galacticAge = new GalacticAge(age);

        document.getElementById('user-name').innerText = `Hello, ${name} this is your age in other planets`;
        document.getElementById('mercury').innerText = `Your age in Mercury years: ${galacticAge.calculateMercuryAge()}`;
        document.getElementById('venus').innerText = `Your age in Venus years: ${galacticAge.calculateVenusAge()}`;
        document.getElementById('mars').innerText = `Your age in Mars years: ${galacticAge.calculateMarsAge()}`;
        document.getElementById('jupiter').innerText = `Your age in Jupiter years: ${galacticAge.calculateJupiterAge()}`;

        resultSection.style.display = 'block';
        updateInfoBtn.style.display = 'block';
        submitBtn.style.display = 'none';

    }
});

updateInfoBtn.addEventListener('click', function () {
    document.getElementById('user-name').innerText = '';
    document.getElementById('mercury').innerText = '';
    document.getElementById('venus').innerText = '';
    document.getElementById('mars').innerText = '';
    document.getElementById('jupiter').innerText = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';

    resultSection.style.display = 'none';
    updateInfoBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    

});

function handleFormSubmission(event) {
    event.preventDefault();
}
document.querySelector("form").addEventListener("submit", handleFormSubmission);



