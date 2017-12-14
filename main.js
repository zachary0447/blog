setTimeout(function () {
    siteWelcome.classList.remove('active');
}, 500);

window.onscroll = function (xxx) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    }
    else {
        topNavBar.classList.remove('sticky')
    }
}

let aTags = document.getElementsByClassName('menuTrigger')
{
    for(let i=0; i<aTags.length; i++){
        aTags[i].onmouseenter = function(x){
            let li = x.currentTarget
            let n = 0
            while (li.children[n].tagName !== 'UL'){
                n = n + 1;
            }
            li.children[n].classList.add('active');
        }
        aTags[i].onmouseleave = function(x){
            let li = x.currentTarget
            let n = 0
            while (li.children[n].tagName !== 'UL'){
                n = n + 1;
            }
            li.children[n].classList.remove('active');
        }
        
    }
}

let scrollTags = document.querySelectorAll('nav.menu > ul > li')
{
    for(let i=0; i<scrollTags.length; i++){
        scrollTags[i].onclick = function(x){
            let a = x.currentTarget;
            let href = a.getAttribute('href');
            let element = document.querySelector(href);
            let top = element.offsetTop;
            window.scrollTo(0, top - 70);
        }
    }
}