this.onmessage = function (e) {
    if (e.data.addThis !== undefined) {
        this.postMessage({
            result: e.data.addThis.num1 + e.data.addThis.num2
        })
    }
}

/*
    Web Worker has no access to

    - window object
    - document object
    - parent object

    Web Worker has access to

    - navigator object (useragent, geolocation, cookeyenabled)
    - location object (host, hostname, href, pathname, ...)
    - XMLHttpRequest
    - Application Cache
    - Importing external scripts using the importScripts() method
    - Spawning other web workers

    exit -> worker.terminate()
*/