const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const rightConfiguration = [1,1,2,2,2,8]
let givenConfiguration = []
let fixedConfiguration = []

const parseInput = input => {
    const str = input.split(' ')
    str.forEach(num => {
        givenConfiguration.push(parseInt(num,10))
    })
}

const fix = () => {
    for(let i = 0; i < 6; i++)
        fixedConfiguration.push(rightConfiguration[i] - givenConfiguration[i])
}

const print = () => {
    console.log(fixedConfiguration.toString().replace(/,/, ' ').replace(/,/, ' ').replace(/,/, ' ').replace(/,/, ' ').replace(/,/, ' '))
}

rl.on('line', input => {
    parseInput(input)
    fix()
    print()
    rl.close()
})