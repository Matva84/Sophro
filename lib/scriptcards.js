gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    gsap.to('.card-left', {
        scrollTrigger: {
            trigger: '.containerCards1',
            start: 'top 80%', // Animation starts when the container is 80% from the top of the viewport
            end: 'top 30%', // Animation ends when the container is 30% from the top of the viewport
            scrub: true
        },
        x: 0,
        opacity: 1,
        duration: 1
    });
    gsap.to('.card-left', {
      scrollTrigger: {
          trigger: '.containerCards2',
          start: 'top 80%', // Animation starts when the container is 80% from the top of the viewport
          end: 'top 30%', // Animation ends when the container is 30% from the top of the viewport
          scrub: true
      },
      x: 0,
      opacity: 1,
      duration: 1
  });
  gsap.to('.card-left', {
    scrollTrigger: {
        trigger: '.containerCards3',
        start: 'top 80%', // Animation starts when the container is 80% from the top of the viewport
        end: 'top 30%', // Animation ends when the container is 30% from the top of the viewport
        scrub: true
    },
    x: 0,
    opacity: 1,
    duration: 1
});

    gsap.to('.card-middle', {
        scrollTrigger: {
            trigger: '.containerCards1',
            start: 'top 80%',
            end: 'top 30%',
            scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1
    });
    gsap.to('.card-middle', {
      scrollTrigger: {
          trigger: '.containerCards2',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true
      },
      y: 0,
      opacity: 1,
      duration: 1
  });
  gsap.to('.card-middle', {
    scrollTrigger: {
        trigger: '.containerCards3',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true
    },
    y: 0,
    opacity: 1,
    duration: 1
});

    gsap.to('.card-right', {
        scrollTrigger: {
            trigger: '.containerCards1',
            start: 'top 80%',
            end: 'top 30%',
            scrub: true
        },
        x: 0,
        opacity: 1,
        duration: 1
    });
    gsap.to('.card-right', {
      scrollTrigger: {
          trigger: '.containerCards2',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true
      },
      x: 0,
      opacity: 1,
      duration: 1
  });
  gsap.to('.card-right', {
    scrollTrigger: {
        trigger: '.containerCards3',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true
    },
    x: 0,
    opacity: 1,
    duration: 1
});
});
