let customerList = document.querySelector('#users')
// let customerName = document.querySelector()
let addButton = document.querySelector('.add-button')



let addDebtor = function(event){
  event.preventDefault()
  let text = document.querySelector('#text-box')
  let dollarValue = document.querySelector('#dollar')
  let obj = {
    name: text.value,
    loan: dollarValue.value
}
  let newCustomer = document.createElement('div')
  let newDollar = document.createElement('div')

  newCustomer.innerText = obj.name;
  newDollar.innerText = obj.loan;
  
  newCustomer.appendChild(newDollar)
  customerList.appendChild(newCustomer)
  customerList.classList.add('debtor')

}

addButton.addEventListener('click', addDebtor)


