const str = 'xxoxoooxoooooxxxooooxxxxxyyyyllllyyy'
let os = 0
let xs = 0
let ys = 0
let ls = 0
let tmp = ''
for (const char of str) {
    if (tmp === '') {
        tmp += char
    } else if (char !== tmp)
        if (tmp === 'x') {
            xs++
        } else if (tmp === 'o') {
            os++
        } else if (tmp === 'y') {
            ys++
        } else if (tmp === 'l') {
            ls++
        }
    tmp = char
}
if (tmp === 'x') {
    xs++
} else if (tmp === 'y') {
    ys++
} else if (tmp === 'o') {
    os++
} else if (tmp === 'l') {
    ls++
}
console.log(os)
console.log(xs)
console.log(ys)
console.log(ls)
 
 