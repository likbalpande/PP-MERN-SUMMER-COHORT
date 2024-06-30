// // const head = document.getElementsByTagName("h1");

// // h1.addEventListener(type, callback);

// // const handleHeadingClick = () => {
// //     console.log("Heading is clicked");
// // };

// // ------------------------form handling---------------------------

// function handleUsername(e) {
//     const username = e.currentTarget.value;
//     const helloText = document.getElementById("hello-text");
//     // username should be only in lower-case

//     // text --> "likhilesh"
//     // lowercase text --> "likhilesh"

//     // text --> "likhiLesh"
//     // lowercase text --> "likhilesh"

//     if (username.toLowerCase() !== username) {
//         alert("Please keep the username in lowercase");
//     }
//     helloText.innerText = `Hello ${username} !!`;

//     // helloText.innerText = "Hello " + e.target.value + " !";

//     // const form = document.getElementsByTagName("form")[0];

//     // form.append("Hello " + e.target.value);

//     // const text = document.createElement("p");
//     // text.innerText = e.target.value;
//     // form.appendChild(text);
// }

// function handleSubmit(e) {
//     e.preventDefault();

//     console.log("e2", e);

//     const username = e.target[0].value;
//     const password = e.target[1].value;
//     const email = e.target[2].value;

//     console.log("username is", username);
//     console.log("password is", password);
//     console.log("email is", email);

//     const regex = /.+@pp.com/;
//     if (regex.test(email)) {
//         console.log("valid email");
//     } else {
//         console.log("invalid email");
//     }

//     const card = document.getElementById("info-card");
//     card.innerHTML = `
//         <p>Username: ${username}</p>
//         <p>Password: ${password}</p>
//         <p>Email: ${email}</p>
//     `;
// }
