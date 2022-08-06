const text = document.getElementById('text');
const logoText = document.getElementById('logoText');
const font = document.getElementById('font');
const logoFont = document.getElementById('logoFont')
const fontColor = document.getElementById('fontColor');
const logoFolor = document.getElementById('logoFontColor')
const textSize = document.getElementById('textSize');
const logoTize = document.getElementById('logoTextSize')
const color = document.getElementById('Color');
const logoColor = document.getElementById('logoColor')
const shape = document.getElementById('BckShape');
const logoShape = document.getElementById('logoShape')
const up_btn = document.getElementById('up_btn');
const logo_btn = document.getElementById('u_btn');
const sel_btn = document.getElementById('sel_btn');
const label = document.getElementById('label');
const canvass = document.getElementById('canvas');
const icon = document.getElementById('icon');
const iconp = document.getElementById('iconp');
const dwn_btn = document.getElementById('dwn_btn');
const form = document.getElementById('change');





function customize(){
    iconp.innerHTML = text.value
    label.style.display = 'none'
    icon.style.display = 'none'
    iconp.style.left = '0'
    iconp.style.bottom = '0'
    canvass.style.textAlign = 'center'
    if(iconp.style.display = 'none'){
        iconp.style.display = 'block'
    }
};

font.addEventListener('change', () => {
    iconp.style.fontFamily = font.options[font.selectedIndex].text
    label.style.display = 'none'
    icon.style.display = 'none'
    iconp.style.left = '0'
    iconp.style.bottom = '0'
    canvass.style.textAlign = 'center'
    if(iconp.style.display = 'none'){
        iconp.style.display = 'block'
    }
});
fontColor.addEventListener('change', () => {
    iconp.style.color = fontColor.options[fontColor.selectedIndex].text
    label.style.display = 'none'
    icon.style.display = 'none'
    iconp.style.left = '0'
    iconp.style.bottom = '0'
    canvass.style.textAlign = 'center'
    if(iconp.style.display = 'none'){
        iconp.style.display = 'block'
    }
});
textSize.addEventListener('change', () => {
    iconp.style.fontSize = textSize.value + 'px'
    label.style.display = 'none'
    icon.style.display = 'none'
    iconp.style.left = '0'
    iconp.style.bottom = '0'
    canvass.style.textAlign = 'center'
    if(iconp.style.display = 'none'){
        iconp.style.display = 'block'
    }
});
color.addEventListener('change', () => {
    canvass.style.background = color.options[color.selectedIndex].text
    label.style.display = 'none'
    icon.style.display = 'none'
    iconp.style.left = '0'
    iconp.style.bottom = '0'
    canvass.style.textAlign = 'center'
    if(iconp.style.display = 'none'){
        iconp.style.display = 'block'
    }
});
shape.addEventListener('change', () => {
    if(shape.selectedIndex == 0  ){
        canvass.style.borderRadius = '0px';
    }else if(shape.selectedIndex == 1){
        canvass.style.borderRadius = '152px';
    }else {
        canvass.style.borderRadius = '10px';
    }
    label.style.display = 'none'
});


dwn_btn.onclick = function() {
    // const target = document.getElementById('favicon');


    html2canvas(canvass).then((canvas) => {
       const base64image = canvas.toDataURL("image/png");
       var anchor = document.createElement('a');
       anchor.setAttribute("href", base64image);
       anchor.setAttribute("download", "my-image.png");
       anchor.click();
       anchor.remove();
    });
};

var loadFile = function(event) {
	var image = document.getElementById('icon');
	image.src = URL.createObjectURL(event.target.files[0]);
};

logo_btn.onclick = () => {
    label.style.display = 'none'
    iconp.style.display = 'none'
    canvass.style.background = 'transparent'
    canvass.style.border = '1px transparent'
    icon.classList.add('icon')
    icon.classList.remove('iconf')
    if(icon.style.display = 'none'){
        icon.style.display = 'block'
    }
}


// logo text functions 


logoText.addEventListener('change', () => {
    iconp.innerHTML = logoText.value
    label.style.display = 'none'
    iconp.style.left = '39px'
    iconp.style.bottom = '16px'
    if((iconp.style.display = 'none') || (icon.style.display = 'none')){
        iconp.style.display = 'block'
        icon.style.display = 'block'
    }
});

logoFont.addEventListener('change', () => {
    iconp.style.fontFamily = logoFont.options[logoFont.selectedIndex].text
    label.style.display = 'none'
    iconp.style.left = '39px'
    iconp.style.bottom = '16px'
    if((iconp.style.display = 'none') || (icon.style.display = 'none')){
        iconp.style.display = 'block'
        icon.style.display = 'block'
    }
});


logoFolor.addEventListener('change', () => {
    iconp.style.color = logoFolor.options[logoFolor.selectedIndex].text
    label.style.display = 'none'
    iconp.style.left = '39px'
    iconp.style.bottom = '16px'
    if((iconp.style.display = 'none') || (icon.style.display = 'none')){
        iconp.style.display = 'block'
        icon.style.display = 'block'
    }
});


logoTize.addEventListener('change', () => {
    iconp.style.fontSize = logoTize.value + 'px'
    label.style.display = 'none'
    iconp.style.left = '39px'
    iconp.style.bottom = '16px'
    if((iconp.style.display = 'none') || (icon.style.display = 'none')){
        iconp.style.display = 'block'
        icon.style.display = 'block'
    }
});

logoColor.addEventListener('change', () => {
    canvass.style.background = logoColor.options[logoColor.selectedIndex].text
    label.style.display = 'none'
    iconp.style.left = '39px'
    iconp.style.bottom = '16px'
    if((iconp.style.display = 'none') || (icon.style.display = 'none')){
        iconp.style.display = 'block'
        icon.style.display = 'block'
    }
});


logoShape.addEventListener('change', () => {
    if(logoShape.selectedIndex == 0  ){
        canvass.style.borderRadius = '0px';
    }else if(logoShape.selectedIndex == 1){
        canvass.style.borderRadius = '152px';
    }else {
        canvass.style.borderRadius = '10px';
    }
    label.style.display = 'none'
});

up_btn.onclick = () => {
    label.style.display = 'none'
    canvass.style.background = 'transparent'
    canvass.style.border = '1px transparent'
    icon.classList.remove('icon')
    icon.classList.add('iconf')
    if((iconp.style.display = 'none') || (icon.style.display = 'none')){
        iconp.style.display = 'block'
        icon.style.display = 'block'
    }
}