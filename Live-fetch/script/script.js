// main.js...

// 1. GET request using fetch()
fetch("https://mocki.io/v1/d3c9cb0a-f285-4b4e-b39c-30055211b13f")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  // 2. Create a variable to store HTML table headers
    let li = `<tr><th>id</th><th>Name</th><th>Age</th><th>Course</th><th>Grade</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
        <td>${user.id} </td>
        <td>${user.Student_name +(' ')+ user.Student_lastname} </td>
        <td>${user.Student_age}</td>
        <td>${user.Student_course}</td>
        <td>${user.Student_grade}</td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  });

// main.js

// // 5. POST request using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   // 6. Adding method type
//   method: "POST",

//   // 7. Adding body or contents to send JSON Stringify
// //   body: JSON.stringify({
// //     title: "foo",
// //     body: "bar",
// //     userId: 1
// //   }),

//   // 8. Adding headers to the request
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   // 9. Converting to JSON
//   .then((response) => response.json())

//   // 10. Displaying results to console
//   .then((json) => console.log(json));