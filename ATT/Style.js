// navbar
let loadercontainer = document.querySelector('.loadercontainer')
setTimeout(() => {
    loadercontainer.style.display ='none'
}, 2000);



let ul = document.querySelector('nav ul')
let ulA = document.querySelectorAll('nav ul a')
let menu = document.querySelector('.menu')


menu.addEventListener('click',()=>{
    if(ul.className !== 'active'){
        ul.classList.add('active')
    }else{
        ul.classList.remove('active')
    }
})

ulA.forEach((val)=>{
    val.addEventListener('click',()=>{
        ul.classList.remove('active')
    })
})
// navbar///////////////
let fanlar = [`Ta'lim.Y.K `,`Texnik.T.A.T `,`Oliy-matematika `,`Ingliz-tili `,`Rus-tili `]
let fancount = 0
let fanlarbtns = document.querySelector('.fanlarbtns');
let fantext = document.querySelector('.fantext');
function fanlardatafun(){
    fanlarbtns.innerHTML = ''
    fanlar.forEach((val,i)=>{
        fanlarbtns.innerHTML+=`
          <button class="fanlarbtn ${fancount === i ?'active':''}" key=${i} onclick="fanfun(${i})">${val}</button>
        `
    })
}
fanlardatafun()
fantext.innerHTML = fanlar[fancount]
function fanfun(i){
    fancount = i
    fanlardatafun()
    ustozlarfunfun()
    fantext.innerHTML = fanlar[fancount]
}



let savollar = [
    { id: 1, savol: 'Kompyuterning asosiy qurilmalari nimalardan iborat?', a: 'Sistemali blok, monitor, klaviatura, sichqoncha  ', b: 'Modem, printer, monitor, klaviatura ', c: 'Sistemali blok, printer, klaviatura, sichqoncha' },
    { id: 2, savol: 'Monitor  so’zining  ma’nosini toping?.', a: 'Lotincha   “eslatuvchi, xabar  beruvchi” ', b: 'Inglizcha   eslatuvchi', c: 'Grekcha   eslatuvch ', d: 'Grekcha  “ eslatuvchi, xabar  beruvchi' },
    { id: 3, savol: 'Magnit discklariga axborot qaysi qurilma yordamida yoziladi?', a: 'Proector', b: 'Printer   ', c: 'Nurli pero', d: 'Disckyugurtich' },
    { id: 4, savol: 'Algoritim bu-nima deyiladi ?', a: 'ko’rsatmalar ', b: 'tartib buzilishi ', c: 'buyruqlarning ketma –ketligi ', d: 'mo’ljallangan narsa ' },
    { id: 5, savol: 'Kibernetika maktabining asoschisi kim? ', a: 'Vasil Qobilov  ', b: 'Vasil Ahmedov ', c: ' Jordan ', d: 'Fleming  ' },
    { id: 6, savol: 'Qachon 1-kompyuter yaratildi?', a: '1977 ', b: '1973 ', c: '1968 ', d: '1912 ' },
    { id: 7, savol: 'Fayl so`zining manosi?', a: 'maydon', b: 'amal  ', c: 'malumot ', d: ' adres ' },
    { id: 8, savol: 'Ma’lumotlar ombori nima ?', a: 'Xotirada saqlanayotgan ixtiyoriy ma’lumot.', b: 'Borliqni ma’lum bir sohasi bo`yicha birlashtirgan ma’lumotlar to`plami.  ', c: 'Biror dasturlash tilida tuzilgan dastur. ', d: ' Ixtiyoriy matn ko`rinishidagi axborot.     ' },
    { id: 9, savol: 'EXCELda tayyorlangan  hujjat qanday kengaytmada faylda saqlanadi?  ', a: '.DOS', b: '.TXT  ', c: '.XLS ', d: ' .BAS ' },
    { id: 10, savol: 'Izlash  va almashtirish  uchun  muloqot  oynasini  chiqarish  uchun  qaysi tugmalar  jufti  bosiladi?. ', a: 'Ctrl+F', b: 'Ctrl+D ', c: 'Ctrl+N', d: 'Ctrl+C' },
]

let javob = []
let javobvariant = ['a', 'b', 'c', 'd']
let tugrijavoblar = ['a', 'a', 'd', 'c','a','b','c','b','c','a']
let uyinchilar = [
    { id: 1, name: '' },
    { id: 2, name: 'Doniyorbek' },
    { id: 3, name: 'Doniyorbek2' },
    { id: 4, name: 'Doniyorbek3' },
    { id: 5, name: 'Doniyorbek4' },
    { id: 6, name: 'Doniyorbek5' }
]


let uyincard = document.querySelector('#uyinchi');
let uyinbody = document.querySelector('.uyinbody');
let secund = document.querySelector('.secund');
let uyinchi = '';
let uyinchilardata = [
    { id: 1, name: 'Doniyorbek Tursunov', strs: 3, img: './img/doniyor.jpg' },
    { id: 2, name: 'Doniyorbek Tursunov2', strs: 5, img: './img/doniyor.jpg' },
    { id: 3, name: 'Doniyorbek Tursunov3', strs: 2, img: './img/doniyor.jpg' },
    { id: 4, name: 'Doniyorbek Tursunov4', strs: 6, img: './img/doniyor.jpg' },
    { id: 5, name: 'Doniyorbek Tursunov5', strs: 3, img: './img/doniyor.jpg' },
    { id: 6, name: 'Doniyorbek Tursunov5', strs: 3, img: './img/doniyor.jpg' },
    { id: 7, name: 'Doniyorbek Tursunov5', strs: 3, img: './img/doniyor.jpg' },
    { id: 8, name: 'Doniyorbek Tursunov5', strs: 1, img: './img/doniyor.jpg' },
    { id: 9, name: 'Doniyorbek Tursunov5', strs: 3, img: './img/doniyor.jpg' },
    { id: 10, name: 'Doniyorbek Tursunov5', strs: 5, img: './img/doniyor.jpg' },
    { id: 11, name: 'Doniyorbek Tursunov5', strs: 3, img: './img/doniyor.jpg' },
    { id: 12, name: 'Doniyorbek Tursunov5', strs: 5, img: './img/doniyor.jpg' },
];
let ustozlardata = [
    { id: 1, name: `Ibrohim G'ofurjanov`, img: './img/ibrohimd.jpg', strs: 5 },
    { id: 2, name: `Ibrohim G'ofurjanov`, img: './img/ibrohimd.jpg', strs: 5 },
    { id: 3, name: 'Aaaaaaaa Tttttttttt', img: './img/ustoz.png', strs: 5 },
    { id: 4, name: 'Aaaaaaaa Tttttttttt', img: './img/ustoz.png', strs: 5 },
    { id: 5, name: 'Saida Abdullayeva', img: './img/saidaoya.jpg', strs: 5 },
]





uyinchilardata.map((val, i) => (
    uyincard.innerHTML += `
        <option value=${val.id} key=${i}>${val.name}</option>
      `
))

// uyinchi select
uyincard.value = ''
let uyinchiprofil = ''
let profilcard = document.querySelector('.profilcard')
uyincard.addEventListener('change', (e) => {
    console.log(e.target.value);
    uyinchi = uyinchilardata.filter((val) => val.id === e.target.value ? val.name : '')
    uyinchiprofil = uyinchilardata.filter((val) => val.id == e.target.value)
    uyinchiprofil = uyinchiprofil[0]
    profilcard.innerHTML = `
        <h2 class="title">${uyinchiprofil.name}  <img src=${uyinchiprofil.img} alt=""></h2>
    `

})


function uyinfunc() {
    uyinbody.innerHTML =
        uyinchi !== '' ?
            ` 
   <p class="savol">${savollar[savolcount].savol}</p>
   <div class="variant">
     <button  onclick='javobfun(${0})'>A)  <span>${savollar[savolcount].a}</span></button>
     <button   onclick='javobfun(${1})'>B)  <span>${savollar[savolcount].b}</span></button>
     <button  onclick='javobfun(${2})'>C)  <span>${savollar[savolcount].c}</span></button>
     ${savollar[savolcount].d ? `<button   onclick='javobfun(${3})'>D)   <span>${savollar[savolcount].d}</span></button>` : ''} 
   </div>
   <div class="uyinbodyfooter">
     <button class="next" onclick='savolcountfun()'>Next </button>
     <button class="clear"  onclick='Clearcountfun()'>Clear </button>
   </div>
   <div class="uyinmodal ">
   <div class="uyinmodalcard">
      
   </div>
</div>
 </>`
            : `<div class='startcard'><button class='start' onclick='startfun()'>Start</button></div>`
}
uyinfunc()


/// ///////////////

let b = 0;
let yakunresult = false
let secfun = setInterval(secuntfun, 1000);
clearInterval(secfun)
function startfun() {
    if(!uyinchi){
        uyincard.style.border ='2px solid red'
    }else{
        uyinfunc()
        secfun = setInterval(secuntfun, 1000);
        b = 0 
    }
}

function secuntfun() {
    b++
    secund.innerHTML = b
}
let savolcounttext = document.querySelector('.savolcount');
let savolcount = 0;
savolcounttext.innerHTML = savolcount + 1  +` / `+savollar.length
function savolcountfun() {
    if (savolcount < savollar.length - 1) {
        savolcount++
    } else {
        let a = setTimeout(yakunalert, 100)
        savolcount = 0
        yakunresult = true
        clearInterval(secfun)
    }
    savolcounttext.innerHTML = savolcount + 1 +` / `+savollar.length
    uyinfunc()
}
// Clearcountfun
function Clearcountfun() {
    savolcount = 0
    savolcounttext.innerHTML = savolcount + 1  +` / `+savollar.length
    clearInterval(secfun)
    secund.innerHTML = 0
    uyinchi = ''
    uyincard.value = ''
    uyinfunc()
    profilcard.innerHTML = ''
}

// javob
function javobfun(i) {
    let variant = document.querySelectorAll('.variant > button')
    javob.push(javobvariant[i])

    if (javob.flat('').reverse().slice(0, 1)[0] === tugrijavoblar[savolcount]) {
        variant[i].classList.add('ok')
        let a = setTimeout(okalert, 300)
    } else {
        variant[i].classList.add('err')
        let a = setTimeout(erralert, 300)
    }
}
// ///uyinmodalfun
// alertalr
function okalert() {
    let uyinmodal = document.querySelector('.uyinmodal')
    let uyinmodalcard = document.querySelector('.uyinmodalcard')
    uyinmodalcard.innerHTML = `
    <img src="./img/ok.png" alt="">
    <button class='next' onclick='uyinmodalfun()'>Next</button>
    `
    uyinmodal.classList.add('active')
}
function erralert() {
    let uyinmodal = document.querySelector('.uyinmodal')
    let uyinmodalcard = document.querySelector('.uyinmodalcard')
    uyinmodalcard.innerHTML = `
      <img src="./img/err.png" alt="" class='errimg'>
      <button class='next' onclick='uyinmodalfun()'>Next</button>
    `
    uyinmodal.classList.add('active')
}
function yakunalert() {
    let uyinmodal = document.querySelector('.uyinmodal')
    let uyinmodalcard = document.querySelector('.uyinmodalcard')
    let yakun = javob.filter((val, i) => javob[i] === tugrijavoblar[i])
    let foiz = 100 / tugrijavoblar.length
    uyinmodalcard.innerHTML = `
    <h1 class='blacktitle'> <img  src=${Math.floor(foiz * yakun.length) > 70 ? './img/yutuqimg.png' : './img/yutuqimg3.png'} alt='' class='modalyakunimg' />   ${Math.floor(foiz * yakun.length)} %  ya'ni ${yakun.length} ta to'g'ri   bajardingiz !!  <img src=${(foiz * yakun.length) > 70 ? './img/yutuqimg2.png' : './img/yutuqimg3.png'} alt=''  class='modalyakunimg' /></h1>
        <div class='modalyacunprofil'>
        <img src=${uyinchiprofil.img} alt="" class=''>
        <h2 class="title">${uyinchiprofil.name}</h2>
        </div>   
        ${yakunresult ? `<button class='next' onclick='uyinmodalfunStart()'>Start</button>` : `<button class='next' onclick='uyinmodalfunyakun()'>Next</button>`}
    `
    uyinmodal.classList.add('active')
    secund.innerHTML = 0
}
function uyinmodalfunyakun() {
    let uyinmodal = document.querySelector('.uyinmodal')
    uyinmodal.classList.remove('active')
}
// uyinmodalfunStart
function uyinmodalfunStart() {
    uyinfunc()
    b = 0
    secfun = setInterval(secuntfun, 1000);
}
// alertalr
function uyinmodalfun() {
    let uyinmodal = document.querySelector('.uyinmodal')
    uyinmodal.classList.remove('active')
    savolcountfun()
}



// uyinchilar
let uyinchilarcards = document.querySelector('.uyinchilarcards')
let uyinchilarcards2 = document.querySelector('.uyinchilarcards2')
let ustozlarcard = document.querySelector('.ustozlarcard')
function uyinchilarfun() {
    uyinchilardata.filter((val) => val.strs >= 4).map((val, i) => {
        uyinchilarcards.innerHTML += `
        <div class="uyinchicard">
        <div class="imgcard"><img src="./img/doniyor.jpg" alt="" class="img"></div>
        <div class="satrs">
           ${Array(val.strs).fill('').map((img) => (
            `<img src='./img/star.png' alt=""/>`
        ))
            }
        </div>
        <h3 class="name">${val.name}</h3>
    </div>
        `
    })

}
uyinchilarfun()
function uyinchilarfun2() {
    uyinchilardata.filter((val) => val.strs < 4).map((val, i) => {
        uyinchilarcards2.innerHTML += `
        <div class="uyinchicard">
        <div class="imgcard"><img src="./img/doniyor.jpg" alt="" class="img"></div>
        <div class="satrs">
           ${Array(val.strs).fill('').map((img) => (
            `<img src='./img/star.png' alt=""/>`
        ))
            }
        </div>
        <h3 class="name">${val.name}</h3>
    </div>
        `
    })

}
uyinchilarfun2()


function ustozlarfunfun() {
    ustozlarcard.innerHTML =''
    ustozlardata.map((val, i) => {
        ustozlarcard.innerHTML += `
        <div class=" uyinchicard ${fancount===i?'active':''} " onclick="fanfun(${i})">
        <div class="imgcard"><img src=${val.img} alt="" class="img"></div>
        <div class="satrs">
           ${Array(val.strs).fill('').map((img) => (
            `<img src='./img/star.png' alt=""/>`
        ))
            }
        </div>
        <h3 class="name">${val.name}</h3>
    </div>
        `
    })

}
ustozlarfunfun()









// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
// })
// document.onkeydown = function (e){
//    if(event.keyCode == 123){
//     return false
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//      return false
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
//      return false
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//      return false
//    }
//    if(e.ctrlKey &&  e.keyCode == 'U'.charCodeAt(0)){
//      return false
//    }


// }
