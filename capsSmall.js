let input = "success" // SuCcEsS
input = input.split("");
let temp_arr = []
for (let i = 0; i < input.length; i++) {
    if(i===0 || i%2 === 0) temp_arr.push(input[i].toUpperCase())
    else temp_arr.push(input[i])
}
console.log(temp_arr.join(""))