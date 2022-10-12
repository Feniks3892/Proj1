//swiper

const swiper = new Swiper('.swiper-container', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

let gallerySlider = new Swiper(".slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery .next",
    prevEl: ".gallery .prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    700: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1669: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  

  a11y: false
});

let eventsSlider = new Swiper(".events__slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".events .test-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".events .next",
    prevEl: ".events .prev"
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    668: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 34
    },

    1020: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 27
    },

    1440: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: false
});

let editionsSlider = new Swiper(".editions__slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".editions .test-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".editions .next",
    prevEl: ".editions .prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },

    1600: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: false
});

let projectsSlider = new Swiper(".projects__slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 50,
  pagination: {
    el: ".projects .test-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".projects .next",
    prevEl: ".projects .prev"
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 43
    },

    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: false
});


  // /-Select-/ 
  const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: ''
    });
  
  };
  
  defaultSelect();

  /* accordion*/

  $( "#accordion1" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: "content"
  });
  
  $( "#accordion2" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: "content"
  });
  
  $( "#accordion3" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: "content"
  });
  
  $( "#accordion4" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: "content"
  });
  
  $( "#accordion5" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: "content"
  });

/*  header bottom list */

const params = {
  btnClassName: "header__bot-main-item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


//скрывающийся список
$(function(){
  $('.events__btn').click(function(){
      $('.last-changes-item:nth-child(n+4)').slideToggle('', function () {
        if ($(this).is(':visible')) {
          $(this).css('display', 'flex');
        }
      });
      this.textContent = this.textContent.trim() === 'Все события' ? 'Скрыть события' : 'Все события';
  });
});

//map

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.757685, 37.600292],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    },
    { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
    );

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
  iconLayout: 'default#image',
  iconImageHref: '/image/map-mark.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}

/*tabs*/

document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs-content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
		document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn--active');

		tabsContent.forEach(el => {el.classList.remove('tabs-content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content--active');
	};
});



document.addEventListener('DOMContentLoaded', () => {
	const but = document.querySelector('.but');
	const butBtn = document.querySelectorAll('.but__btn');
	const butContent = document.querySelectorAll('.but__content');

	if (but) {
		but.addEventListener('click', (e) => {
			if (e.target.classList.contains('but__btn')) {
				const butPath = e.target.dataset.butPath;
				butHandler(butPath);
			}
		});
	}

	const butHandler = (path) => {
		butBtn.forEach(el => {el.classList.remove('but__btn--active')});
		document.querySelector(`[data-but-path="${path}"]`).classList.add('but__btn--active');

		butContent.forEach(el => {el.classList.remove('but__content--active')});
		document.querySelector(`[data-but-target="${path}"]`).classList.add('but__content--active');
	};
});


//tooltips

tippy('.projects__button', {
  theme: 'tips',
});

// form validate

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(pnone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат'
  },
});

(() => {

  //checkboxes
  // Это класс отвечающий за создание гармошки (в нем можно не разбираться и ничего не менять). В самом низу будет инициализация, туда необходимо передать настройки
  class Harmonic {
    constructor(params) {
      this.mobileWidth = params.mobileWidth;
      this.harmonic = document.querySelector(params.harmonic);
      this.checkWraps = this.harmonic.querySelectorAll(params.checkWrapName);
      this.checkboxClassName = params.checkboxClassName;
      this.heading = this.harmonic.querySelector(params.headingBtn);
      this.heading._isOpen = false;

      this.setHeight(this.checkWraps);
      this.setState(this.checkWraps);
      this.heading.addEventListener("click", this.checkoutState.bind(this));
      this.setChecksListeners();

      window.addEventListener("resize", this.onWindowResize.bind(this));
    }

    onWindowResize() {
      this.setState(this.checkWraps);
    }

    setHeight(checks) {
      if (this.getWindowWidth() <= this.mobileWidth) {
        checks.forEach((element) => {
          element._height = element.offsetHeight;
          element.style.height = element._height + "px";
        });
      } else {
        checks.forEach((element) => {
          element.style.height = "";
        });
      }
    }

    hideCheck(check) {
      if (
        !check.querySelector(this.checkboxClassName).checked &&
        this.getWindowWidth() <= this.mobileWidth
      ) {
        check.style.opacity = 0;
        check.style.cssText =
          "height: 0px; padding-top: 0; padding-bottom: 0; border-width: 0; opacity: 0";
      }
    }

    showCheck(check) {
      if (
        !check.querySelector(this.checkboxClassName).checked &&
        this.getWindowWidth() <= this.mobileWidth
      ) {
        check.style.cssText = `height: ${check._height}px;`;
        check.style.opacity = "";
      }
    }

    setState(checks) {
      if (this.getWindowWidth() <= this.mobileWidth) {
        if (!this.heading._isOpen) {
          checks.forEach((el) => {
            this.hideCheck(el);
          });
        } else {
          checks.forEach((el) => {
            this.showCheck(el);
          });
        }
      } else {
        checks.forEach((el) => {
          this.showCheck(el);
          el.style = "";
        });

        this.heading._isOpen = false;
      }
    }

    getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    checkoutState(evt) {
      evt.preventDefault();
      if (this.getWindowWidth() <= this.mobileWidth) {
        this.checkWraps.forEach((el) => {
          this.heading._isOpen ? this.hideCheck(el) : this.showCheck(el);
        });
        this.heading._isOpen = !this.heading._isOpen;

        if (this.heading._isOpen) {
          this.heading.classList.add("is-active");
        } else {
          this.heading.classList.remove("is-active");
        }
      }
    }

    hideNotChecked(e) {
      const parent = e.target.parentElement;
      if (this.getWindowWidth() <= this.mobileWidth && !this.heading._isOpen) {
        this.hideCheck(parent);
      }
    }

    setChecksListeners() {
      const checks = this.harmonic.querySelectorAll(this.checkboxClassName);

      checks.forEach((el) => {
        el.addEventListener("change", this.hideNotChecked.bind(this));
      });
    }
  }

  //   Это инициализация гармошки, необходимо в нее передать названия js- классов, соответствующих классам в разметке, а также установить мобильную ширину. Используется, как плагин
  const harmonic = new Harmonic({
    mobileWidth: 580,
    harmonic: ".js-harmonic",
    checkWrapName: ".js-checkbox-wrap",
    headingBtn: ".js-harmonic-heading",
    checkboxClassName: ".js-checkbox"
  });




document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
  });

})();


/*burger-menu*/
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active')
})

document.querySelector('#burgers').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active')
})


/*search-mob*/
// здесь мы вызываем функцию и передаем в нее классы наших элементов
function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });
  
  search.addEventListener('click', function(evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;
    this.style.opacity = 0;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });
  
  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    openBtn.style.opacity = '';
    search.classList.add(params.hiddenClass);
  });
  
  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      openBtn.style.opacity = '';
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form", // класс формы поиска
  activeClass: "is-openeds", // класс открытого состояния
  hiddenClass: "is-closeds" // класс закрывающегося состояния (удаляется сразу после закрытия)
});
