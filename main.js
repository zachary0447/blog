setTimeout(function () {
    siteWelcome.classList.remove('active');
}, 500);

let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

setTimeout(function () {
    specialTags[0].classList.remove('offset')
}, 1500);

window.onscroll = function (xxx) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    }
    else {
        topNavBar.classList.remove('sticky')
    }

    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0;
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
        specialTags[i].classList.remove('active')
    }
    specialTags[minIndex].classList.add('active')
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let li = document.querySelector('li[href="#' + id + '"]')
    let brothers = li.parentElement.children
    for (let i = 0; i < brothers.length; i++) {
        l = brothers[i].childNodes.length;
        for (let j = 1; j < l; j++) {
            brothers[i].removeChild(brothers[i].lastChild);
        }

    }
    let underLine = document.createElement("div");
    underLine.classList.add('hoverafter');
    li.appendChild(underLine);

}


let aTags = document.getElementsByClassName('menuTrigger')
{
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onmouseenter = function (x) {
            let li = x.currentTarget
            let n = 0
            while (li.children[n].tagName !== 'UL') {
                n = n + 1;
            }
            li.children[n].classList.add('active');
        }
        aTags[i].onmouseleave = function (x) {
            let li = x.currentTarget
            let n = 0
            while (li.children[n].tagName !== 'UL') {
                n = n + 1;
            }
            li.children[n].classList.remove('active');
        }

    }
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let scrollTags = document.querySelectorAll('nav.menu > ul > li')
{
    for (let i = 0; i < scrollTags.length; i++) {
        scrollTags[i].onclick = function (x) {
            let a = x.currentTarget;
            let href = a.getAttribute('href');
            let element = document.querySelector(href);
            let top = element.offsetTop;
            let currentTop = window.scrollY;
            let targetTop = top - 70;
            let s = targetTop - currentTop;
            let t = Math.abs(s / 100) * 300
            var coords = { y: currentTop };
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, Math.min(t, 500))
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()
        }
    }
}