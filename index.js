function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation);
}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}


function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    const freeFeet = 400;
    const standardRate = 0.02;
    const maxDistance = 2500;
    const flatRate = 25; 

    if (distanceInFeet <= freeFeet) {
        return 0;
    } else if (distanceInFeet > freeFeet && distanceInFeet <= 2000) {
        return (distanceInFeet - freeFeet) * standardRate;
    } else if (distanceInFeet > 2000 && distanceInFeet <= maxDistance) {
        return flatRate; 
    } else {
        return 'cannot travel that far'; 
    }
}
