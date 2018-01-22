// https://fiddle.jshell.net/ 에서 테스트

let lipstick = function (target) {
    target.lips = 'pink'
}

@lipstick
class Girl {

}

console.log(`Her lips are ${Girl.lips}`)