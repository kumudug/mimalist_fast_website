import './app.scss';
console.log("empty");

let testFunc = (ab) => {
    console.log('test func'+ ab);
}

let testFunc2 = (ab, cd) => {
    console.log('test func'+ ab);
    testFunc(cd);
    //test comment1
}

//test comment 2
testFunc("adad");
testFunc2("add", "dde");