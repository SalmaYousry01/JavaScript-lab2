var count = parseInt(prompt("Enter # of Numbers You Want To Sum And Get The Average Of"));
var numbers = [];
sum = 0;
avg = 0;
for (let i = 0; i < count; i++) {
    numbers[i] = parseInt(prompt(`Enter Number #${i + 1}`));
    console.log(numbers);
    sum = sum + numbers[i];
}
avg = sum / count;
alert(`Sum = ${sum}`);
alert(`Average = ${avg}`);