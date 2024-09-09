
function verify() {
    console.log("init function");
    const tabError = new Array(6);
    const tabID = new Array(6);
    const first = document.getElementById("first");
    const last = document.getElementById("last");
    const email = document.getElementById("email");
    const textarea = document.getElementById("textarea");
    const check = document.getElementById("check");
    const general = document.getElementById("general");
    const support = document.getElementById("support");
    let flag = true

    first.value != "" ? tabError[0] = 1 : tabError[0] = 0;
    last.value != "" ? tabError[1] = 1 : tabError[1] = 0;
    email.value.includes("@") && email.value.includes(".") ? tabError[2] = 1 : tabError[2] = 0;
    textarea.value != "" ? tabError[3] = 1 : tabError[3] = 0;
    check.checked ? tabError[4] = 1 : tabError[4] = 0;
    general.checked || support.checked ? tabError[5] = 1 : tabError[5] = 0;
    for (let index = 0; index < tabError.length; index++) {
        tabID[index] = "item"+index;
        console.log(tabID[index])
    }

    for (let index = 0; index < tabError.length; index++) {
        if(tabError[index] == 0){
            document.getElementById(tabID[index]).style.display = "block";
            flag = false;
        }
        
    }

    if (flag) {
        alert("Message sent! \n Thanks for completing the form. We'Il be in touch soon!")
    }
}