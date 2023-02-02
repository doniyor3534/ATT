let savollar = [
    { id: 1, savol: 'Kompyuterning asosiy qurilmalari nimalardan iborat?', a: 'Sistemali blok, monitor, klaviatura, sichqoncha  ', b: 'Modem, printer, monitor, klaviatura ', c: 'Sistemali blok, printer, klaviatura, sichqoncha', d: 'A va B' },
    { id: 2, savol: 'Monitor  so’zining  ma’nosini toping?.', a: 'Lotincha   “eslatuvchi, xabar  beruvchi” ', b: 'Inglizcha   eslatuvchi', c: 'Grekcha   eslatuvch ', d: 'Grekcha  “ eslatuvchi, xabar  beruvchi' },
    { id: 3, savol: 'Magnit discklariga axborot qaysi qurilma yordamida yoziladi?', a: 'Proector', b: 'Printer   ', c: 'Nurli pero', d: 'Disckyugurtich' },
    { id: 4, savol: 'Algoritim bu-nima deyiladi ?', a: 'ko’rsatmalar ', b: 'tartib buzilishi ', c: 'buyruqlarning ketma –ketligi ', d: 'mo’ljallangan narsa ' },
]

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
];
let javob = []
let javobvariant = ['a', 'b', 'c', 'd']
let tugrijavoblar = ['a', 'a', 'd', 'c']





uyinchilardata.map((val, i) => (
    uyincard.innerHTML += `
        <option value=${val.id} key=${i}>${val.name}</option>
      `
))

// uyinchi select
uyincard.value = ''
let profilcard = document.querySelector('.profilcard')
 uyincard.addEventListener  ('change', (e) => {
    console.log(e.target.value);
    uyinchi =  uyinchilardata.filter((val)=>val.id === e.target.value?val.name:'')
    let uyinchiprofil =  uyinchilardata.filter((val)=>val.id == e.target.value)
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
     <button   onclick='javobfun(${3})'>D)   <span>${savollar[savolcount].d}</span></button>
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
let secfun =  setInterval(secuntfun, 1000);
clearInterval(secfun)
function startfun() {
    uyinfunc()
    secfun =  setInterval(secuntfun, 1000);
    b = 0
}

function secuntfun() {
    b++
    secund.innerHTML = b
}
let savolcounttext = document.querySelector('.savolcount');
let savolcount = 0;
function savolcountfun() {
    if(savolcount < savollar.length -1 ){
        savolcount++
    }else{
        let a = setTimeout(yakunalert,300)
        savolcount = 0
    }
    savolcounttext.innerHTML = savolcount +1
    uyinfunc()
}
// Clearcountfun
function Clearcountfun(){
    savolcount = 0
    savolcounttext.innerHTML = savolcount +1
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

    if (javob.flat('').reverse().slice(0,1)[0] ===tugrijavoblar[savolcount]) {
        variant[i].classList.add('ok')
        let a = setTimeout(okalert,300)
    } else {
        variant[i].classList.add('err')
        let a = setTimeout(erralert,300)
    }
}
// ///uyinmodalfun
// alertalr
function okalert(){
    let uyinmodal =   document.querySelector('.uyinmodal')
    let uyinmodalcard = document.querySelector('.uyinmodalcard')
    uyinmodalcard.innerHTML=`
    <img src="./img/ok.png" alt="">
    <button class='next' onclick='uyinmodalfun()'>Next</button>
    `
    uyinmodal.classList.add('active')
}
function erralert(){
    let uyinmodal =   document.querySelector('.uyinmodal')
    let uyinmodalcard = document.querySelector('.uyinmodalcard')
    uyinmodalcard.innerHTML=`
      <img src="./img/err.png" alt="" class='errimg'>
    <button class='next' onclick='uyinmodalfun()'>Next</button>
    `
        uyinmodal.classList.add('active')
}
function yakunalert(){
    let uyinmodal =   document.querySelector('.uyinmodal')
    let uyinmodalcard = document.querySelector('.uyinmodalcard')
    let yakun = javob.filter((val,i)=> javob[i] === tugrijavoblar[i])
    let foiz = 100 / tugrijavoblar.length
    uyinmodalcard.innerHTML=`
        <h1 class='blacktitle'> <img src=${(foiz *yakun.length)>70? './img/yutuqimg.png':'./img/yutuqimg3.png'} alt='' />   ${foiz *yakun.length} % bajardingiz !!  <img src=${(foiz *yakun.length)>70? './img/yutuqimg2.png':'./img/yutuqimg3.png'} alt='' /></h1>
        <button class='next' onclick='uyinmodalfunyakun()'>Next</button>
    `
        uyinmodal.classList.add('active')
        secund.innerHTML = 0
}
function uyinmodalfunyakun(){
    let uyinmodal =   document.querySelector('.uyinmodal')
    uyinmodal.classList.remove('active')
}
// alertalr
function uyinmodalfun(){
    let uyinmodal =   document.querySelector('.uyinmodal')
    uyinmodal.classList.remove('active')
    savolcountfun()
}



// uyinchilar
let uyinchilarcards = document.querySelector('.uyinchilarcards')
function uyinchilarfun() {
    uyinchilardata.map((val, i) => {
        uyinchilarcards.innerHTML += `
        <div class="uyinchicard">
        <div class="imgcard"><img src="./img/doniyor.jpg" alt="" class="img"></div>
        <div class="satrs">
           ${
              Array(val.strs).fill('').map((img)=>(
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


