// Dummy candidates
let candidates = [
  {
    name: "Ali",
    gpa: 3.04,
    skills: ["JavaScript", "Node.js", "React"],
    applyDate: new Date("2022-04-12"),
  },
  {
    name: "Sarah",
    gpa: 2.75,
    skills: ["Python", "Django", "PostgreSQL"],
    applyDate: new Date("2023-05-15"),
  },
  {
    name: "Mohammad",
    gpa: 3.45,
    skills: ["Java", "Spring", "MongoDB"],
    applyDate: new Date("2023-06-01"),
  },
  {
    name: "Lisa",
    gpa: 2.92,
    skills: ["C++", "AWS", "Docker"],
    applyDate: new Date("2023-04-28"),
  },
  {
    name: "Ahmed",
    gpa: 2.28,
    skills: ["PHP", "Laravel", "MySQL"],
    applyDate: new Date("2023-05-10"),
  },
  {
    name: "Emma",
    gpa: 3.67,
    skills: ["TypeScript", "Angular", "Firebase"],
    applyDate: new Date("2023-05-25"),
  },
];

// checks if at least one skill of candidate matches the required skills
const skillMatcher = (arr1, arr2) => {
  let a = arr1.filter((value) => arr2.includes(value)); // returns the matched skills
  return a.length > 0 ? true : false; // if matched skill count > 0 returns true else false
  // used shorter syntax <condition> ? (if true this line runs) : (else this line runs)
};

// filters the candidates
const filteringAlgorithm = (arr, reqSkills) => {
  return arr.filter(
    (value) => value.gpa >= 3.0 && skillMatcher(reqSkills, value.skills) // if gpa >= 3 and any 1 skill matches the required skills list
  );
};

// adds the testDate to the selected candidates array
const scheduleDate = (arr) => {
  arr.forEach((candidate) => {
    const temp = candidate.applyDate;
    let testDate = new Date(temp);
    testDate.setDate(temp.getDate() + 5); // adding 5 days from in the applyDate
    if (testDate.getDay() === 6 || testDate.getDay() === 0) {
      // adding 2 in the apply date if day==6 means saturday and day==0 means sunday
      testDate.setDate(testDate.getDate() + 2);
    }
    candidate.testDate = testDate; // putting the testDate in the candidate property
  });
};

const finalizingCandidates = (arr) => {
  //returning the  accumulated object
  return arr.reduce((prev, curr) => {
    prev[curr.name] = curr.testDate.toDateString(); // make entries in the accumulated variable prev
    return prev; // returning the object so that it is available in the next iteration
  }, {});
};

let skillSet = ["JavaScript", "React", "TypeScript"]; // required skill set for the job
let filteredCandidates = filteringAlgorithm(candidates, skillSet); // filtered candidates
scheduleDate(filteredCandidates); // testDate added to filtered candidates
console.log(filteredCandidates); // the candidates selected with the testDate included 

const obj = finalizingCandidates(filteredCandidates)
console.log(obj) // the merged output containing the name:date pairs
