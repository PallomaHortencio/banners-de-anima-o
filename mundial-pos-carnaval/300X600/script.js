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
      targets: '.elems',
      duration: 500,
      begin: function () {
         elems();
      }
   })
      .add({
         targets: '.txt1, .txt2, .sombra',
         opacity: [0, 1],
         scale: [0, 1],
         duration: 500,
         easing: 'spring(1, 50, 10, 0)',
         delay: anime.stagger(150),
      })
      .add(
         {
           targets: '.elems, .txt1, .txt2, .sombra',
           opacity: [1, 0],
           duration: 500,
         },
         '+=2000'
       )
       .add(
         {
           targets: '.txt3, .txt4, .confete, .logo',
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
           targets: '.txt3, .txt4, .confete, .logo',
           opacity: [1, 0],
           duration: 500,
         },
         '+=2000'
       )
       .add(
         {
           targets: '.txt5, .txt6',
           opacity: [0, 1],
           scale: [0, 1],
           duration: 500,
           easing: 'spring(1, 50, 10, 0)',
           delay: anime.stagger(150),
         },
         '-=500'
       )
       .add(
         {
           targets: '.txt7, .txt8, .confete2',
           opacity: [0, 1],
           scale: [0, 0.9],
           duration: 500,
           easing: 'spring(1, 50, 10, 0)',
           delay: anime.stagger(150),
           begin: function () {
             confete2();
           },
         },
         '-=1500'
       )
       .add({
         targets: '.txt9, .txt10, .txt11',
         opacity: [0, 1],
         scale: [0, 1],
         duration: 500,
         easing: 'spring(1, 50, 10, 0)',
         delay: anime.stagger(150),
      })
       .add(
         {
           targets: '.logo2, .btn',
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
     
       function confete2() {
         anime({
           loop: true,
           direction: 'alternate',
           targets: '.txt7, .txt8, .confete2',
           scale: [0.9, 1],
           duration: 200,
           easing: 'spring(1, 50, 5, 0)',
           delay: anime.stagger(150),
         });
       }
     
       function elems() {
         anime
           .timeline({
             easing: 'steps(1)',
             loop: true,
             direction: 'alternate',
           })
           .add({
             targets: '.elem1',
             opacity: [1, 0],
             duration: 500,
           })
           .add(
             {
               targets: '.elem2',
               opacity: [0, 1],
               duration: 500,
             },
             '-=500'
           )
           .add({
             targets: '.elem2',
             opacity: [1, 0],
             duration: 500,
           })
           .add(
             {
               targets: '.elem3',
               opacity: [0, 1],
               duration: 500,
             },
             '-=500'
           )
           .add({
             targets: '.elem3',
             opacity: [1, 0],
             duration: 500,
           })
           .add(
             {
               targets: '.elem1',
               opacity: [0, 1],
               duration: 500,
             },
             '-=500'
           );
       }
     }