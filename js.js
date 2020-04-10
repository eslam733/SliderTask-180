document.querySelector('.forward').addEventListener('click', NextSlider);
document.querySelector('.backward').addEventListener('click', NextSlider);
SliderImg = document.querySelector('.SliderImg');
boundsButton =  document.querySelectorAll('.bound');
boundsButton.forEach(item => {
    item.addEventListener('click', Bound);
  })

var count = 1;
function NextSlider(e)
{
    if(e.target.className.split(' ')[0] === 'forward')
    {
        if(count < 4)
        {
            count += 1;
            
        }else{
            count = 1;
        }
    }
    else{
        if(count > 1)
        {
            count -= 1;
        }else{
            count = 4;
        }
    }
    Bound(boundsButton[count-1]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeimg(count)
{
    SliderImg.style.opacity = "0";
    await sleep(600);
    SliderImg.style.backgroundImage = "url('./imgs/img"+count+".png')";
    await sleep(300);
    SliderImg.style.opacity = "1";
}

function Bound(e)
{
    var Target;
    if(e.className)
    Target = e;
    else
    Target = e.target;
    
    for(var i=0; i< boundsButton.length; i++){
        if(Object.values(boundsButton[0].classList).indexOf('active'))
        boundsButton[i].classList.remove('active');
    }
    
    if(Target.className.split(' ')[0] === 'bound')
    {
        Target.classList.add("active");
    }else{
        Target.parentNode.classList.add("active");
    }
    for(var i=0; i< boundsButton.length; i++){
        if(Object.values(boundsButton[i].classList).indexOf('active') > 0)
        {
            count = i+ 1;
            break;
        }
    }
    changeimg(count);
}