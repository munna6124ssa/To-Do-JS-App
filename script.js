
let container = document.querySelector(".container")

let btn = document.querySelector("button")
btn.style.borderRadius = "15px"
let input = document.querySelector(".input")
input.style.borderRadius = "22px"
let list = document.querySelector(".list")

btn.addEventListener("click", function () {
    if (input.value === "") return;

    let todoBox = document.createElement("div");
    let elm = document.createElement("div");
    let chkbox = document.createElement("input");
    chkbox.setAttribute("type","checkBox");
    let editBtn =document.createElement("button");
    editBtn.className = "editbtn";
    editBtn.innerHTML = "<i class='ri-edit-2-fill'></i>";
    editBtn.style.fontSize = "22px"
    let detlBtn = document.createElement("button");
    detlBtn.className = "delbtn";
    detlBtn.innerHTML = "<i class='ri-delete-bin-6-line'></i>"
    detlBtn.style.fontSize = "22px"
    elm.innerHTML = input.value ;


    chkbox.addEventListener("change", (e) => {
        if (chkbox.checked) {
            elm.style.textDecoration = "line-through"
            editBtn.disabled = true;
        } else {
            elm.style.textDecoration = "none";
            editBtn.disabled = false;
        }
    })

    detlBtn.addEventListener("click", () => {
        todoBox.remove();
    })
        editBtn.addEventListener("click", function() {
            const editContainer = document.createElement("div");
            editContainer.classList.add("editcontainer");
            const editInput = document.createElement("input");
            editInput.setAttribute("type", "text");
            editInput.style.padding = "8px 12px";
            editInput.style.fontSize = "1.3rem";
            editInput.style.borderRadius = "22px";
            editInput.style.border = "none";

            editInput.value = elm.textContent;
            const confirmBtn = document.createElement("button");
            confirmBtn.innerHTML = "<i class='ri-check-double-fill'></i>";
            confirmBtn.style.fontSize = "22px";
            confirmBtn.style.color = "black"
            confirmBtn.addEventListener("click", () => {
                elm.textContent = editInput.value;
                editContainer.remove();
            })
            editContainer.append(editInput);
            editContainer.append(confirmBtn);
            document.querySelector("body").appendChild(editContainer);
        })

    todoBox.appendChild(elm);
    todoBox.appendChild(chkbox);
    todoBox.appendChild(editBtn);
    todoBox.appendChild(detlBtn);
    list.appendChild(todoBox);
    input.value = "";

})
