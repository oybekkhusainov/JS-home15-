const saveBtn = document.querySelector("#save-btn");
const addBtn = document.querySelector("#add-btn");
const delateBtn = document.querySelector("#delate-btn");
const clearbtn = document.querySelector("#clear-btn")

let user = [{
    _id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}]

saveBtn.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(user))

});
addBtn.addEventListener("click", ()=> {
    alert ("Add new user")
    let listuser = JSON.parse(localStorage.getItem("user"));


    let name = prompt("Enter name");
    let username = prompt("Enter username");
    let email = prompt("Enter email");
    let newUser = {
        _id: listuser.length + 1,
        name,
        username,
        email,
    }
    listuser.push(newUser);
    localStorage.setItem("user",JSON.stringify(listuser));


});
delateBtn.addEventListener("click", ()=> {
    let delateUser = prompt("delate user");

    let listuser = JSON.parse(localStorage.getItem("user"));

    let userposition = listuser.findIndex(p => p.name === delateUser);
    listuser.splice(userposition,1);
    localStorage.setItem("user ",JSON.stringify(listuser));
});

clearbtn.addEventListener("click", ()=> {

    let agree = confirm("clear all");

    if(agree){
        localStorage.clear();
    }

});