function companyUsers(input) {
    let list = {};
    for (const item of input) {
        let [company, number] = item.split(' -> ');
        if (!list.hasOwnProperty(company)) {
            list[company] = [];
        }
        if (!list[company].includes(number)) {
            list[company].push(number);
        }
    }
    let sortedCompanies = Object.keys(list);
    sortedCompanies.sort((a, b) => a.localeCompare(b))
    for (let company of sortedCompanies) {
        console.log(company);
        for (let empl of list[company]) {
            console.log(`-- ${empl}`);

        }
    }
}