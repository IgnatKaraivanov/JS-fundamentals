function companyUsers(arr) {
    let cInfo = {};

    for (let line of arr) {
        let ids = line.split(" -> ");
        let company = ids.shift();

        if (!cInfo.hasOwnProperty(company)) {
            cInfo[company] = new Set();
        }

        for (let employee of ids) {
            cInfo[company].add(employee);
        }
    }

    let entries = Object.entries(cInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, ids] of entries) {
        console.log(company);
        for (let id of ids) {
            console.log(`-- ${id}`);
        }
    }
}