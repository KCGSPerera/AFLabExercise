let promiseToCleanRoom = new Promise(function(resolve,reject){

    // clean the room

    let isClean = true;

    if(isClean){
        resolve('Clean');
    }else{
        reject('Not Clean');
    }
});

promiseToCleanRoom.then(function(fromResolve){

    console.log('The Room is ' + fromResolve);

}).catch(function(fromReject){

    console.log('The Roomm is '+ fromReject );
})