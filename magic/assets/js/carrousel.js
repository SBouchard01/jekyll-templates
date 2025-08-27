// First, initialize the carrousel
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.carrousel').forEach(element => {
        element.slide_number = element.querySelectorAll('.slide').length;
        element.current_slide = 1;

        // Set the slideshow markers
        const markers = element.querySelector('.scroll-markers');
        for (let i = 1; i <= element.slide_number; i++) {
            const marker = document.createElement('span');
            marker.classList.add('marker');
            marker.textContent = i === element.current_slide ? '⚫︎' : '○';
            marker.slideNumber = i;
            markers.appendChild(marker);
        }

        // Hide all slides
        element.querySelectorAll('.slide').forEach(slide => {
            slide.classList.add('hidden');
        });

        // Show the first slide
        element.querySelector('[id^="slide-' + element.current_slide + '"]').classList.toggle('hidden');

        // Add event listeners for the buttons
        element.querySelectorAll('.prev, .next').forEach(button => {
            button.addEventListener('click', () => {
                const direction = button.classList.contains('next') ? 1 : -1;
                gotoSlide(element, element.current_slide + direction, manual = true);
            });
        });

        // Add event listener for the markers
        element.querySelectorAll('.marker').forEach(marker => {
            marker.addEventListener('click', () => {
                const slideNumber = marker.slideNumber;
                gotoSlide(element, slideNumber, manual = true);
            });
        });

        // Add event listeners for slide events on touch devices
        element.querySelectorAll('.slideshow').forEach(slideshow => {
            let allowedSwipeTime = 300;
            let threshold = 200;
            let restraint = 50;
            slideshow.addEventListener('touchstart', (event) => {
                slideshow.x = event.changedTouches[0].pageX;
                slideshow.y = event.changedTouches[0].pageY;
                slideshow.t0 = new Date().getTime();
            });
            slideshow.addEventListener('touchend', (event) => {
                const deltaX = event.changedTouches[0].pageX - slideshow.x;
                const deltaY = event.changedTouches[0].pageY - slideshow.y;
                const deltaT = new Date().getTime() - slideshow.t0;
                if (deltaT <= allowedSwipeTime) {
                    if (Math.abs(deltaX) >= threshold && Math.abs(deltaY) < restraint) {
                        slideshow.swipeDir = (deltaX < 0)? 'left' : 'right';
                        const direction = (deltaX < 0)? 1 : -1;
                        gotoSlide(element, element.current_slide + direction, manual = true);
                    }
                }
            });
            slideshow.addEventListener('touchmove', (event) => {
                event.preventDefault();
            });
        });

        // Auto slide
        const autoSlideTime = element.dataset.time || 3000;
        setInterval(() => {
            gotoSlide(element, element.current_slide + 1, manual = false);
        }, autoSlideTime);
    });
});

function gotoSlide(element, number, manual = false) {
    const carrousel = element.closest('.carrousel');
    if (carrousel) {
        const old_slide = carrousel.current_slide;
        new_slide = number;

        if (new_slide < 1) {
            new_slide = Number(new_slide % carrousel.slide_number + carrousel.slide_number);
            if (manual) {
                console.log("Smaller value, switching to", new_slide);
            }
        } else if (new_slide > carrousel.slide_number) {
            new_slide = Number(new_slide % carrousel.slide_number);
            if (manual) {
                console.log("Bigger value, switching to", new_slide);
            }
        }

        if (manual) {
            console.log('Slide changed from ' + old_slide + ' to ' + new_slide);
        }

        carrousel.querySelector('[id^="slide-' + (old_slide) + '"]').classList.toggle('hidden');
        carrousel.querySelector('[id^="slide-' + (new_slide) + '"]').classList.toggle('hidden');
        carrousel.current_slide = new_slide;

        // Update the markers
        const markers = carrousel.querySelector('.scroll-markers');
        markers.querySelectorAll('.marker').forEach((marker, index) => {
            marker.textContent = index + 1 === new_slide ? '⚫︎' : '○';
        });
    }
}

function gotoSlidefromID(id, number, manual = false) {
    const element = document.getElementById(id);
    if (element) {
        gotoSlide(element, number, manual);
    }
}