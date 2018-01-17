const obj = { num : 2 }

const functionName = function (arg1, arg2, arg3) {
    
}

functionName.call(obj, arg1, arg2, arg3)
functionName.apply(obj, [arg1, arg2, arg3])

const bound = functionName.bind(obj)
bound(arg1, arg2, arg3)
