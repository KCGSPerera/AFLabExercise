async function checkRoomStatus(){

    let promiseToCleanTheRoom = new Promise((resolve, reject) => {

        // cleaning the room

        let isClean = true;

        if(isClan){
            resolve('Clean');
        }else{
            reject('Not Clean');
        }
    });

    let result = await promiseToCleanTheRoom;

    // wait until the promise resolves(*)

    console.log('The Room is '+ result);

    // "Clean"

}

checkRoomStatus();