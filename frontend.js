let customerList = document.querySelector('#users')
// let customerName = document.querySelector()
let addButton = document.querySelector('.add-button')
let removeButton = document.querySelector('.remove')
let debtButton = document.querySelector('.debt')
let loanAmount = document.querySelector('#dollar')

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
  newCustomer.id = 'debtor'
  newDollar.innerText = obj.loan;
  
  newCustomer.appendChild(newDollar)
  customerList.appendChild(newCustomer)
  customerList.classList.add('debtor')
  newDollar.classList.add('debt')

}

addButton.addEventListener('click', addDebtor)


let removeDebtor = function(event){
  event.preventDefault()
  let text = document.querySelector('#text-box')
  let customers = document.querySelectorAll('#debtor')

  for(const customer of customers){
    
    if(customer.innerText.includes(text.value)){
      console.log(customer.innerText)
      customer.remove()
    }
  }

}

removeButton.addEventListener('click', removeDebtor)

let adjustDebt = function(event){
  event.preventDefault()
  let text = document.querySelector('#text-box')
  let customers = document.querySelectorAll('#debtor')
  
  for(const customer of customers){
    
    if(customer.innerText.includes(text.value)){
     console.log(customer.firstChild)
      
    }
  } 
}

debtButton.addEventListener('click', adjustDebt)
