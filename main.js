const list = [...document.querySelectorAll("#portfolioFilters li")];

list.map(el => {

    el.onclick = function (e) {

        let n = 0;
        while(n < list.length) {
            list[n++].className = "";
        }
        e.target.className = "active2";

    }

});

window.addEventListener('load', () => {
    let portfolioContainer = document.querySelector('.portfolio-con');
    let portfolioFilters = document.querySelectorAll('#portfolioFilters li');

    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-items',
            layoutMode: 'fitRows'
        });
        for (let i = 0; i < portfolioFilters.length; i++) {
            const element = portfolioFilters[i];
            element.addEventListener('click', function(e) {
                e.preventDefault();
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                aos_init();
            }, true);
        }
    }
});

let preloader = document.getElementById("preloader");
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.remove();
            document.body.style.overflowY = "auto";
        }, 1000);
    });
};

const navElement2 = document.querySelectorAll("nav div.sm-screen-links-con ul.sm-screen-links a");
let navCon2 = document.getElementById("nav-mo");
for (let i = 0; i < navElement2.length; i++) {
    const element = navElement2[i];
    element.onclick = e=> {
        
        let n = 0;
        
        while(n < navElement2.length) {
            navElement2[n++].className = "";
        }

        e.target.className = "active-sm-screen";

        navCon2.style.display = "none";

    }
};

document.querySelector("div.bars").onclick = () => {
    navCon2.style.display = "flex";
}

document.querySelector("div.sm-screen-links-con span.x").onclick = () => {
    navCon2.style.display = "none";
}

const navElement = document.querySelectorAll("nav ul.links a");
for (let i = 0; i < navElement.length; i++) {
    const element = navElement[i];
    element.onclick = e=> {
        let n = 0;

        while(n < navElement.length) {
            navElement[n++].className = "";
        }

        e.target.className = "active";
    }
};

let nums = document.querySelectorAll(".statistics div span"),
    started = false;
const navContainer = document.getElementById("navContainer");

function statistics(no) {
    let goal = no.dataset.goal
    let count = setInterval(() => {
        no.textContent++;
        if (no.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
};

window.onscroll = function() {
    if (this.scrollY >= 200) {
        navContainer.style.backgroundColor = "rgba(24, 6, 185, 0.8)";
        navContainer.style.height = "85px";
    } else {
        navContainer.style.backgroundColor = "transparent";
        navContainer.style.height = "105px";
    }
    if (this.scrollY >= document.querySelector(".about").offsetTop) {
        if (!started) {
            nums.forEach((no) => statistics(no));
        }
        started = true;
    }

    if (this.scrollY >= document.querySelector(".about").offsetTop) {
        document.querySelector(".to-top").style.bottom = "15px";
    } else {
        document.querySelector(".to-top").style.bottom = "-50px";
    }

    if (this.scrollY < document.querySelector(".about").offsetTop - 1) {
        navElement[0].className = "active";
        navElement2[0].className = "active-sm-screen";
    }

    if (this.scrollY >= document.querySelector(".about").offsetTop - 1 && this.scrollY < document.querySelector(".about").offsetTop + document.querySelector(".about").offsetHeight) {
        navElement[0].className = "";
        navElement2[0].className = "";
        navElement[1].className = "active";
        navElement2[1].className = "active-sm-screen";
    } else {
        navElement[1].className = "";
        navElement2[1].className = "";
    }

    if (this.scrollY >= document.querySelector(".services").offsetTop - 1 && this.scrollY < document.querySelector(".services").offsetTop + document.querySelector(".services").offsetHeight) {
        navElement[0].className = "";
        navElement2[0].className = "";
        navElement[1].className = "";
        navElement2[1].className = "";
        navElement[2].className = "active";
        navElement2[2].className = "active-sm-screen";
    } else {
        navElement[2].className = "";
        navElement2[2].className = "";
    }

    if (this.scrollY >= document.querySelector(".features").offsetTop - 1 && this.scrollY < document.querySelector(".features").offsetTop + document.querySelector(".features").offsetHeight) {
        navElement[0].className = "";
        navElement2[0].className = "";
        navElement[2].className = "";
        navElement2[2].className = "";
        navElement[3].className = "active";
        navElement2[3].className = "active-sm-screen";
    } else {
        navElement[3].className = "";
        navElement2[3].className = "";
    }

    if (this.scrollY >= document.querySelector(".testimonials").offsetTop - 1 && this.scrollY < document.querySelector(".testimonials").offsetTop + document.querySelector(".testimonials").offsetHeight) {
        navElement[0].className = "";
        navElement2[0].className = "";
        navElement[3].className = "";
        navElement2[3].className = "";
        navElement[4].className = "active";
        navElement2[4].className = "active-sm-screen";
    } else {
        navElement[4].className = "";
        navElement2[4].className = "";
    }

    if (this.scrollY >= document.querySelector(".portfolio").offsetTop - 1 && this.scrollY < document.querySelector(".portfolio").offsetTop + document.querySelector(".portfolio").offsetHeight) {
        navElement[0].className = "";
        navElement2[0].className = "";
        navElement[4].className = "";
        navElement2[4].className = "";
        navElement[5].className = "active";
        navElement2[5].className = "active-sm-screen";
    } else {
        navElement[5].className = "";
        navElement2[5].className = "";
    }

    if (this.scrollY >= document.querySelector(".contact").offsetTop - 1) {
        navElement[0].className = "";
        navElement2[0].className = "";
        navElement[5].className = "";
        navElement2[5].className = "";
        navElement[6].className = "active";
        navElement2[6].className = "active-sm-screen";
    } else {
        navElement[6].className = "";
        navElement2[6].className = "";
    }

    // if (this.scrollY >= document.querySelector(".about").offsetTop) {
    //     document.querySelector("nav").style.backgroundColor = "red";
    // } else {
    //     // document.querySelector("nav").style.backgroundColor = "rgba(24, 6, 185, 0.8)";
    //     // document.querySelector("nav").style.backgroundColor = "#0D0D0D";
    //     document.querySelector("nav").style.backgroundColor = "transparent";
    // }
};

document.querySelector(".to-top").addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

const swiperEl = document.querySelector('swiper-container')

const params = {
    injectStyles: [`
        .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            color: #000;
            opacity: 1;
            background: rgba(0, 0, 0, 0.2);
            padding: 3px;
        }

        .swiper-pagination-bullet-active {
            color: #fff;
            background: #5846f9;
        }
    `],
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
}

Object.assign(swiperEl, params)

swiperEl.initialize();

(() => {
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });
})();

// lightGallery(document.querySelector(".gallery"));

// wow.init();