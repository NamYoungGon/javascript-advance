const x = function (...n) {
    console.log(n)
}

// [ 1, 2, 3, 4 ]
x(1, 2, 3, 4)

const dowhatever = ['have fun', 'have morefun', 'have even more fun']
const life = ['born', 'learn to walk', 'learn js', ...dowhatever, 'go to heaven']

/*
[ 'born',
  'learn to walk',
  'learn js',
  'have fun',
  'have morefun',
  'have even more fun',
  'go to heaven' ]
*/
console.log(life)

const a = [1, 2, 3]
const b = [4, 5, 6]

a.push(...b)

// [ 1, 2, 3, 4, 5, 6 ]
console.log(a)