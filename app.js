const  titreSpans  =  document . querySelectorAll ( 'h1 span' ) ;
const  btns  =  document . querySelectorAll ( '.btn-first' ) ;
const  logo  =  document . querySelector ( '.logo' ) ;
const medias = document.querySelectorAll('.bulle');
const  l1  =  document . querySelector ( '.l1' ) ;
const  l2  =  document . querySelector ( '.l2' ) ;

fenêtre . addEventListener ( 'charger' ,  ( )  =>  {

    const  TL  =  gsap . chronologie ( { en pause : vrai } ) ;

    TL
    . staggerFrom ( titreSpans ,  1 ,  { top : - 50 ,  opacity : 0 ,  easy : " power2.out " } ,  0.3 )
    . staggerFrom ( btns ,  1 ,  { opacité : 0 ,  facilité : "power2.out" } ,  0.3 ,  '-=1' )
    . de ( l1 ,  1 ,  { largeur : 0 ,  facilité : "power2.out" } ,  '-=2' )
    . de ( l2 ,  1 ,  { largeur : 0 ,  facilité : "power2.out" } ,  '-=2' )
    . from ( logo ,  0.4 ,  { transform : "scale(0)" ,  easy : " power2.out " } ,  '-=2' )
    . staggerFrom ( medias ,  1 ,  { right : - 200 ,  easy : " power2.out " } ,  0.3 ,  '-=1' ) ;

    
    

    TL.play();
})