// const elBudgerExpanse = document.querySelector(".divItem")
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

elList.addEventListener("click", evt => {
    if (evt.target.matches(".closeBtn")) {
        const todos = JSON.parse(window.localStorage.getItem("todos"))
        const closeId = Number(evt.target.dataset.closeId)
        const foundId = todos.findIndex(index => index.id === closeId)
        todos.splice(foundId, 1)
        elList.innerHTML = null
        window.localStorage.setItem("todos", JSON.stringify(todos))
        renderTodo(todos, elList)

    }

})


const renderTodo = function (arr, node) {
    arr.forEach(todo => {

        const newlList = document.createElement("li")
        const newTitle = document.createElement("h3")
        const newValue = document.createElement("p")
        const newTime = document.createElement("span")
        const newClodeBtn = document.createElement("button")

        //  SET ATTRIBUTE

        newlList.setAttribute("class", " d-flex justify-content-between mt-2")
        newTitle.setAttribute("class", "d-flex justify-content-between col-4 h3")
        newValue.setAttribute("class", "d-flex justify-content-between col-4 h3")
        newTime.setAttribute("class", "d-flex justify-content-between col-4 h3")
        newClodeBtn.setAttribute("class", "btn btn-outline-danger closeBtn")

        // TEXT CONTENT
        newTitle.textContent = todo.title
        newValue.textContent = todo.value
        newTime.textContent = todo.time
        newClodeBtn.textContent = "close"



        newClodeBtn.dataset.closeId = todo.id



        newlList.append(newTitle)
        newlList.append(newValue)
        newlList.append(newTime)
        newlList.append(newClodeBtn)
        node.append(newlList)
    })
}


elFormBudger.addEventListener("click", evt => {
    evt.preventDefault()

    // INPUT VALUE
    const budgerInpValue = elBudgerInp.value

    // PUSH LIST
    budgerlist.push(Number(budgerInpValue))

    window.localStorage.setItem("budgerlist", JSON.stringify(budgerlist))

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
    const expenseNameValue = elExpenseName.value

    const todo = {
        id: todos[todos.length - 1]?.id + 1 || 0,
        title: expenseNameValue,
        value: expenseInpValue,
        time: `${(new Date()).getDay()} / ${(new Date()).getMonth() + 1} / ${(new Date()).getFullYear()}`


    }

    // LIST PUSH
    expanselist.push(Number(todo.value))
    todos.push(todo)

    window.localStorage.setItem("todos", JSON.stringify(todos))
    window.localStorage.setItem("expanselist", JSON.stringify(expanselist))

    // TEXT CONTENT FUNCTION
    Valuefunc()


    // VALUE NULL
    elBudgerInp.value = null
    elExpenseName.value = null
    elExpenseInp.value = null
    elList.innerHTML = null

    renderTodo(todos, elList)
})


// TEXT CONTENT FUNCTION

const Valuefunc = function () {

    const expanselist = JSON.parse(window.localStorage.getItem("expanselist")) 
    const budgerlist = JSON.parse(window.localStorage.getItem("budgerlist"))

    const budgerSum = budgerlist?.reduce((a, b) => a + b) || 0
    const expenseSum = expanselist?.reduce((a, b) => a + b) || 0


    elBudgerScore.textContent = budgerSum
    elExpenseScore.textContent = expenseSum
    elBalanse.textContent = budgerSum - expenseSum

}

Valuefunc()