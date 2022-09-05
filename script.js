const billTotalAmt = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billTotalAmt.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100
  
  // get the total tip amount
  const totalTip = bill * tipPercent

  // calculate the total (tip amount + bill)
  const total = bill + totalTip

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total/numberOfPeople
 
  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if(numberOfPeople <= 1){
      alert('Hey! You cannot have less than one person')
    return
  }
  
  // decrement the amount of people
  numberOfPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}