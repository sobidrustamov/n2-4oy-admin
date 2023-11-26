let userList = document.querySelector("#userlist");

axios.get(" http://localhost:3000/users").then((res) => {
  let users = res.data;
  console.log(users);
  users.forEach((user, index) => {
    let userItem = document.createElement("li");
    let h4 = document.createElement("h4");
    let num = document.createElement("span");
    let userImg = document.createElement("img");
    let age = document.createElement("span");
    let email = document.createElement("p");
    let password = document.createElement("p");

    if (index % 2 === 0) {
      userItem.classList.add("bg-secondary", "text-white", "rounded-2");
    } else {
      userItem.classList.add("bg-light", "rounded-2");
    }

    num.classList.add("px-2", "w-5");
    num.innerText = `${+index + 1}.`;
    h4.classList.add("w-20");
    h4.innerText = `${user.firstName} ${user.lastName}`;
    userImg.classList.add("img", "mx-3");
    userImg.setAttribute("src", `${user.image}`);
    age.classList.add("w-10", "mx-5");
    age.innerText = `Age: ${user.age}`;
    email.classList.add("w-20");
    email.innerText = `${user.email}`;
    password.innerText = `${user.password}`;
    userItem.classList.add("p-3", "d-flex", "fs-5");
    userItem.append(num, h4, userImg, age, email, password);
    userList.append(userItem);
  });
});
