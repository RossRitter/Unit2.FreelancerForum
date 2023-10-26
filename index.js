// make a header 
//make an array with name, price, and job or occupation 
// make a average starting price. 
// title for a array "Available Freelancers"

const freelancers = [
  {name:'Alice', price: 30, occupation: 'Writer'},
  {name:'Bob', price: 50, occupation: 'Teacher'},
  {name:'Prof. Ritter', price: 100, occupation: 'History Professor'},
  {name:'Dr. Fuzzari', price: 200, occupation: 'Doctor'},
  {name:'Mr. Willis', price: 50, occupation: 'Salesman'},
  {name:'Mr. Brown', price: 45, occupation: 'Teacher'},
  {name:'Ms. Jones ', price: 15, occupation: 'Writer'},
];
function freelancersArray(){
  let freeArray = document.getElementById('freeArray')

  for (let i = 0; i < freelancers.length; i++){
    let currentFreelance = freelancers[i]

  let freelancersDiv = document.createElement('div')
  freelancersDiv.className = 'freelancers'

  freelancersDiv.innerHTML = `<h2>Name</h2>
                              <h4> ${currentFreelance.name}</h4>
                              <h2> Price</h2>
                              <h4> ${currentFreelance.price}</h4>
                              <h2> Occupation<h2>
                              <h4> ${currentFreelance.occupation}</h4>`
    
  }
}