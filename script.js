//Criação de uma timeline do GSAP com animações sicronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, // DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM O ID FANTA PARA 120% do topo
        left: '0%',
    },
    'orange'
); //Nomeando estre trecho de animação como 'orange' para sicronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM O ID ORANGE-CUT PARA 160% do topo
        left: '23%', // MOVE O ELEMENTO PARA 23% da esquerda
    },
    'orange'
); //Nomeando estre trecho de animação como 'orange' para sicronização

tl.to(
    '#laranja',
    {
        width: '15%',
        top: '160%',
        rigth: '10%',
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '530deg',
        left: '70%',                
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '530deg',
        left: '0%',                
    },
    'orange'
);

//Criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', //Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção three)
        scrub: true,
        markers: true, // DEPURAÇÃO
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-110%',
        top: '100%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-110%',
        top: '100%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '110%',
        top: '100%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '110%',
        top: '100%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);



