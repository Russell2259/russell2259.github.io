class SlideJs_ {
    constructor() {
        this.slides = [];

        this.load = (slideData, slideElement) => {
            const slideShowId = Math.floor(Math.random() * 7);

            slideElement.innerHTML = `<div class="slideshow_container">
                <span class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                           d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
                    </svg>
                </span>
        
                <div class="slides" data-slideid="${slideShowId}"></div>
        
                <span class="arrow" data-position="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                    </svg>
                </span>
            </div>`;

            slideData.forEach(slide => {
                this.slides.push(`<div class="item">
                    <h1>${slide.title}</h1>
                    <div class="slide_content">${slide.content}</div>
                </div>`);
            });

            const slidesElement = document.querySelector(`[data-slideid="${slideShowId}"]`);

            return slideShowId;
        }

        this.goTo = (slideId) => {
            try {
                document.querySelector('.slideshow').scrollLeft = document.querySelector('.slideshow').offsetWidth*slideId-1;
            } catch (e) {
                throw new Error(`Could not load slide ${slideId}`);
            }
        }
    }
}

const SlideJs = new SlideJs_