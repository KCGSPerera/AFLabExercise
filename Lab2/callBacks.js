function greeting(name, callback){
    console.log('Hello ' + name);
    callback();
}

// callback fucntion

function showDone(){
    console.log('Done greeting!')
}

// pasing function as an argument

greeting('Alice', showDone);

