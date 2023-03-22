function init() {
   var tl1 = anime
     .timeline({
       easing: 'easeOutExpo',
       loop: false,
     }) 
     .add({
      targets: '.bg',
      opacity: [0, 1]
     })
     .add({
      targets: '.txt1, .txt2',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 500,
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
   })
   .add(
      {
        targets: '.txt1, .txt2',
        opacity: [1, 0],
        duration: 500,
      },
      '+=2000'
    )
    .add(
      {
        targets: '.txt3, .txt4, .confete',
        opacity: [0, 1],
        scale: [0, 0.9],
        duration: 500,
        easing: 'spring(1, 50, 10, 0)',
        delay: anime.stagger(150),
        complete: function () {
          confete();
        },
      },
      '-=500'
    )
    .add(
      {
        targets: '.txt3, .txt4, .confete',
        opacity: [1, 0],
        duration: 500,
      },
      '+=2000'
    )
    .add(
      {
        targets: '.confete_fundo, .logo, .btn',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 500,
        easing: 'spring(1, 50, 10, 0)',
        delay: anime.stagger(150),
      },
      '-=500'
    );
    function confete() {
      anime({
        loop: true,
        direction: 'alternate',
        targets: '.txt3, .txt4, .confete',
        scale: [0.9, 1],
        duration: 200,
        easing: 'spring(1, 50, 5, 0)',
        delay: anime.stagger(150),
      });
    }
}