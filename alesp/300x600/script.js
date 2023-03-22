function init() {
   var tl1 = anime
   .timeline({
      easing: 'easeOutExpo',
      loop: false,
   })
   .add({
      targets: '.bg2',
      opacity: [0, 1],
   })
   .add({
      targets: '.txt1, .txt2, .txt3, .txt4, .txt5',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0.5)',
      delay: anime.stagger(150)
   })
   .add({
      targets: '.bt_urgente',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)'
   }, '-=500')
   .add({
      targets: '.txt_urgente',
      opacity: [0, 1],
      translateX: [-100, 0],
   }, '-=300')
   .add({
      targets: '.txt1, .txt2, .txt3, .txt4, .txt5',
      opacity: [1, 0],
      duration: 500,
   }, '+=900')
   .add({
      targets: '.bt_urgente, .txt_urgente',
      opacity: [1, 0],
   }, '-=300')  
   .add({
      targets: '.txt6, .txt7, .txt8, .txt9, .txt10, .txt11',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0.5)',
      delay: anime.stagger(150)
   })
   .add({
      targets: '.txt6, .txt7, .txt8, .txt9, .txt10, .txt11',
      opacity: [1, 0],
   }, '+=900')
   .add({
      targets: '.bg2',
      opacity: [1, 0],
      duration: 500,
   }, '+=1000')
   .add({
      targets: '.bg3',
      opacity: [0, 1],
   }, '-=1000')
   .add({
      targets: '.logo',
      opacity: [0, 1],
   })
   .add({
      targets: '.rd1, .rd2, .rd3, .rd4, .rd5, .rd6, .rd7, .rd8',
      opacity: [0, 1],
      scale: [0, 1],
      delay: anime.stagger(200)
   })
   .add({
      targets: '.borda_pesquisa',
      opacity: [0, 1],
      scale: [0, 1],
   }, '-=700')
   .add({
      targets: '.txt_pesquisa',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(200)
   }, '-=600')
   .add({
      targets: '.btn',
      opacity: [0, 1],
   }, '-=600')
   .add({
      targets: '.seta, .efeito',
      opacity: [0, 1],
      translateX: [30, 0],
      scale: [0, 1],
  })
  .add({
   targets: '.seta, .efeito, .btn',
   opacity: [0, 1],
})
}