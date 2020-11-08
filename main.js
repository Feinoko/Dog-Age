/*Dogs mature at a faster rate than human beings. 
We often say a dog’s age can be calculated in “dog years” to account
for their growth compared to a human of the same age.
In some ways we could say, time moves quickly for dogs — 8 years in
a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it!
With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
*/

let launchBox = document.querySelector('p');

launchBox.addEventListener('click', convertDog);

function convertDog() {
   let humanAge = Number(prompt('how old are you?'));
   if (typeof(humanAge) != 'number' || humanAge == 0) {
      alert('Not a valid input, enter a number that is not 0, foo!');
      convertDog();
   } else {
      let firstTwoYears = (humanAge - (humanAge - 2)) * 10.5;
      let dogAge = firstTwoYears + (humanAge - 2) * 4
      launchBox.textContent = `your age in dog years is : ${dogAge}`;
      alert(`your age in dog years is : ${dogAge}!`);
      launchBox.textContent = 'try me again (click)';
   }

}
