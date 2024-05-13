document.addEventListener('DOMContentLoaded', function() {

console.log('-fl4v10-');

//customizzazione megamenu

function wrapAll(elements, wrapper) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);

    Array.from(elements).forEach(element => {
        wrapper.appendChild(element);
    });
}


//___Marchi
const menuMarchiCol1Elements = document.querySelectorAll(
    '#desktop-menu-1 .mega-menu__column:nth-child(n+6):nth-child(-n+12)'
);
const menuMarchiCol2Elements = document.querySelectorAll(
    '#desktop-menu-1 .mega-menu__column:nth-child(n+13)'
);

const wrapperMarchi1 = document.createElement('div');
wrapperMarchi1.className = 'menu_ctrl marchi1';
wrapAll(menuMarchiCol1Elements, wrapperMarchi1);

const wrapperMarchi2 = document.createElement('div');
wrapperMarchi2.className = 'menu_ctrl marchi2';
wrapAll(menuMarchiCol2Elements, wrapperMarchi2);


//___Kit
const menuKitElements = document.querySelectorAll(
    '#desktop-menu-2 .mega-menu__column:nth-child(n+2):nth-child(-n+8)'
);

const wrapperElements1 = document.createElement('div');
wrapperElements1.className = 'menu_ctrl kit';
wrapAll(menuKitElements, wrapperElements1);


//___Attrezzature
const menuAttrezzatureCol1Elements = document.querySelectorAll(
    '#desktop-menu-7 .mega-menu__column:nth-child(n+5):nth-child(-n+10)'
);
const menuAttrezzatureCol2Elements = document.querySelectorAll(
    '#desktop-menu-7 .mega-menu__column:nth-child(n+11)'
);

const wrapperAttrezzature1 = document.createElement('div');
wrapperAttrezzature1.className = 'menu_ctrl attrezzature1';
wrapAll(menuAttrezzatureCol1Elements, wrapperAttrezzature1);

const wrapperAttrezzature2 = document.createElement('div');
wrapperAttrezzature2.className = 'menu_ctrl attrezzature2';
wrapAll(menuAttrezzatureCol2Elements, wrapperAttrezzature2);

const menuAttrezzatureFirstChild = document.querySelector('#desktop-menu-7 .mega-menu__columns-wrapper > .mega-menu__column:first-child');
const menuAttrezzatureSecondChild = document.querySelector('#desktop-menu-7 .mega-menu__columns-wrapper > .mega-menu__column:nth-child(2) a');
const margine = parseInt(window.getComputedStyle(menuAttrezzatureFirstChild).height) + 23;
menuAttrezzatureSecondChild.style.marginTop = margine + 'px';


//___Strumenti
const menuStrumentiCol1Elements = document.querySelectorAll(
    '#desktop-menu-6 .mega-menu__column:nth-child(n+3):nth-child(-n+7)'
);
const menuStrumentiCol2Elements = document.querySelectorAll(
    '#desktop-menu-6 .mega-menu__column:nth-child(n+8)'
);

const wrapperStrumenti1 = document.createElement('div');
wrapperStrumenti1.className = 'menu_ctrl strumenti1';
wrapAll(menuStrumentiCol1Elements, wrapperStrumenti1);

const wrapperStrumenti2 = document.createElement('div');
wrapperStrumenti2.className = 'menu_ctrl strumenti1';
wrapAll(menuStrumentiCol2Elements, wrapperStrumenti2);


//custom menu bar
const hookMenu1 = document.querySelector('li.header__linklist-item[data-item-title="Kit"]');
const hookMenu2 = document.querySelector('li.header__linklist-item[data-item-title="Guide"]');

const newDivAfter = document.createElement('div');
newDivAfter.style.color = '#4bdd0e';
newDivAfter.innerHTML = '///';

hookMenu1.parentNode.insertBefore(newDivAfter, hookMenu1.nextSibling);

const newDivBefore = document.createElement('div');
newDivBefore.style.color = '#4bdd0e';
newDivBefore.innerHTML = '///';

hookMenu2.parentNode.insertBefore(newDivBefore, hookMenu2);

//customizzazione megamenu___END

//banner dimanico___

if(document.querySelector('#product-custom')){
      const getVendorText = document.querySelector('#product-custom .product-meta__vendor a').textContent;


if(getVendorText === 'CARTEC - Colorline'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Colorline.jpg?v=1664985786';
    var logoMarcaText = 'Qualità al TOP';
    var titoloBannerText = 'CARTEC - COLORLINE';
    var descrizioneBannerText = 'Colorline è la linea di prodotti professionali di elevata qualità firmata Cartec. Colorline è specifica per la cura, la pulizia e il ripristino degli interni ed esterni dell’auto. Tutti i prodotti devono essere sottoposti a diluizione e sono, inoltre, sicuri su qualsiasi superficie.';
    var btnBannerText = 'VEDI I PRODOTTI COLORLINE';
    var btnBannerUrl = '/collections/cartec-colorline';
}
else if(getVendorText.includes("CARPRO")){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/CARPRO.jpg?v=1664986068';
    var logoMarcaText = 'Metti il turbo con CARPRO';
    var titoloBannerText = 'CARPRO';
    var descrizioneBannerText = "CARPRO è il brand di riferimento per car care e care detailing che fornisce ogni tipo di soluzione per la cura dell’auto. Grazie alla qualità dei suoi prodotti e alla continua ricerca si contraddistingue per l’innovativa tecnologia e per l’essere un must per i detailers più esigenti.";
    var btnBannerText = 'VEDI I PRODOTTI CARPRO';
    var btnBannerUrl = '/collections/carpro';
}
else if(getVendorText === 'CARTEC'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Cartec.jpg?v=1664986261';
    var logoMarcaText = 'Garanzia di Risultato';
    var titoloBannerText = 'CARTEC';
    var descrizioneBannerText = "Cartec si occupa da oltre 35 anni della ricerca e dello sviluppo di prodotti per la pulizia, la protezione e la lucidatura di auto. Spinta dalla passione per l'innovazione, dalla ricerca della massima qualità e da un servizio personalizzato, Cartec è diventata uno dei maggiori fornitori di prodotti professionali per la cura dell'auto.";
    var btnBannerText = 'VEDI I PRODOTTI CARTEC';
    var btnBannerUrl = '/collections/cartec';
}
else if(getVendorText === 'CARTEC - Essential'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Essentials.jpg?v=1664986688';
    var logoMarcaText = 'La base per ogni appassionato';
    var titoloBannerText = 'CARTEC - ESSENTIAL';
    var descrizioneBannerText = 'Essentials è l’esclusiva linea per la cura dell’auto dedicata all’appassionato più esigente dotata dei migliori prodotti per pulizia, lavaggio, protezione e finitura di interni ed esterni.';
    var btnBannerText = 'VEDI I PRODOTTI ESSENTIAL';
    var btnBannerUrl = '/collections/cartec-essentials';
}
else if(getVendorText === 'CARTEC - Refinish'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Refinish.jpg?v=1664986770';
    var logoMarcaText = "Fai scintillare l'auto";
    var titoloBannerText = 'CARTEC - REFINISH';
    var descrizioneBannerText = 'Refinish è il sistema di lucidatura Cartec che si distingue per innovazione e performance. Garantisce risultati eccezionali su qualsiasi tipo di vernice in massimo due step. Refinish conferisce ai colori maggiore profondità e brillantezza. Il sistema di lucidatura Refinish può essere utilizzato con lucidatrice rotativa e orbitale.';
    var btnBannerText = 'VEDI I PRODOTTI REFINISH';
    var btnBannerUrl = '/collections/cartec-refinish';
}
else if(getVendorText === 'CARTEC - Ceramic Guard'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Refinish.jpg?v=1664986770';
    var logoMarcaText = 'Nanotecnologia a tuo servizio';
    var titoloBannerText = 'CARTEC - CERAMIC GUARD';
    var descrizioneBannerText = 'Ceramic Guard è la linea di protettivi nanotecnologici per il detailer più evoluto che è sempre alla ricerca di performance grandiose in termini di protezione e gloss.';
    var btnBannerText = 'VEDI I PRODOTTI CERAMIC GUARD';
    var btnBannerUrl = '/collections/cartec-refinish';
}
else if(getVendorText === 'CARTEC - Royal Care'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Royal_Care.jpg?v=1664987028';
    var logoMarcaText = 'Per un lavaggio Regale';
    var titoloBannerText = 'CARTEC - ROYAL CARE';
    var descrizioneBannerText = 'Royal Care è la linea firmata Cartec di prodotti per autolavaggio che supera le aspettative in tutte le fasi della pulizia esterna dell’auto, a partire dal prelavaggio, alla protezione della carrozzeria fino alla sua asciugatura.';
    var btnBannerText = 'VEDI I PRODOTTI ROYAL CARE';
    var btnBannerUrl = '/collections/cartec-royal-care';
}
else if(getVendorText === 'Scangrip'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
    var logoMarcaText = "M'llumino d'immenso";
    var titoloBannerText = 'SCANGRIP';
    var descrizioneBannerText = 'Scangrip è l’azienda di riferimento per sistemi di illuminazione professionali dedicata a detailing e refinish. Nella sua gamma prodotti rientrano le luci a Led, progettate per soddisfare le esigenze del detailer più evoluto, e le UV Curing, specifiche per la polimerizzazione della vernice.';
    var btnBannerText = 'VEDI I PRODOTTI SCANGRIP';
    var btnBannerUrl = '/collections/scangrip';
}
else if(getVendorText === 'Scangrip - Color Match'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
    var logoMarcaText = 'Elementare, Watson!';
    var titoloBannerText = 'SCANGRIP - COLOR MATCH';
    var descrizioneBannerText = "La linea Colormatch di Scangrip rappresenta il massimo in termini di innovazione e tecnologia per l'individuazione del punto tinta, per l'analisi dei difetti presenti sulla superficie e per l'applicazione dei protettivi nanotecnologici.";
    var btnBannerText = 'VEDI I PRODOTTI SCANGRIP - COLOR MATCH';
    var btnBannerUrl = '/collections/scangrip-color-match';
}
else if(getVendorText === 'Scangrip - UV Curing'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
    var logoMarcaText = 'SCANGRIP - UV CURING';
    var titoloBannerText = 'SCANGRIP - UV CURING';
    var descrizioneBannerText = "La linea UV Curing di Scangrip offre una gamma di luci a LED completa e potente per la polimerizzazione UV. I prodotti UV si contraddistinguono per l’elevata efficienza del ciclo di lavoro combinata con l’effettivo risparmio energetico.";
    var btnBannerText = 'VEDI I PRODOTTI SCANGRIP - UV CURING';
    var btnBannerUrl = '/collections/scangrip-uv-curing';
}
else if(getVendorText === 'Scangrip - Work Ligths'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
    var logoMarcaText = 'La tua luce sicura';
    var titoloBannerText = 'SCANGRIP - WORK LIGHTS';
    var descrizioneBannerText = "Le luci da lavoro Scangrip sono estremamente resistenti e durature. Dotate della più recente tecnologia LED e del design funzionale e robusto, offrono una luce da lavoro ideale.";
    var btnBannerText = 'VEDI I PRODOTTI SCANGRIP - WORK LIGHTS';
    var btnBannerUrl = '/collections/scangrip-work-lights';
}
else if(getVendorText === 'IK Sprayers'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/IK.jpg?v=1664987609';
    var logoMarcaText = 'Da esperti per esperti';
    var titoloBannerText = 'IK SPRAYERS';
    var descrizioneBannerText = 'IK Sprayers è il marchio di nebulizzatori professionali del Gruppo Goizper, rivolto ai professionisti e privati che cercano un prodotto efficace e di qualità indiscussa.';
    var btnBannerText = 'VEDI I PRODOTTI IK SPRAYERS';
    var btnBannerUrl = '/collections/ik-sprayers';
}
else if(getVendorText === 'Nexdiag'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/NexDiag.jpg?v=1664987715';
    var logoMarcaText = 'Un brand di spessore';
    var titoloBannerText = 'NEXDIAG';
    var descrizioneBannerText = 'NexDiag è specializzata nello sviluppo di sistemi evoluti di misurazione dello spessore della vernice dell’auto il cui segno distintivo è una visione innovativa dell’industria automobilistica. Grazie alla tecnologia sviluppata gli spessimetri NexDiag si distinguono per affidabilità e precisione, sia su superfici in alluminio che ferro.';
    var btnBannerText = 'VEDI I PRODOTTI NEXDIAG';
    var btnBannerUrl = '/collections/nexdiag';
}
else if(getVendorText === 'Q1 Tapes'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Q1.jpg?v=1664987787';
    var logoMarcaText = 'La Mascheratura resa semplice';
    var titoloBannerText = 'Q1 TAPES';
    var descrizioneBannerText = 'Q1 Tapes è specializzata nello sviluppo e nella produzione di soluzioni per mascheratura premium per il mercato aftermarket automotive, inclusa l’autocarrozzeria. Grazie a una gamma di elevata qualità offre una selezione completa tra cui nastri, film, carta e altri prodotti speciali.';
    var btnBannerText = 'VEDI I PRODOTTI Q1 TAPES';
    var btnBannerUrl = '/collections/q1-tapes';
}
else if(getVendorText === 'Shinemate'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/ShineMate.jpg?v=1664987864';
    var logoMarcaText = 'Lucidatrici di alto profilo';
    var titoloBannerText = 'SHINEMATE';
    var descrizioneBannerText = 'ShineMate è un marchio di proprietà della Pritronic, un colosso asiatico che produce lucidatrici, levigatrici ed accessori. I prodotti ShineMate sono i migliori ed i più potenti che si possono trovare sul mercato. Caratterizzati dall’ottimo rapporto qualità prezzo e dalla notevole resistenza e durata nel tempo, sono il meglio che un appassionato possa desiderare.';
    var btnBannerText = 'VEDI I PRODOTTI SHINEMATE';
    var btnBannerUrl = '/collections/shinemate';
}
else if(getVendorText === 'The Collection'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/The_Collection.jpg?v=1664987930';
    var logoMarcaText = 'Panni Premium';
    var titoloBannerText = 'THE COLLECTION';
    var descrizioneBannerText = "The Collection Microfiber è l'azienda tedesca produttrice di panni, guanti ed applicatori in microfibra. I suoi prodotti si contraddistinguono per l’ottimo rapporto qualità-prezzo e per le alte performance.";
    var btnBannerText = 'VEDI I PRODOTTI THE COLLECTION';
    var btnBannerUrl = '/collections/the-collection';
}
else if(getVendorText === 'Idrobase'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/IDROBASE.jpg?v=1664988069';
    var logoMarcaText = 'Idropulitrici Made in Italy';
    var titoloBannerText = 'IDROBASE';
    var descrizioneBannerText = 'Idrobase Group propone soluzioni complete per il mondo della pulizia. Sistemi Aria Vortice di ottima fattura per cui propone anche un ampio catalogo di accessori e ricambi.';
    var btnBannerText = 'VEDI I PRODOTTI IDROBASE';
    var btnBannerUrl = '/collections/idrobase';
}
else if(getVendorText === 'MTM Hydro'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/MTM_Hydro.jpg?v=1664988114';
    var logoMarcaText = 'MTM Hydro';
    var titoloBannerText = 'MTM HYDRO';
    var descrizioneBannerText = "É un'azienda leader che da oltre 30 anni si pone come riferimento nella progettazione e produzione di componenti e accessori professionali per idropulitrici e autolavaggio.";
    var btnBannerText = 'VEDI I PRODOTTI MTM HYDRO';
    var btnBannerUrl = '/collections/mtm-hydro';
}
else if(getVendorText === 'Seko'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Seko.jpg?v=1664988219';
    var logoMarcaText = 'Una sicurezza chiamata Seko';
    var titoloBannerText = 'SEKO';
    var descrizioneBannerText = "SEKO offre una gamma di prodotti ideali per il settore automotive, grazie ai sistemi a bassa e media pressione, in grado di adattarsi a qualsiasi applicazione, che consentono tempi di contatto prolungati e garantiscono una pulizia efficace e profonda. Produttore leader di pompe dosatrici e soluzione di misurazione";
    var btnBannerText = 'VEDI I PRODOTTI SEKO';
    var btnBannerUrl = '/collections/seko';
}
else if(getVendorText === 'STI'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/STI_Steam_Industry.jpg?v=1664988284';
    var logoMarcaText = 'A tutto vapore';
    var titoloBannerText = 'STI';
    var descrizioneBannerText = 'STI è leader nella realizzazione di macchine per la pulizia a vapore professionale. I prodotti sono interamente progettati e realizzati nello stabilimento di Fara Vicentino (VI) da personale altamente qualificato.';
    var btnBannerText = 'VEDI I PRODOTTI STI';
    var btnBannerUrl = '/collections/sti';
}
else if(getVendorText === 'Detail Guardz'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Detailz_Guardz.jpg?v=1664988361';
    var logoMarcaText = 'Tutto molto più semplice';
    var titoloBannerText = 'DETAIL GUARDZ';
    var descrizioneBannerText = "Detail Guardz è un'azienda che progetta, produce e spedisce direttamente dalla propria fabbrica in Canada assicurando standard qualitativi elevatissimi. L'unico obbiettivo di Detail Guardz è quello di proporre articoli che semplifichino la vita dei detailers e degli appassionati.";
    var btnBannerText = 'VEDI I PRODOTTI DETAIL GUARDZ';
    var btnBannerUrl = '/collections/detail-guarz';
}
else if(getVendorText === 'FOEN'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/FOEN.jpg?v=1689676117';
    var logoMarcaText = 'Una fragranza che ispira';
    var titoloBannerText = 'FOEN';
    var descrizioneBannerText = "FOEN® è il marchio polacco specializzato nella produzione di profumi di altissima qualità per gli interni dei veicoli. Le fragranze sono caratterizzate da longevità, da un’ampia scelta e da una delicatezza che rimane impressa.";
    var btnBannerText = 'VEDI I PRODOTTI FOEN';
    var btnBannerUrl = '/collections/foen';
}
else if(getVendorText === 'CHAMALEON'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/CHAMALEON.jpg?v=1689676118';
    var logoMarcaText = 'Per un refinish di qualità';
    var titoloBannerText = 'CHAMALEON';
    var descrizioneBannerText = "CHAMALEON® è il marchio tedesco che propone prodotti di alta qualità per il Car Refinish, ossia per la riparazione professionale della carrozzeria.";
    var btnBannerText = 'VEDI I PRODOTTI CHAMALEON';
    var btnBannerUrl = '/collections/chamaleon';
}
else if(getVendorText === 'Brühl Dryer'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Br_hl_Dryer.jpg?v=1705399510';
    var logoMarcaText = 'Soffiatori potentissimi';
    var titoloBannerText = 'BRÜHL DRYER';
    var descrizioneBannerText = "Soffiatori efficienti, perfetti per dare al tuo veicolo un'asciugatura professionale e senza contatto in pochissimi minuti.";
    var btnBannerText = 'VEDI I PRODOTTI BRÜHL DRYER';
    var btnBannerUrl = '/collections/bruhl-dryer';
}
  else if(getVendorText === 'Sibelum'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Sibelum.jpg?v=1705399944';
    var logoMarcaText = 'Spazzole dal carattere unico';
    var titoloBannerText = 'SIBELUM';
    var descrizioneBannerText = "SIBELUM azienda specializzata nella lavorazione del legno e delle setole naturali, che dà vita ad accessori di altissima qualità e caratterizzati da una durata incredibile.";
    var btnBannerText = 'VEDI I PRODOTTI SIBELUM';
    var btnBannerUrl = '/collections/chamaleon';
}
else {
    var imgBannerUrl = '';
    var logoMarcaText = '';
    var titoloBannerText = '';
    var descrizioneBannerText = '';
    var btnBannerText = '';
    var btnBannerUrl = '';
}
}
const hookBanner = document.querySelector('#product-custom #shopify-section-static-text-with-icons');
const htmlBanner = `<section id="brand_cta">
                        <div class="container">
                            <div class="cont_banner">
                                <img src="`+ imgBannerUrl +`" alt="">
                            </div>
                            <div class="cont_testo">
                                <div class="brand">`+ logoMarcaText +`</div>
                                <h2>`+ titoloBannerText +`</h2>
                                <p>`+ descrizioneBannerText +`</p>
                                <a href="`+ btnBannerUrl +`" class="button button--primary">`+ btnBannerText +`</a>
                            </div>
                        </div>
                    </section>`;

if(hookBanner && imgBannerUrl){
   hookBanner.insertAdjacentHTML('beforebegin', htmlBanner);
}
//banner dimanico___END

//pagine prodotto NO VENDITA ___

if (document.querySelector('#product h1.product-meta__title'))
{ const getProductTitle = document.querySelector('#product h1.product-meta__title').textContent;

if(getProductTitle === 'Cartec Ceramic Guard Coating SiCarbon+') {
    document.body.classList.add('centro_autorizzato');

    const addToCartButton = document.querySelector('.centro_autorizzato button#AddToCart .loader-button__text');
    if (addToCartButton) {
        addToCartButton.textContent = 'Trova il centro autorizzato più vicino';

        addToCartButton.addEventListener('click', function() {
            window.location.href = "https://new-focal-test.myshopify.com/blogs/news";
            console.log('click');
        });
    }
}
}

//fade titolo collections
const titoloCollections = document.querySelector('.boost-pfs-filter-collection-header-wrapper .boost-pfs-container-default-box');
setTimeout(function() {
    if (titoloCollections) {
        titoloCollections.classList.add('visibile');
    }
}, 2000);

//customizzazione up-bar
const upBar = document.querySelector('.announcement-bar__message.text--xsmall p');
//upBar.html('<img style="margin:0 5px; height: 18px;" src="https://cdn.shopify.com/s/files/1/0660/5252/2209/files/lettering_carismatix_c31cb1f6-7169-4adb-8c98-6857b5147578_400x.png?v=1663582740" alt="Carismatix"> È IL NUOVO MARCHIO DI <img style="height: 36px; margin: -8px 5px -8px 5px;" src="https://cdn.shopify.com/s/files/1/0660/5252/2209/files/cartec_quadrato.jpg?v=1665413033" alt="Cartec"> ITALIA → <button class="link" data-action="open-content">Cosa cambia?</button>');

//rimuovo barra da prodotti no vendita
const productTitle = document.querySelector('h1.product-meta__title');
if(productTitle){
  productTitle = productTitle.textContent;
}
const box_grigio = document.querySelector('.box_decor_gray');
const barra_aggiungi = document.querySelector('.product-sticky-form');


//nomi prodotti NoVendita
const CeramicGuard = 'Cartec Ceramic Guard Coating SiCarbon+';
const QuarzProfessional = 'CARPRO C.QUARTZ Professional';
const QuarzFinest = 'CARPRO C.QUARTZ Finest Reserve Kit';
const DQuartz = 'CARPRO D.Quartz';
const CarproImmortal = 'CARPRO Immortal™';
const Sti4000 = 'STI Revive 4000';
const Sti9000 = 'STI Revive 9000';

//miniatura prodotto
setTimeout(function() {
    // Funzione helper per rimuovere l'elemento successivo
    function removeNextIfTitleContains(query, text) {
        document.querySelectorAll(query).forEach(function(item) {
            if (item.textContent.includes(text)) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.remove();
                }
            }
        });
    }

    // Applica la funzione ai vari titoli
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'CeramicGuard');
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'QuarzProfessional');
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'QuarzFinest');
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'DQuartz');
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'CarproImmortal');
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'Sti4000');
    removeNextIfTitleContains('product-item.product-item .product-item-meta__title', 'Sti9000');
}, 1000);


if(productTitle == CeramicGuard ||
    productTitle == QuarzProfessional ||
    productTitle == QuarzFinest ||
    productTitle == DQuartz) {
    box_grigio.remove();
    barra_aggiungi.remove();
}
//prodotti no vendita FINE ___

// Abilita page header
const pageHeader = document.querySelector('.boost-pfs-enable-instant-search .page-header .page-header__text-wrapper');

setTimeout(function () {
    const hasDistributore = Array.from(document.querySelectorAll('span.breadcrumb__link'))
        .some(link => link.innerText.includes('Diventa Distributore Esclusivo'));

    const hasTeam = Array.from(document.querySelectorAll('span.breadcrumb__link'))
        .some(link => link.innerText.includes('Entra nel Team'));

    const hasProClub = Array.from(document.querySelectorAll('span.breadcrumb__link'))
        .some(link => link.innerText.includes('Carismatix Pro Club'));

    if (hasDistributore || hasTeam || hasProClub) {
        if (pageHeader) {
            pageHeader.classList.add('visibile');
        }
    }
}, 1000);


// Separo righe - multi-line-text - SCHEDA TECNICA
setTimeout(function() {
    const getTab = document.querySelector('#block-template--16611716104421__product-content-58e82b46-6d21-489f-95ed-5cffdacd23a4-content p');
    if (getTab) {
        const newTextTab = getTab.textContent.replace(/, /g, '\n');
        getTab.innerHTML = newTextTab;
    }
}, 1000);


//clicco la sezione
setTimeout(function() {
    console.log('add');
    // Seleziona gli elementi e aggiunge la classe
    const elements = document.querySelectorAll('.eapps-google-maps-small');
    elements.forEach(element => {
        element.classList.add('eapps-google-maps-bar-opened');
    });
}, 5000);


//mini cart visibility
document.querySelectorAll('a[aria-controls="mini-cart"]').forEach(function(element) {
    element.addEventListener('click', function() {
        const checkoutButton = document.querySelector('#mini-cart .checkout-button');
        if (checkoutButton) {
            checkoutButton.addEventListener('mouseenter', function() {
                document.querySelector('#rawa-button').classList.add('none');
            });

            checkoutButton.addEventListener('mouseleave', function() {
                document.querySelector('#rawa-button').classList.remove('none');
            });
        }
    });
});


//mini cart visibility
document.querySelectorAll('a[aria-controls="mini-cart"]').forEach(function(element) {
    element.addEventListener('click', function() {
        const checkoutButton = document.querySelector('#mini-cart .checkout-button');
        if (checkoutButton) {
            checkoutButton.addEventListener('mouseenter', function() {
                document.querySelector('#rawa-button').classList.add('none');
            });

            checkoutButton.addEventListener('mouseleave', function() {
                document.querySelector('#rawa-button').classList.remove('none');
            });
        }
    });
});


//cart bundle customization
const bundleElements = document.querySelectorAll('#cart .th_bundle_discount_text');
bundleElements.forEach(function(element) {
    if (element.textContent.indexOf('Bundle') !== -1) {
        let ancestor = element;
        for (let i = 0; i < 7; i++) {
            ancestor = ancestor.parentNode;
        }
        const quantitySelector = ancestor.querySelector('.quantity-selector');
        if (quantitySelector) {
            quantitySelector.remove();
        }
    }
});


//autoscroll mobile rivenditori
window.addEventListener('load', function() {
  if (window.location.href === 'https://carismatix.it/pages/rivenditori' && window.innerWidth < 767) {
    setTimeout(function() {
      window.scroll({
        top: window.scrollY + 160,
        left: 0,
        behavior: 'smooth'
      });
    }, 2000);
  }
});

//class per landingp prodotti Marco
const heroBoxLanding = document.querySelector('#cartec_refinish_hero_box');
if (heroBoxLanding) {
    document.body.classList.add('landing_product_page');
}

//bug shinemate
const shineMateVendor = document.querySelector('.product-meta__vendor a'); //Shinemate
const optionShinemate = document.querySelectorAll('.product .product-form .product-form__variants .select-wrapper button');
const customerBodyAccount = document.querySelector('body#customers-account');

setTimeout(function() {
    if (customerBodyAccount) {
        customerBodyAccount.classList.remove('boost-pfs-enable-instant-search');
        console.log('remove');
    }
}, 2000);


//risolvo il problema delle varianti scontate
var etichetta = document.querySelector('.product-meta__price-list-container .product-meta__label-list');
var testoSelect = "VALORE_IMPROBABILE";

// Aggiunge eventi di click e keyup agli elementi specificati
document.querySelectorAll("combo-box .combo-box__option-item").forEach(function(item) {
    item.addEventListener("click", handleChange);
    item.addEventListener("keyup", handleChange);
});

function handleChange() {
    var testoAttuale = document.querySelector("#product-custom .product-form__option-selector .select__selected-value").textContent;
    
    if (testoAttuale !== testoSelect) {
        //console.log("Il testo del div è cambiato!");

        if (etichetta) {
            setTimeout(function(){
                //console.log("Tento di appendere la stringa dell'etichetta.");
                document.querySelector('.product-meta__price-list-container .price.price--compare').appendChild(etichetta.cloneNode(true));
            }, 10);
            
        } else {
            //console.log("La stringa dell'etichetta non esiste!");
        }

        testoSelect = testoAttuale;
    }
}


//tolgo righe extra pagina account utente > programma fedeltà
setTimeout(() => {
    const puntiNegativi = document.querySelectorAll('.bon-text-danger');
    if (puntiNegativi) {
        puntiNegativi.forEach(function(elemento) {
        elemento.parentNode.remove();
        });
    }
}, 2000);


/*etichetta in differenza euro*/
function cleanAndParsePrice(priceString) {
    var cleanedPrice = priceString.replace('€', '').replace(',', '.');
    var parsedPrice = parseFloat(cleanedPrice);
    return parsedPrice;
}

function formatPrice(priceNumero) {
    var formattedPrice = priceNumero.toFixed(2).replace('.', ',') + '€';
    return formattedPrice;
}

setTimeout(function(){

    var itemslistCollection = document.querySelectorAll('.boost-pfs-filter-product-item');

    if(itemslistCollection){

        console.log('boostItems');
        
        itemslistCollection.forEach(function(item){
            var $this = item;

            console.log('count');

            if ($this.querySelector('.etichetta_sales_in_euro')) {

                console.log('enter');

                var salesPrice = cleanAndParsePrice($this.querySelector('span.boost-pfs-filter-product-item-sale-price').textContent);
                var comparedPrice = cleanAndParsePrice($this.querySelector('s').textContent);

                var diffPrice = comparedPrice - salesPrice;
                var diffPriceFormattato = formatPrice(diffPrice);

                var etichettaSale = $this.querySelector('.sale');

                if(etichettaSale){
                        etichettaSale.textContent = 'RISPARMIA ' + diffPriceFormattato;
                }
            }
        });
    }
}, 3000);





/*contdown js*/
/*(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/29/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.querySelector("container_count").classList.add('none');
                clearInterval(x);
            }
            //seconds
        }, 0)
}());*/
/*contdown js - end*/

});