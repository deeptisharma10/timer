
const dtdate = "March 14 2023 02:58:00 PM"
// console.log(dtdate)

document.getElementById("dtdate").innerText = dtdate;
const inputs = document.querySelectorAll("input");
// console.log(parseInt(inputs[0].value[0]))
function timer() {
    const end = new Date(dtdate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff)
    if (diff < 0) return;
   inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
timer()

console.log(timer())

setInterval(
    () => {
        timer()
    },
    1000
)
