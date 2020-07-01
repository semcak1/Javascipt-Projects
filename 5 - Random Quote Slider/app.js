const profiles=[
    {
        name : "Sercan Doğan",
        foto  :"img/profile1.jpg",
        stars : "1",
        quote:"Biri tarafından yürekten sevilmek güç, birini yürekten sevmek ise cesaret verir."
    },
    {
        name : "Okan Büyükkepçe",
        foto  :"img/profile2.jpg",
        stars : "1",
        quote:"Çok kıymet verdiğim üç hazinem var: birincisi sadelik, ikincisi sabır, üçüncüsü de merhamettir."
    },
    {
        name : "Ali Sonay",
        foto  :"img/profile3.jpg",
        stars : "1",
        quote:"Başkalarını bilen kimse bilgili, kendini bilen kimse bilgedir. Başkalarını yönetmek kuvvet; kendine hükmetmek ise iradedir."
    },
    {
        name : "Burak Civelek",
        foto  :"img/profile4.jpg",
        stars : "1",
        quote:"Biri tarafından yürekten sevilmek güç, birini yürekten sevmek ise cesaret verir."
    },
    {
        name : "Turgay Boyacı",
        foto  :"img/profile5.jpg",
        stars : "1",
        quote:"İyi bir gezgin rotasını önceden çizmez ve varmayı amaçlamaz."
    },
    {
        name : "Murat Özkaynak",
        foto  :"img/profile6.jpg",
        stars : "1",
        quote:"Olduğuyla yetinebilen kişi yarışmaz böylece kimse ona karşı kazanamaz."
    },
    {
        name : "Gülbahar Demir",
        foto  :"img/profile7.jpg",
        stars : "1",
        quote:"İnsanlara liderlik etmek istiyorsanız, onlarla birlikte yürüyün."
    },
    {
        name : "Zeynep Tireli",
        foto  :"img/profile8.jpg",
        stars : "1",
        quote:"Kendine inancı olan bir kimse başkalarını ikna etmeye çalışmaz. Kendini bilen kimse başkalarının onayına ihtiyaç duymaz. Bir kimse kendini benimsediğinde, tüm dünya onu olduğu gibi kabul eder."
    },
    
];

var profilePhoto=document.querySelector('.profile-photo');


var star=document.querySelector('.star-icon');
var quote=document.querySelector('.quote');
let index=0;
var buttons=document.querySelectorAll('.btn');
buttons.forEach(function(button){
    
    button.addEventListener('click',function(e){
        e.preventDefault();
        if(button.classList.contains('nextBtn')){
            index++;
            if(index>profiles.length-1){
                index=0;
            }
            cardFiller(index)
            
        }
        if(button.classList.contains('prevBtn')){
            index--;
            if(index<0){
                index=profiles.length-1;
            }
            cardFiller(index)
        }
    })
});
console.log(index)
function cardFiller(profileIndex){
    profilePhoto.setAttribute('src',profiles[profileIndex].foto);
    name=profiles[profileIndex].name;
   quote.innerHTML= `<span><i class="fas fa-quote-left fa-2x mr-2"></i></span> ${profiles[profileIndex].quote} <span><i class="fas fa-quote-right fa-2x mr-2"></i></span>`;
   document.querySelector('#customer-name').innerHTML=profiles[profileIndex].name;
};
