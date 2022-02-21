//Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());
  //ellie's answer
  const result = fruits.join();
  console.log(result);
}
//Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const fruits2 = [];
  const fruits3 = fruits2.concat(fruits);
  console.log(fruits3);
  //ellie's answer
  const result = fruits.split();
  console.log(result);
}
//Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const desc = array.reverse();
  console.log(desc);
  console.log(array); // 배열 자체도 reverse 됨.
}
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   const b = array.splice(0, 2);
  //   console.log(array);

  //elle's answer
  const newArr = array.slice(2, 5);
  console.log(newArr);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
const result = students.filter((student) => student.score === 90);
console.log(result);
//ellie's answer
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
const enrolledArray = students.filter((student) => student.enrolled === true);
console.log(enrolledArray);
//ellie's answer
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const onlyScore = students.map((student) => student.score);
console.log(onlyScore);

// Q8. check if there is a student with the score lower than 50
const checkedLower50 = students.some((student) => student.score < 50);
console.log(checkedLower50);
//every로도 답변 작성 가능
{
  const result = !students.every((student) => student.score >= 50);
  console.log(result);
}

// Q9. compute students' average score
const sum = onlyScore.reduce((preV, curV) => preV + curV);
const avg = sum / onlyScore.length;
console.log(sum);
console.log(avg);
//ellie's answer
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const scoreToString = onlyScore.toString();
console.log(`result should be: ${scoreToString}`);
//ellie's answer
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const sortScore = onlyScore.sort();
console.log(`result should be: ${sortScore}`);
//ellie's answer
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
