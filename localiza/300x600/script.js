function init() {
  var tl1 = anime
    .timeline({
      easing: 'easeOutExpo',
      loop: false
    })
    .add({
      targets: '.logo1',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    })
    .add({
      targets: '.txt1, .txt2, .txt3',
      opacity: [0, 1],
      translateX: [-100, 0],
      easing: 'linear',
      delay: anime.stagger(150),
      duration: 500
    }, '-=1500')
    .add({
      targets: '.elem1',
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 500,
      easing: 'linear',
    }, '-=1500')
    .add({
      targets: '.txt4',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    })
    .add({
      targets: '.logo1, .txt1, .txt2, .txt3, .txt4, .elem1',
      opacity: [1, 0],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
    }, '+=2500')
    .add({
      targets: '.bg2',
      opacity: [0, 1],
      easing: 'linear',
      duration: 200
    }, '-=2000')
    .add({
      targets: '.txt5, .txt6, .txt7',
      opacity: [0, 1],
      translateY: [100, 0],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    }, '-=1000')
    .add({
      targets: '.logo2',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    }, '-=1000')
    .add({
      targets: '.elem2, .btn',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    }, '-=1000')
}
