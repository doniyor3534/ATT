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

// savollar 
let talimyonalishi =[
    { id: 1, javob:'a',savol: 'Kompyuterning asosiy qurilmalari nimalardan iborat?', a: 'Sistemali blok, monitor, klaviatura, sichqoncha  ', b: 'Modem, printer, monitor, klaviatura ', c: 'Sistemali blok, printer, klaviatura, sichqoncha' },
    { id: 2, javob:'a',savol: 'Monitor  so’zining  ma’nosini toping?.', a: 'Lotincha   “eslatuvchi, xabar  beruvchi” ', b: 'Inglizcha   eslatuvchi', c: 'Grekcha   eslatuvch ', d: 'Grekcha  “ eslatuvchi, xabar  beruvchi' },
    { id: 3, javob:'d',savol: 'Magnit discklariga axborot qaysi qurilma yordamida yoziladi?', a: 'Proector', b: 'Printer   ', c: 'Nurli pero', d: 'Disckyugurtich' },
    { id: 4, javob:'c',savol: 'Algoritim bu-nima deyiladi ?', a: 'ko’rsatmalar ', b: 'tartib buzilishi ', c: 'buyruqlarning ketma –ketligi ', d: 'mo’ljallangan narsa ' },
    { id: 5, javob:'a',savol: 'Kibernetika maktabining asoschisi kim? ', a: 'Vasil Qobilov  ', b: 'Vasil Ahmedov ', c: ' Jordan ', d: 'Fleming  ' },
    { id: 6, javob:'b',savol: 'Qachon 1-kompyuter yaratildi?', a: '1977 ', b: '1973 ', c: '1968 ', d: '1912 ' },
    { id: 7, javob:'c',savol: 'Fayl so`zining manosi?', a: 'maydon', b: 'amal  ', c: 'malumot ', d: ' adres ' },
    { id: 8, javob:'b',savol: 'Ma’lumotlar ombori nima ?', a: 'Xotirada saqlanayotgan ixtiyoriy ma’lumot.', b: 'Borliqni ma’lum bir sohasi bo`yicha birlashtirgan ma’lumotlar to`plami.  ', c: 'Biror dasturlash tilida tuzilgan dastur. ', d: ' Ixtiyoriy matn ko`rinishidagi axborot.     ' },
    { id: 9, javob:'c',savol: 'EXCELda tayyorlangan  hujjat qanday kengaytmada faylda saqlanadi?  ', a: '.DOS', b: '.TXT  ', c: '.XLS ', d: ' .BAS ' },
    { id: 10, javob:'a',savol: 'Izlash  va almashtirish  uchun  muloqot  oynasini  chiqarish  uchun  qaysi tugmalar  jufti  bosiladi?. ', a: 'Ctrl+F', b: 'Ctrl+D ', c: 'Ctrl+N', d: 'Ctrl+C' },
];
let texniktizimlar =[
    { id: 1, javob:'a',savol: 'Kompyuterning asosiy qurilmalari nimalardan iborat?', a: 'Sistemali blok, monitor, klaviatura, sichqoncha  ', b: 'Modem, printer, monitor, klaviatura ', c: 'Sistemali blok, printer, klaviatura, sichqoncha' },
    { id: 2, javob:'a',savol: 'Monitor  so’zining  ma’nosini toping?.', a: 'Lotincha   “eslatuvchi, xabar  beruvchi” ', b: 'Inglizcha   eslatuvchi', c: 'Grekcha   eslatuvch ', d: 'Grekcha  “ eslatuvchi, xabar  beruvchi' },
    { id: 3, javob:'d',savol: 'Magnit discklariga axborot qaysi qurilma yordamida yoziladi?', a: 'Proector', b: 'Printer   ', c: 'Nurli pero', d: 'Disckyugurtich' },
    { id: 4, javob:'c',savol: 'Algoritim bu-nima deyiladi ?', a: 'ko’rsatmalar ', b: 'tartib buzilishi ', c: 'buyruqlarning ketma –ketligi ', d: 'mo’ljallangan narsa ' },
    { id: 5, javob:'a',savol: 'Kibernetika maktabining asoschisi kim? ', a: 'Vasil Qobilov  ', b: 'Vasil Ahmedov ', c: ' Jordan ', d: 'Fleming  ' },
    { id: 6, javob:'b',savol: 'Qachon 1-kompyuter yaratildi?', a: '1977 ', b: '1973 ', c: '1968 ', d: '1912 ' },
    { id: 7, javob:'c',savol: 'Fayl so`zining manosi?', a: 'maydon', b: 'amal  ', c: 'malumot ', d: ' adres ' },
    { id: 8, javob:'b',savol: 'Ma’lumotlar ombori nima ?', a: 'Xotirada saqlanayotgan ixtiyoriy ma’lumot.', b: 'Borliqni ma’lum bir sohasi bo`yicha birlashtirgan ma’lumotlar to`plami.  ', c: 'Biror dasturlash tilida tuzilgan dastur. ', d: ' Ixtiyoriy matn ko`rinishidagi axborot.     ' },
    { id: 9, javob:'c',savol: 'EXCELda tayyorlangan  hujjat qanday kengaytmada faylda saqlanadi?  ', a: '.DOS', b: '.TXT  ', c: '.XLS ', d: ' .BAS ' },
    { id: 10, javob:'a',savol: 'Izlash  va almashtirish  uchun  muloqot  oynasini  chiqarish  uchun  qaysi tugmalar  jufti  bosiladi?. ', a: 'Ctrl+F', b: 'Ctrl+D ', c: 'Ctrl+N', d: 'Ctrl+C' },
];
let matematika =[
    {id:1,javob:'a',savol:'Agar   a(2;1;3)  va  b(-1;x;2)  vektorlar uzunligi teng bo’lsa ,x ni toping.',a:'±3',b:'±2',c:'3',d:'5'},
    {id:2,javob:'d',savol:'Funksiya hosilasini toping: f(x)=5 ',a:'x',b:'5',c:'10',d:'0'},
    {id:3,javob:'c',savol:'Markazi koordinatalar boshida , radiusi 5 ga teng bolgan sfera tenglamasini yozing.',a:'x2+y2+z2≤25',b:'x2+y2+z2≥25',c:'x2+y2+z2=25',d:'(x-1)2+(y-1)2+(z-1)2=25'},
    {id:4,javob:'a',savol:'A(2;0;-3) va B(3;4;0) nuqtalar orasidagi masofani toping.',a:'√26',b:'√24',c:'16',d:'18'},
    {id:5,javob:'b',savol:' Koordinatalar boshidan y=x2-4x+3 parabolaning simmetriya o’qigacha bo’lgan masofani toping.',a:'1',b:'2',c:'1.5',d:'2.5'},
    {id:6,javob:'d',savol:' a̅(0;-4;2)  va  b̅(2;2;3)  vektorlarning skalyar ko’paytmasini toping.',a:'-14',b:'14',c:'-2',d:'10'},
    {id:7,javob:'c',savol:' Yuzi 9π sm2 bo’lgan doirani o’rab turgan aylana uzunligini toping.',a:'9π',b:'3π',c:'6π',d:'12π'},
    {id:8,javob:'c',savol:'Konversiya bilan teng kuchli mulohazani ko’rsating:',a:'Kontrapozitsiya',b:'implikatsiya',c:'inversiya',d:'ekvivalensiya'},
    {id:9,javob:'d',savol:' sinx funksiyaning hosilasini toping',a:'-cosx',b:'tgx',c:'-sinx',d:'cosx'},
    {id:10,javob:'b',savol:'Uchlari A(1;2;3) , B(2;3;1), C(3;1;2) nuqtalarda bo’lgan uchburchakning perimetrini toping.',a:'3',b:'3√6',c:'6',d:'9'}
];
let ingliztili =[
    {id:1,javob:'b',savol:'It’s big.  It can swim. What’s it?  ',a:'hen',b:'crocodile  ',c:'duck',d:'fish'},
    {id:2,javob:'a',savol:'I …….  (yaxshi ko’raman) an ice cream. ',a:'like',b:' `ve got',c:'collect ',d:'cook'},
    {id:3,javob:'d',savol:'He…… five trains',a:'am',b:'is',c:'you',d:'have got'},
    {id:4,javob:'c',savol:'What does the cow say?',a:'woof-woof',b:'meow-meow',c:'moo-moo',d:'quak-quak'},
    {id:5,javob:'d',savol:' I’ve got a friend.  ……. name’s  Aziz.',a:'our',b:'her',c:'he',d:'his'},
    {id:6,javob:'b',savol:'It’s a cat.   It can  …….  .',a:'swim',b:'climb',c:'fly',d:'dance'},
    {id:7,javob:'a',savol:'What’s your favourite day ?',a:'monday',b:'Teddy bear',c:'bag',d:'doll'},
    {id:8,javob:'c',savol:'six plus three is ...',a:'eight',b:'ten',c:'nine',d:'seven'},
    {id:9,javob:'c',savol:'Lola  ………… an eraser.',a:'have got',b:'is',c:'has got',d:'are'},
    {id:10,javob:'a',savol:'Translate the sentence: This is my family.',a:'Bu mening oilam. ',b:'Bu uning do’sti.',c:'Bu mening oyim.',d:'Bular do’stlarim'}
];
let rustili =[
    {id:1,javob:'c',savol:'Укажите  слова  с уменьшительно-ласкательным  значением:',a:'мама, папа, книга ',b:'дерево, письмо, осень ',c:'мамочка, папочка, книжечка',d:'трава, дом, мяч'},
    {id:2,javob:'d',savol:'Восстановите пословицу: Какой …, такой и трактор.',a:'моторист ',b:'артист ',c:'танкист',d:'тракторист'},
    {id:3,javob:'a',savol:'Как называют музыканта, который играет на гитаре:',a:'гитарист',b:'гитаристы ',c:'гитары',d:'гитарный'},
    {id:4,javob:'d',savol:'Что называет имя прилагательное?',a:'предмет ',b:'действие предмета ',c:'число',d:'признак предмета'},
    {id:5,javob:'a',savol:' Вставьте нужные окончания: Санжар любит спорт, он стройн…, спортивн… мальчик.',a:'–ый',b:'–ий',c:'–ая',d:'–ое'},
    {id:6,javob:'c',savol:'Дополните пословицу: Век живи – век…',a:'займись',b:'торопись',c:'учись ',d:'учи'},
    {id:7,javob:'b',savol:'Что обозначает глагол?',a:'признак предмета',b:'действие предмета ',c:'предмет',d:'число'},
    {id:8,javob:'a',savol:'Что такое эпитет?',a:'образное определение предмета',b:'скрытое сравнение ',c:'метафора ',d:'троп'},
    {id:9,javob:'c',savol:'Укажите существительное, имеющее форму только множественного числа:',a:'поля ',b:'облака ',c:'ножницы ',d:'карандаши'},
    {id:10,javob:'c',savol:'В каком варианте выражено отрицание?',a:'жил некто',b:'увидел нечто',c:'никто не пришёл ',d:'что-то нашёл'}
];
// savollar 

let savollar = talimyonalishi
let javob = []
let javobvariant = ['a', 'b', 'c', 'd']
// dataRandom
function randomfun(array){
    let res = [];
    let set  = new Set();
    let ran = 0;
    while(true){
        ran = parseInt(Math.random()*10);
        if(array.length === res.length){
            break
        }else{
            if(!set.has(ran)){
                set.add(ran);
                res.push(array[ran])
            }
        }
    }
    savollar = res
}
randomfun(savollar)
randomfun(savollar)
console.log(savollar);

// dataRandom
// fanlarfun
let savoldatalar =[talimyonalishi,texniktizimlar,matematika,ingliztili,rustili]
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
    savollar =savoldatalar[i]
    Clearcountfun()
}

// fanlarfun
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
    { id: 6, name: 'Doniyorbek Tursunov6', strs: 3, img: './img/doniyor.jpg' },
    { id: 7, name: 'Doniyorbek Tursunov7', strs: 3, img: './img/doniyor.jpg' },
    { id: 8, name: 'Doniyorbek Tursunov8', strs: 1, img: './img/doniyor.jpg' },
    { id: 9, name: 'Doniyorbek Tursunov9', strs: 3, img: './img/doniyor.jpg' },
    { id: 10, name: 'Doniyorbek Tursunov10', strs: 5, img: './img/doniyor.jpg' },
    { id: 11, name: 'Doniyorbek Tursunov11', strs: 3, img: './img/doniyor.jpg' },
    { id: 12, name: 'Doniyorbek Tursunov12', strs: 5, img: './img/doniyor.jpg' },
];
let ustozlardata = [
    { id: 1, name: `Ibrohim G'ofurjanov`, img: './img/ibrohimd.jpg', strs: 5 },
    { id: 2, name: `Ibrohim G'ofurjanov`, img: './img/ibrohimd.jpg', strs: 5 },
    { id: 3, name: 'Egamberdiyev O.M', img: './img/ustoz.png', strs: 5 },
    { id: 4, name: 'Rahmonova M.N', img: './img/ingliztili.webp', strs: 5 },
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
     <button  onclick='javobfun(${0},${savollar[savolcount].id})'>A)  <span>${savollar[savolcount].a}</span></button>
     <button   onclick='javobfun(${1},${savollar[savolcount].id})'>B)  <span>${savollar[savolcount].b}</span></button>
     <button  onclick='javobfun(${2},${savollar[savolcount].id})'>C)  <span>${savollar[savolcount].c}</span></button>
     ${savollar[savolcount].d ? `<button   onclick='javobfun(${3},${savollar[savolcount].id})'>D)   <span>${savollar[savolcount].d}</span></button>` : ''} 
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
let jabaobmassiw=0
function javobfun(i,id) {
    let variant = document.querySelectorAll('.variant > button')
    javob.push(javobvariant[i])
    let javelement = savollar.filter(val=>val.id === id)
    
    if (javob.flat('').reverse().slice(0, 1)[0] === javelement[0].javob) {
        variant[i].classList.add('ok')
        let a = setTimeout(okalert, 300)
        jabaobmassiw++
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
    let foiz = 100 / savollar.length
    uyinmodalcard.innerHTML = `
    <h1 class='blacktitle'> <img  src=${Math.floor(foiz * jabaobmassiw) > 70 ? './img/yutuqimg.png' : './img/yutuqimg3.png'} alt='' class='modalyakunimg' />   ${Math.floor(foiz * jabaobmassiw)} %  ya'ni ${jabaobmassiw} ta to'g'ri   bajardingiz !!  <img src=${(foiz * jabaobmassiw) > 70 ? './img/yutuqimg2.png' : './img/yutuqimg3.png'} alt=''  class='modalyakunimg' /></h1>
        <div class='modalyacunprofil'>
        <img src=${uyinchiprofil.img} alt="" class=''>
        <h2 class="title">${uyinchiprofil.name}</h2>
        </div>   
        ${yakunresult ? `<button class='next' onclick='uyinmodalfunStart()'>Start</button>` : `<button class='next' onclick='uyinmodalfunyakun()'>Next</button>`}
    `
    uyinmodal.classList.add('active')
    secund.innerHTML = 0
    jabaobmassiw = 0
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
