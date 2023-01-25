const text ="Hello"
const textkub = "Prayuth"
function recursiveReverseString(text: string) : string{
    if (text.length <= 0){ // Base Case
        return ''
    }
    return recursiveReverseString(text.slice(1)) + text.charAt(0)
}
console.log(recursiveReverseString('Prayuth'))
console.log(recursiveReverseString('Hello'))

