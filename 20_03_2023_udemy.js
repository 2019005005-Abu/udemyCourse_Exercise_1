const rifat={
    firstName:'Abu Al Shahriar',
    lastName:'rifat',
    birthday:1997,
    job:'Software Enginner',
    friends:['Muin','Akash'],
    hasDrivingLicsenes:true,
    calcAge:function(birthYear){
        return 2023-birthYear;
    },
    FullName:function(firstName,lastName){
        return firstName+" "+lastName
    },
    CalculationAge:function(){
        return 2023-this.birthday
    },
    CalculatingAge1:function(){
        this.age=2023-this.birthday
        return this.age;
    },
    getSummary:function(){
     this.Bio= `${this.firstName} ${this.lastName} ${this.friends} I have ${this.hasDrivingLicsenes} and I am a ${this.job} My Birthday Is ${this.birthday} and I am Now ${2023-this.birthday} years old`
     return this.Bio;
    }

}

let myAge=rifat.calcAge(1997);
console.log(myAge);
let FullName=rifat.FullName("Abu Al Shahriar","Rifat")
console.log(FullName);

let calculatingBirthDay=rifat.CalculationAge();
console.log(calculatingBirthDay)

let calculatingMyAge=rifat.CalculatingAge1()
console.log(calculatingMyAge);

//challenge
// Jonas is a 26 yaers old computer programmer and he has 
//a driver "license"

console.log(rifat.getSummary())

//coding challenge

const mark={
    fullName:"Mark Miller",
    mas:70,
    height:1.59,
    calculation_BMI_1:function(){
    this.BMI=this.mas/this.height**2;
    return this.BMI;
    }
}
const jog={
    fullName:"John smith",
    mas:92,
    height:1.95,
    calculating_BMI_2:function(){
        this.BMI=this.mas/this.height**2
        return this.BMI
    }
    
}

console.log( Math.floor(mark.calculation_BMI_1()));
console.log(Math.floor(jog.calculating_BMI_2()));

if(mark.BMI>jog.BMI){
    console.log(` ${mark.fullName} BMI ${mark.calculation_BMI_1} is higher than ${jog.fullName} BMI ${jog.calculating_BMI_2}`)
}else if(jog.BMI>mark.BMI){
    console.log(` ${jog.fullName} BMI ${jog.calculation_BMI_1} is higher than ${mark.fullName} BMI ${mark.calculating_BMI_2}`)
}else{
    console.log("Nothing")
}

const RifatArray=[
    'rifat',
    'Shahriar',
    2023-1997,
    'Software Enginner',
    ['Bangladesh','India','Thailand']
]
const types=[];
for(let i=0;i<RifatArray.length;i++){
    console.log(RifatArray[i]
        ,typeof(RifatArray[i]));
    types[i]=typeof RifatArray[i];
    types.push(typeof RifatArray[i]);
}
console.log(types);

const years=[1991,1992,1993,1979,1945];
for(let i=0;i<years.length;i++){
    console.log(years[i])
}
const age=[]

for(let i=0;i<years.length;i++){
    age.push=(2023-years[i]);
}
console.log(age);

for(let i=0;i<RifatArray.length;i++){
    if(typeof RifatArray[i] !== 'string'){
        continue;
    }
    console.log(RifatArray[i],typeof RifatArray[i])
}
console.log("\n");
for(let i=0;i<RifatArray.length;i++){
    if(typeof RifatArray[i] !=='string'){
        break;
    }
    console.log(RifatArray[i],typeof RifatArray[i]);
}

//Looping backward 
console.log("\n")
for(let i=RifatArray.length-1;i>=0;i--){
  console.log(i+"-",RifatArray[i])
}
// lope inside in lope

for(let excercise=1;excercise<=4;excercise++){
    console.log(`---- starting exercise---- ${excercise}`);
    for(let rep=1;rep<6;rep++){
      console.log(`Lifting weight repetation ${rep}`)
    }
}










