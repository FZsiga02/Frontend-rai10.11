
document.addEventListener('DOMContentLoaded', () => {
    let a = [];
    for (let i = 0; i < 20; i++){
        a.push(Math.round(Math.random() * (30 - 1) + 1));
    }
    console.log(a);
    let b = [];
    a.forEach((e, index) => {
        if (a[index] %5 == 0){
            b.push(e)
        }
    })
    console.log(b);
})
