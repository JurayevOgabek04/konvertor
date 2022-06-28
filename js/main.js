// const elBudget = document.querySelector(".budget")
// const elExpense = document.querySelector(".expense")

const elBudgerExpanse = document.querySelector(".budget_expense")

const elBudgerInp = document.querySelector(".budget__input")
const elExpenseName = document.querySelector(".expensename__input")
const elExpenseInp = document.querySelector(".expense__input")

const elBudgerScore = document.querySelector(".budget__score")
const elExpenseScore = document.querySelector(".expense__score")
const elBalanse = document.querySelector(".balanse")

// VALUE

budgerlist = []
expanselist = []

elBudgerExpanse.addEventListener("submit", evt => {
    evt.preventDefault()

    // INPUT VALUE
    budgerInpValue = elBudgerInp.value
    expenseInpValue = elExpenseInp.value
    expenseNameValue = elExpenseName.value


    // PUSH LIST
    budgerlist.push(Number(budgerInpValue))
    expanselist.push(Number(expenseInpValue))


    // TEXT CONTENT
    elBudgerScore.textContent = budgerlist.reduce((a, b) => a + b)
    elExpenseScore.textContent = expanselist.reduce((a, b) => a + b)
    elBalanse.textContent = budgerlist.reduce((a, b) => a + b) - expanselist.reduce((a, b) => a + b)


    // VALUE NULL
    elExpenseName.value = null
    elExpenseInp.value = null
    elBudgerInp.value = null

})