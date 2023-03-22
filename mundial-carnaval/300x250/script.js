function init() {
   var path = anime.path('#path path');

   var tl1 = anime
   .timeline({
      easing: 'easeOutExpo',
      loop: false
   })
   .add({
      targets: '.txt1, .txt2, .txt3',
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 500,
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
    })
   
   .add({
      targets: '.carinha1',
      opacity: [1, 0],
      easing: 'steps(1)',
      duration: 200,
   }, '-=500')
   .add({
      targets: '.carinha2',
      opacity: [0, 1],
      easing: 'steps(1)',
      duration: 200,
   }, '-=200')
   .add({
      targets: '.carinha2',
      opacity: [1, 0],
      easing: 'steps(1)',
      duration: 200,
   }, '-=200')
   .add({
      targets: '.carinha3',
      opacity: [0, 1],
      easing: 'steps(1)',
      duration: 200,
   }, '-=200')
   
   .add({
      targets: '.txt1, .txt2, .txt3',
      opacity: [1, 0],
      duration: 500
   }, '')
}
   
   
   /* .add({
      targets: '.elem1',
      opacity: [0, 1],
      scale: [0, 1],
      translateY: [100, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(150),
      duration: 500
   }, '-=8500')
   .add({
      targets: '.elem2',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'easeOutExpo',
      delay: anime.stagger(150),
      duration: 500
   }).add({
      targets: '.elem1',
      opacity: [0, 1],
      scale: [1, 0],
   })

   .add({
      targets: '.txt4, .txt5, .txt6',
      opacity: [0,1],
      scale: [0,1],
      easing: 'easeOutExpo',
      delay: anime.stagger(200),
      duration: 500,
   }, '-=8500')
   .add({
      targets: '.txt1, .txt2, .txt3',
      opacity: [1, 0],
      duration: 500
   }, '')

   .add({
      targets: '.btn',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    }, '-=3000')
} */