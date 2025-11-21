function Action() {
    const text = document.getElementById("inputtext");
    const list = document.getElementById("list");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text.value;

    const dbtn = document.createElement("button");
    dbtn.textContent = 'X';

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    li.appendChild(span);
    li.appendChild(dbtn);
    list.appendChild(li);

    dbtn.addEventListener("click", () => {
        list.removeChild(li);
    });

    text.value = '';
}

