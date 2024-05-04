let val = 10

/*val += 5
console.log(val)
val += 5
console.log(val )
val += 5
console.log(val)*/

for(var i = 1; i <= 3; i++){
    val+=5
    console.log(val)
}
console.log(i)

console.log(10 % 2 == 0)
console.log(7 % 5 == 3)
console.log(9 % 3 == 3)
console.log(9 % 2 == 1)

// 2 - 10
/*
2
4
6
8
10
*/

val2 = 0;
for(let j = 2; j <= 10; j+=2){
    console.log(j)
}

for(let k = 1; k <= 10; k++){
    if(k % 2 == 0){
        console.log(k)
    }
}

let start = 1
while(start <= 3){
    console.log("ini")
    start++
}
console.log(start)

console.log("==============")
start2 = 1
do {
    console.log("do while ", start2)
    start2++
} while(start2 < 10)
console.log(start2)

for(let i = 0; i <= 0; i++){
    console.log("hello")
    if(i == 3){
        break
    }
}

for(let i = 0; i < 5; i++){
    console.log(" dio says : ")
    if(i === 3) continue
    console.log("za warudo ", i)
}

let name = "aries dimas yudhistira"
let count = 0
for(let i = 0; i < name.length; i++){
    console.log(name[i])
    if(name[i] == "a"){
        count++
    }
}
console.log(count)