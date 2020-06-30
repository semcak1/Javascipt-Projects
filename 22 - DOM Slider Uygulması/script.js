var models=[
    {
        name:'Bmw 418d',
        image:'img/bmw.jpg',
        link :'https://arbimg1.mncdn.com/modelphotos/p1703063.jpg'
    },
    {
        
        name:'Mazda CX-3',
        image:'img/mazda.jpg',
        link :'https://cdn.motor1.com/images/mgl/kM34n/s3/2019-mazda-cx-3.jpg'
    },
    {
        
        name:'Volvo s60 ',
        image:'img/volvo.jpg',
        link :'https://technotoday.com.tr/wp-content/uploads/2019/11/4C6DD0BA-F60B-4B32-8125-441AED2D8DB6.jpeg'
    },
    {
        
        name:'Skoda sUPERB',
        image:'img/skoda.jpg',
        link :'https://cdn.motor1.com/images/mgl/LOPmW/s1/2020-skoda-superb-facelift.jpg'
    },
]

var index=0;
var slaytCount=models.length;
var interval;
var settings={
    duration:'2000',
    random : false,

};

init(settings)

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    
    showSlide(index);
    console.log(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings)
{
    var prev;
    
    interval = setInterval(function()
    {
        if(settings.random)
        {
            do{
                index=Math.floor(Math.random()*slaytCount)
            }while(index==prev)
            prev=index;
        }
        else
        {
            if(slaytCount+1==index)
            {
                index=0;
            }
            showSlide(index)
            console.log(index)
            index++;
        }
        
        showSlide(index);
    },settings.duration)

    
}

function showSlide(i){

    index=i;
    if (i<0)
    {
        index=slaytCount-1;
    }

    if(i>slaytCount-1)
    {
        index=0;
    }

    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

