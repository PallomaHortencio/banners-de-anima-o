function init() {
  var tl1 = anime
    .timeline({
      easing: 'easeOutExpo',
      loop: false,
    })
    .add({
      targets: '.bg1, .elem1',
      opacity: [0, 1]
    })
    .add({
      targets: '.txt1, .txt2, .txt3, .txt4',
      opacity: [0, 1],
      translateX: [-110, 0],
      easing: 'linear',
      delay: anime.stagger(150),
      duration: 500
    })
    .add({
      targets: '.bg1, .elem1, .txt1, .txt2, .txt3, .txt4',
      opacity: [1, 0]
    }, '+=2000')
    .add({
      targets: '.bg2, .elem2',
      opacity: [0, 1]
    }, '-=900')
    .add({
      targets: '.txt5, .txt6',
      opacity: [0, 1],
      translateX: [-110, 0],
      easing: 'linear',
      delay: anime.stagger(150),
      duration: 500
    })
    .add({
      targets: '.bg2, .elem2, .txt5, .txt6',
      opacity: [1, 0]
    }, '+=1500')
    .add({
      targets: '.bg',
      opacity: [0, 1]
    }, '-=200')
    .add({
      targets: '.logo',
      opacity: [0, 1],
      easing: 'linear'
  }, '-=500')
     
    
}