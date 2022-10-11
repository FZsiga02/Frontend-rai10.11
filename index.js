
document.addEventListener('DOMContentLoaded', () => {
    let a = [];
    for (let i = 0; i < 20; i++){
        a.push(Math.round(Math.random() * (30 - 1) + 1));
    }
    console.log(a);
    

    document.getElementById('sort').addEventListener('click', () => {
        let b = [];
        a.forEach((e, index) => {
        if (a[index] %5 == 0){
            b.push(e)
        }
    })
    console.log(b);
    })

    document.getElementById('add').addEventListener('click', () => {
        a.push(parseInt(document.getElementById('number').value));
        console.log(a);
    })
    
    class Szazlabu {

        labakSzama

        constructor() {
            this.labakSzama = labakSzama;
        }

        toString(){
            return `${this.labakSzama} lábú százlábú`
        }
    }

    function labakbolSzazlabuk(array){
        let centipedes = [];
        array.forEach(e => {
            centipedes.push(new Szazlabu(e));
        })
    }

    function szazlabuMegjelenites(text, list){
        let output = document.getElementById(text);
        list.forEach(e => {
            let item = document.getElementById('textarea');
            item.textContent = e;
            output.appendChild(item);
        })
    }
    
})
