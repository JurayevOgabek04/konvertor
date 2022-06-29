// const elBudgerExpanse = document.querySelector(".budget_expense")
const elForm = document.querySelector(".expanse")
const elFormBudger = document.querySelector(".budget")
const elList = document.querySelector(".list-item")

const elBudgerInp = document.querySelector(".budget__input")
const elExpenseName = document.querySelector(".expensename__input")
const elExpenseInp = document.querySelector(".expense__input")

const elBudgerScore = document.querySelector(".budget__score")
const elExpenseScore = document.querySelector(".expense__score")
const elBalanse = document.querySelector(".balanse")


// LIST

let todos = []

let budgerlist = []
let expanselist = []


const renderTodo = function (arr, node) {


    arr.forEach(todo => {

        const newlList = document.createElement("ul")
        const newTitle = document.createElement("li")
        const newValue = document.createElement("li")
        const newTime = document.createElement("li")
        const newClodeBtn = document.createElement("button")

        //  SET ATTRIBUTE

        newlList.setAttribute("class", " d-flex justify-content-between mt-2")
        newTitle.setAttribute("class", "d-flex justify-content-between col-4 h3")
        newValue.setAttribute("class", "d-flex justify-content-between col-4 h3")
        newTime.setAttribute("class", "d-flex justify-content-between col-4 h3")
        newClodeBtn.setAttribute("class", "btn btn-outline-danger")

        // TEXT CONTENT

        newTitle.textContent = todo.title
        newValue.textContent = todo.value
        newTime.textContent = `${
            setInterval(function() {
                return (new Date()).getMinutes() - todo.time
            }, 1000)
        } - agoo`
        newClodeBtn.textContent = "close"




        newlList.append(newTitle)
        newlList.append(newValue)
        newlList.append(newTime)
        newlList.append(newClodeBtn)
        node.append(newlList)
    })
}

// TEXT CONTENT FUNCTION

const Valuefunc = function () {
    if (budgerlist.length == 0) {
        elBudgerScore.textContent = 0,
        elExpenseScore.textContent = expanselist.reduce((a, b) => a + b),
        elBalanse.textContent =  - expanselist.reduce((a, b) => a + b)
    } else if(expanselist.length == 0){
        elBudgerScore.textContent = budgerlist.reduce((a, b) => a + b),
        elExpenseScore.textContent = 0,
        elBalanse.textContent = budgerlist.reduce((a, b) => a + b)
    } else {
        elBudgerScore.textContent = budgerlist.reduce((a, b) => a + b),
        elExpenseScore.textContent = expanselist.reduce((a, b) => a + b),
        elBalanse.textContent = budgerlist.reduce((a, b) => a + b) - expanselist.reduce((a, b) => a + b)
    }

}

elFormBudger.addEventListener("click", evt => {
    evt.preventDefault()

    // INPUT VALUE
    const budgerInpValue = elBudgerInp.value

    // PUSH LIST
    budgerlist.push(Number(budgerInpValue))

    // TEXT CONTENT FUNCTION
    Valuefunc()

    // VALUE NULL
    elBudgerInp.value = ""

    elList.innerHTML = null
    renderTodo(todos, elList)
})




elForm.addEventListener("submit", evt => {
    evt.preventDefault()

    const expenseInpValue = Number(elExpenseInp.value)
    // console.log(expenseInpValue);
    const expenseNameValue = elExpenseName.value

    const todo = {
        id: todos[todos.length - 1]?.id + 1 || 0,
        title: expenseNameValue,
        value: expenseInpValue,
        // time: `${(new Date()).getDate()} / ${(new Date()).getMonth() + 1} / ${(new Date()).getFullYear()}`
        time: (new Date()).getMinutes()
    }

    // LIST PUSH
    expanselist.push(Number(todo.value))
    todos.push(todo)


    // TEXT CONTENT FUNCTION
    Valuefunc()


    // VALUE NULL
    elBudgerInp.value = null
    elExpenseName.value = null
    elExpenseInp.value = null
    elList.innerHTML = null

    renderTodo(todos, elList)
})
