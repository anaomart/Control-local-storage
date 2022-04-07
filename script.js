let allSpans = document.querySelectorAll(".buttons span");
let result = document.querySelector('.results > span ');
let input = document.getElementById('input');

allSpans.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains('check-item')) {
            checkItem();
        }
        if (e.target.classList.contains('add-item')) {
            addItem();
        }
        if (e.target.classList.contains('delete-item')) {
            deleteItem()
        }
        if (e.target.classList.contains('show-item')) {
            showItem();
        }
    })
})

function checkInput() { //check if empty 
    if (input.value == '') {
        return result.innerHTML = 'input can\'t be empty'
    }
}

function checkItem() {
    if (input.value !== '') {
        if (localStorage.getItem(input.value)) {
            result.innerHTML = `Found Local Item Called <span> ${input.value} </span>`
        } else {
            result.innerHTML = `can't find Local Item Called <span> ${input.value} </span>`
        }
    } else {
        checkInput();
    }
}

function addItem() {
    if (input.value !== '') {
        localStorage.setItem(input.value, 'Test');
        result.innerHTML = `localStorage Item <span> ${input.value}</span> Added `
        input.value = '';
    } else {
        checkInput();
    }
}

function deleteItem() {
    if (input.value !== '') {
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            result.innerHTML = `Local Item Called <span> ${input.value} </span>Deleted `
        } else {
            result.innerHTML = `can't find Local Item Called <span> ${input.value} </span>`
        }
    } else {
        checkInput();
    }
}


function showItem() {
    result.innerHTML = ''
    if (localStorage.length) {
        for (let [key, value] of Object.entries(localStorage)) {
            result.innerHTML += `<span>${key}</span>`;
        }

    } else {
        result.innerHTML = `there Is Nothing in the local Storage `;
    }
}