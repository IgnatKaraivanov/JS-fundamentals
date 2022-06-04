function checkOut(input) {
    let parking = {};
    for (const element of input) {
        let [command, car] = element.split(', ');
        if (command === 'IN') {
            parking[car] = command;
        } else if (command === 'OUT') {
            delete parking[car];
        }
    }
    let arrayOfKeys = Object.keys(parking);
    let sorted = arrayOfKeys.sort((a, b) => {
        return a.localeCompare(b);
    });
    if (sorted.length === 0) {
        console.log("Parking lot is Empty");
    } else {
        console.log(sorted.join("\n"));
    }
}