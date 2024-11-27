const slides = document.querySelectorAll('.slide');
const carousel = document.getElementsById('carousel');
const left = document.getElementsById('left')
const left = document.getElementsById('left')

const SLIDES_COUNT = slides.length;

let current_slide = 0;

let.addEventListener("click", () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }

    updateCarouse();
});

right.addEventListener('click', () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }

    updateCarouse()
});

function updateCarouse() {
    carousel.style.transform = `translateX(${- current_slide * slides[0].offseWidth
        }px);

    document.body.style.background = `#${
        slides[current_slide].getAttribute(
            "data-bg"
        )
    };
}