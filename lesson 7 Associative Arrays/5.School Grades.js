function solve(input) {
  let schoolGrades = new Map();
  for (entry of input) {
    entry = entry.split(" ");
    let name = entry.shift();
    let grades = entry.map(Number);
    if (schoolGrades.has(name)) {
      let currentGrades = schoolGrades.get(name);
      for (grade of grades) {
        currentGrades.push(grade);
      }
      let newGrades = currentGrades.push(grades);
      schoolGrades.set(name, newGrades);
    } else {
      schoolGrades.set(name, grades);
    }
  }
  let sortedSchoolGrades = Array.from(schoolGrades.entries());
  sortedSchoolGrades.sort((a, b) => avarageSort(a, b));
  for (gradesEntries of sortedSchoolGrades) {
    let studentName = gradesEntries[0];
    let studentGrades = gradesEntries[1];

    console.log(`${studentName}: ${studentGrades}`);
  }
  function avarageSort(a, b) {
   
    let sumA = 0
    let sumB = 0
    let gradesA = a[1]
    let gradesB = b[1]
    gradesA.forEach(ga => sumA += ga)
    gradesB.forEach(gb => sumB += gb)
    let avarageA = sumA / gradesA.length
    let avarageB = sumB / gradesB.length
    return avarageA - avarageB
     }
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
