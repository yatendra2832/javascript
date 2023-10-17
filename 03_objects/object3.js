const course={
    courseName:"Javascript Tutorial",
    price:999,
    courseInstructor:"Yatendra Singh"

}

// by that we can print the objects destructure
const {courseInstructor}=course
console.log(courseInstructor);
//this is the another way of accessing value we can also give the name according to our comfort as courseInstructor:instructor
const {courseInstructor:instructor}=course
console.log(instructor);
// Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables. It provides a convenient way to access and work with the properties of an object without having to use dot notation for each property. This can make your code cleaner and more concise.
// json object
// {
//     "courseName":"Javascript Tutorial",
//     "price":"999",
//     "courseInstructor":"Yatendra Singh"
// }
