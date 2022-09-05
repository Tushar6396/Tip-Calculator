const billTotalAmt = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');


let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billTotalAmt.value);

  const tipPercent = Number(tipInput.value) / 100
  
  const totalTip = bill * tipPercent
  
  const total = bill + totalTip

  const perPersonTotal = total/numberOfPeople
 
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
  numberOfPeople += 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}

const decreasePeople = () => {
  if(numberOfPeople <= 1){
      alert('Hey! You cannot have less than one person')
    return
  }
  
  numberOfPeople -= 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}
