let selectColor = function() {

    let selectHeader = document.querySelectorAll('.select');
    selectHeader.forEach(item=>{
        item.addEventListener('click', function(){
            this.classList.toggle('is-active')
        })
    const selectBody = item.querySelectorAll('.select__body')[0]
    selectBody.addEventListener('mouseleave', function () {
        item.classList.remove('is-active');
    })
    });
}
let switchComparison = function() {
    let comparison = document.querySelectorAll('.item__comparison');
    comparison.forEach(item=>{
        item.addEventListener('click', function(){
            this.classList.toggle('active')
        })
    })
}
let switchBuyBtn = function() {
    let comparison = document.querySelectorAll('.buy__btn');
    comparison.forEach(item=>{
        item.addEventListener('click', function(){
            this.classList.toggle('active')
        })
    })
}
selectColor()
switchComparison()
switchBuyBtn()

let decrementBtn = document.querySelectorAll('.decrement-btn');
let incrementBtn = document.querySelectorAll('.increment-btn');
let productQuantity = document.querySelectorAll('.product-quantity input');
let minCount = 1;
let maxCount = 10;
let currentCount = +productQuantity.value;

function Counter(incrementButton, decrementButton, inputField, maxCount = 10, minCount = 1){
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    }

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount;
    }
    this.toggleButtonState();

    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value; 
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount);
    }
    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value; 
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount);
    }
    this.domRefs.incrementButton.addEventListener('click', this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener('click', this.decrement.bind(this));
    

}

const counter1 = new Counter(incrementBtn[0],decrementBtn[0],productQuantity[0]);
const counter2 = new Counter(incrementBtn[1],decrementBtn[1],productQuantity[1]);
const counter3 = new Counter(incrementBtn[2],decrementBtn[2],productQuantity[2]);