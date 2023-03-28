gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax__img", {
    scale: 2.0,
    scrollTrigger: {
        trigger: ".parallax__img",
        start: "top 0px",
        scrub: 2,
    }
});

gsap.to(".parallax__bgimg", {
    scale: 1.5,
    scrollTrigger: {
        trigger: ".parallax__bgimg",
        start: "top 1px",
        scrub: 2,
    }
});

gsap.to(".parallax", {
    'filter': 'brightness(0%)',
    scrollTrigger: {
        trigger: ".plot__para",
        scrub: 1,
    }
});

gsap.to(".parallax__title", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".parallax__title",
        start: "top 0px",
        scrub: 1,
    }
});

gsap.to(".parallax__heading", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".parallax__title",
        start: "top 0px",
        scrub: 1,
    }
});

gsap.to(".plot__heading", {
    opacity: 1,
    // yPercent: 100,
    scrollTrigger: {
        trigger: ".plot__heading",
        start: "top 400px",
        scrub: 1,
    },
});

gsap.to(".plot__para", {
    opacity: 1,
    yPercent: -100,
    scrollTrigger: {
        trigger: ".plot__para",
        start: "top 90%",
        end: "top 99%",
        scrub: 1,
    },
});

gsap.to(".plot__line", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".plot__para",
        scrub: 1,
    },
    y: 700,
});

gsap.to(".credits__img1", {
    scrollTrigger: {
        trigger: ".credits__img1",
    },
    x: 1,
});

gsap.to(".rotate__image3",{
    scrollTrigger: {
        trigger: ".rotate__image3",
        scrub: true,
    },
    rotation: -30,
    duration: 3,
});

gsap.to(".rotate__image1",{
    scrollTrigger: {
        trigger: ".rotate__image1",
        scrub: true,
    },
    y: 400,
    rotation: 360,
    duration: 3,
});

gsap.to(".rotate__image2",{
    scrollTrigger: {
        trigger: ".rotate__image3",
        scrub: true,
    },
    y: -400,
    duration: 3,
});

gsap.to(".rotate__image5",{
    scrollTrigger: {
        trigger: ".rotate__image3",
        scrub: true,
    },
    y: 450,
    rotation: -360,
    duration: 3,
});

gsap.to(".rotate__image4",{
    scrollTrigger: {
        trigger: ".rotate__image2",
        scrub: true,
    },
    y: -300,
    rotation: 360,
    duration: 3,
});

gsap.to(".rotate__text",{
    scrollTrigger: {
        trigger: ".rotate__image3",
        scrub: true,
    },
    y: -300,
    opacity: 1,
    duration: 3,
});

gsap.to(".skull__image", {
    scale: 1.5,
    scrollTrigger: {
        trigger: ".skull__image",
        scrub: true,
    }
});

gsap.to(".skull__people", {
    y: -100,
    scrollTrigger: {
        trigger: ".skull__image",
        scrub: true,
    }
});

gsap.to(".footer__content", {
    y: -200,
    scrollTrigger: {
        trigger: ".footer__content",
        scrub: true,
    }
});

gsap.fromTo(".navigation__maindot", { x: 220 }, {x: 590, opacity :1, scrollTrigger: {
            trigger: ".goonies",
            scrub: 1,
        }, })


gsap.fromTo(".navigation__maindot", { x: 590 }, {x: 820, opacity: 1, scrollTrigger: {
             trigger: ".credits",
            scrub: 1,
        }, })

gsap.fromTo(".navigation__maindot", { x: 820 }, {x: 1100, opacity:1, scrollTrigger: {
            trigger: ".gallery",
            scrub: 1,
       }, })



// slow scroll:

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 4000,
    speedAsDuration: true,
    easing: 'linear'
})


// wavesurfer:

var wavesurfer = WaveSurfer.create({
    container: '#wave',
    waveColor: 'grey',
    progressColor: 'black',
    barWidth: '1',
    height: '50',
    barRadius: '5',
    responsive: true,
    hideScrollBar: true,
    cursorWidth: 2,
    skipLength: 10
});

wavesurfer.load('./img/audio2.mp3');

var playBtn = document.querySelector('.playBtn');

playBtn.addEventListener('click', ()=>{
    
    wavesurfer.playPause();
})


var muteBtn = document.querySelector('.muteBtn');
muteBtn.addEventListener('click', ()=>{
    wavesurfer.toggleMute();
})

var revindBtn = document.querySelector('.revindBtn');
revindBtn.addEventListener('click', ()=>{
    wavesurfer.skipBackward();
})

var forwardBtn = document.querySelector('.forwardBtn');
forwardBtn.addEventListener('click', ()=>{
    wavesurfer.skipForward();
})

var volumeBtn = document.querySelector('.volumeBtn');
volumeBtn.addEventListener('mouseup', ()=>{
    modifyVolume(volumeBtn.value);
})

const modifyVolume = (volume) =>{
    wavesurfer.setVolume(volume);
}

const parallax__buzzer = document.querySelector('.parallax__buzzer');

parallax__buzzer.addEventListener('click',()=>{

    document.querySelector('.music').classList.toggle('show');
    // document.querySelector('.audio').classList.toggle('hide');
} )

