const form = document.querySelector('form');
const clientsIncomeInput = document.querySelector('#income');
const clientsEssentialsInput = document.querySelector('#essentials');
const clientsSavingsInput = document.querySelector('#savings');
const clientsLeisureInput = document.querySelector('#leisure');




const arr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Store data
    const storeIncome = localStorage.setItem('clientsIncome', clientsIncomeInput.value);
    
    const storeEssential = localStorage.setItem('essential%', clientsEssentialsInput.value);

    const storeSavings = localStorage.setItem('savings%', clientsSavingsInput.value);

    const storeLeisure = localStorage.setItem('leisure%', clientsLeisureInput.value);

    

    fetch('results.html')
    .then(res => res.text())
    .then(data => {
        const html = document.querySelector('html');
        html.innerHTML = data;
        getData()
    })
    .catch(err => console.error(err))
})



//localStorage.clear()


const getData = function() {
    //Get data
    const getIncome = parseInt(localStorage.getItem('clientsIncome'));
    const getEssentials = parseInt(localStorage.getItem('essential%'));
    const getSavings = parseInt(localStorage.getItem('savings%'));
    const getLeisure = parseInt(localStorage.getItem('leisure%'));


    //Calc
    const startAmount = getIncome;
    
    const clientsEssentialsBudget = startAmount * (getEssentials / 100);

    const clientsSavingsBudget = startAmount * (getSavings / 100);

    const clientsLeisureBudget = startAmount * (getLeisure / 100);

    //Display result
    const usersIncome = document.querySelector('#users-income');
    usersIncome.textContent = startAmount;

    const usersEssential = document.querySelector('.essentials-value');
    usersEssential.textContent = clientsEssentialsBudget;

    const usersSavings = document.querySelector('.savings-value');
    usersSavings.textContent = clientsSavingsBudget;

    const usersLeisure = document.querySelector('.leisure-value');
    usersLeisure.textContent = clientsLeisureBudget;

};

