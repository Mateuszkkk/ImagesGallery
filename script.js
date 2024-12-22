let imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach(container => {
    let img = container.querySelector("img");
    let blur = container.querySelector(".blur-image")
    let size = container.querySelector(".size-image")
    let skew = container.querySelector(".skew-image")
    let resetbtn = container.querySelector(".reset")
    let triangle = container.querySelector(".triangle")
    let rectangle = container.querySelector(".rectangle")
    let diamond = container.querySelector(".diamond")

    blur.addEventListener('input', bluring);
    function bluring() {
    let blurValue = blur.value;
    img.style.filter = `blur(${blurValue}px)`;
    }

    size.addEventListener('input', sizing);
    function sizing() {
        let sizeValue = size.value;
        img.style.height = `${sizeValue}px`;
        img.style.width = `${sizeValue}px`;
    }

    skew.addEventListener('input', skewing);
    function skewing(){
        let skewValue = skew.value;
        img.style.transform = `skewX(${skewValue}deg)`;
        console.log(skewValue);

    }

    resetbtn.addEventListener('click', reseting);
    function reseting() {
        blur.value = 0;
        size.value = 150;
        skew.value = 0;
        img.style.filter = `none`;
        img.style.height = `150px`;
        img.style.width = `150px`;
        img.style.transform = `none`;
        img.style.clipPath = `none`;
    }

    triangle.addEventListener('click', shapeTriangle);
    function shapeTriangle() {
        img.style.clipPath = `polygon(50% 0, 0 100%, 100% 100%)`;
    }

    rectangle.addEventListener('click', shapeRectangle);
    function shapeRectangle() {
        img.style.clipPath = `none`;
    }

    diamond.addEventListener('click', shapeDiamond);
    function shapeDiamond() {
        img.style.clipPath = `polygon(0 50%, 50% 100%, 100% 50%, 50% 0)`;
    }

    })






