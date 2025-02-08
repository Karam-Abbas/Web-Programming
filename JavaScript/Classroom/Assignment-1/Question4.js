let candidates = [
    {
        name:"Ali",
        gpa:3.04,
        skills:["JavaScript","Node.js","React"],
        applyDate:new Date(20220412),
    },
    {
        name: "Sarah",
        gpa: 2.75,
        skills: ["Python", "Django", "PostgreSQL"],
        applyDate: new Date(20230515),
    },
    {
        name: "Mohammad",
        gpa: 3.45,
        skills: ["Java", "Spring", "MongoDB"],
        applyDate: new Date(20230601),
    },
    {
        name: "Lisa",
        gpa: 2.92,
        skills: ["C++", "AWS", "Docker"],
        applyDate: new Date(20230428),
    },
    {
        name: "Ahmed",
        gpa: 2.28,
        skills: ["PHP", "Laravel", "MySQL"],
        applyDate: new Date(20230510),
    },
    {
        name: "Emma",
        gpa: 3.67,
        skills: ["TypeScript", "Angular", "Firebase"],
        applyDate: new Date(20230525),
    }
]

const skillMatcher = (arr1,arr2) => {
    let a = arr1.filter((value)=>arr2.includes(value))
    return a.length>0 ? true : false
}

const filteringAlgorithm = (arr,reqSkills) =>{
    return arr.filter(value=>(value.gpa>=3.0 && skillMatcher(reqSkills,value.skills)))
}

const scheduleDate = arr =>{
    
}
let skillSet = ["JavaScript","React","TypeScript"]
console.log(filteringAlgorithm(candidates,skillSet))
