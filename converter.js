const text = document.getElementById("text");
const logoText = document.getElementById("logoText");
const font = document.getElementById("font");
const logoFont = document.getElementById("logoFont");
const fontColor = document.getElementById("fontColor");
const logoFolor = document.getElementById("logoFontColor");
const textSize = document.getElementById("textSize");
const logoTize = document.getElementById("logoTextSize");
const color = document.getElementById("Color");
const logoColor = document.getElementById("logoColor");
const shape = document.getElementById("BckShape");
const logoShape = document.getElementById("logoShape");
const up_btn = document.getElementById("up_btn");
const logo_btn = document.getElementById("u_btn");
const sel_btn = document.getElementById("sel_btn");
const label = document.getElementById("label");
const canvass = document.getElementById("canvas");
const iconn = document.getElementById("icon");
const iconp = document.getElementById("iconp");
const dwn_btn = document.getElementById("dwn_btn");
const form = document.getElementById("change");

function customize() {
  iconp.innerHTML = text.value;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
}

font.addEventListener("change", () => {
  iconp.style.fontFamily = font.options[font.selectedIndex].text;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
fontColor.addEventListener("change", () => {
  iconp.style.color = fontColor.options[fontColor.selectedIndex].text;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
textSize.addEventListener("change", () => {
  iconp.style.fontSize = textSize.value + "px";
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
color.addEventListener("change", () => {
  canvass.style.background = color.options[color.selectedIndex].text;
  label.style.display = "none";
  iconn.style.display = "none";
  iconp.style.left = "0";
  iconp.style.bottom = "0";
  canvass.style.textAlign = "center";
  if ((iconp.style.display = "none")) {
    iconp.style.display = "block";
  }
});
shape.addEventListener("change", () => {
  if (shape.selectedIndex == 0) {
    canvass.style.borderRadius = "0px";
  } else if (shape.selectedIndex == 1) {
    canvass.style.borderRadius = "72px";
  } else {
    canvass.style.borderRadius = "10px";
  }
  label.style.display = "none";
});

dwn_btn.onclick = function () {
  // const target = document.getElementById('favicon');

  const zip = new JSZip();
  zip.file("links.html", "Hello World\n");
  const img = zip.folder("favicon");

  html2canvas(canvass).then((canvas) => {
    // var ctx = canvas.getContext("2d");
    // var imgData = ctx.createImageData(100, 100);
    var base64image = new Image();
    base64image.crossOrigin = "Anonymous";
    base64image.src = canvas.toDataURL("image/ico");
    const convertURIToImageData2 = (url) => {
        return new Promise((resolve, reject) => {
          if (!url) {
            return reject();
          }
          base64image.onload = () => {
            canvas.width = base64image.width;
            canvas.height = base64image.height;
            context.drawImage(base64image, 0, 0, canvas.width, canvas.height);
            resolve(context.getImageData(0, 0, canvas.width, canvas.height));
          };
          base64image.src = url;
        });
      };
      const url2 = base64image.src;
      async () => {
        const imgData = await convertURIToImageData2(url2);
        img.file("favicon.ico", imgData, { base64: true });
        console.log(imgData);
      };
      load()
      img.file("favicon.ico", imgData, { base64: true });

    //   var base64image1 = new Image();
    //   base64image1.crossOrigin = "Anonymous";
    //   base64image1.style.height = "16px";
    //   base64image1.style.width = "16px";
    //   base64image1.src = canvas.toDataURL("image/png");
    //   const convertURIToImageData1 = (url) => {
    //     return new Promise((resolve, reject) => {
    //       if (!url) {
    //         return reject();
    //       }
    //       base64image1.onload = () => {
    //         canvas.width = base64image1.width;
    //         canvas.height = base64image1.height;
    //         context.drawImage(base64image1, 0, 0, canvas.width, canvas.height);
    //         resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    //       };
    //       base64image1.src = url;
    //     });
    //   };
    //   const url1 = base64image1.src;
    //   async () => {
    //     const imgData1 = await convertURIToImageData1(url1);
        
    //     console.log(imgData1);
    //   };

    // var base64image2 = new Image();
    // base64image2.crossOrigin = "Anonymous";
    // base64image2.style.height = "16px";
    // base64image2.style.width = "16px";
    // base64image2.src = canvas.toDataURL("image/png");
    // const convertURIToImageData = (url) => {
    //   return new Promise((resolve, reject) => {
    //     if (!url) {
    //       return reject();
    //     }
    //     base64image2.onload = () => {
    //       canvas.width = base64image2.width;
    //       canvas.height = base64image2.height;
    //       context.drawImage(base64image2, 0, 0, canvas.width, canvas.height);
    //       resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    //     };
    //     base64image2.src = url;
    //   });
    // };
    // const url = base64image2.src;
    // async () => {
    //   const imgData2 = await convertURIToImageData(url);
      
    //   console.log(imgData2);
    // };
   
    // img.file("favicon-16x16.png", imgData1, { base64: true });
    // img.file("favicon-32x32.png", imgData2, { base64: true });
    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        saveAs(content, "favicon_ico.zip");
    });

    var anchor = document.createElement("a");
    anchor.setAttribute("href", zip);
    anchor.setAttribute("download", "favicon_ico.zip");
    anchor.click();
    anchor.remove();
  });
};

const convertURIToImageData = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      return reject();
    }
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    };
    image.crossOrigin = "Anonymous";
    image.src = url;
  });
};

// function toDataURL(src, callback) {
//     if (!src) {
//       return alert("src not found");
//     }
//     var base64image1 = new Image();
//     base64image1.crossOrigin = "Anonymous";
//     base64image1.style.height = "16px";
//     base64image1.style.width = "16px";
//     base64image1.src = canvas.toDataURL("image/png");
//     base64image1.onload = () => {
//       var context = canvas.getcontext("2d");
//       canvas.height = this.naturalHeight;
//       canvas.width = this.naturalWidth;
//       context.drawImage(this, 0, 0);
//       var dataURL = canvas.toDataURL("image/png");
//       callback(dataURL);
//     };
//     base64image1.src = src;
//   }

//   toDataURL("base64image1.src", function (dataURL) {
//     var imgData1 = dataURL;
//     img.file("favicon-16x16.png", imgData1, { base64: true });
//   });

var loadFile = function (event) {
  var image = document.getElementById("icon");
  image.src = URL.createObjectURL(event.target.files[0]);
};

logo_btn.onclick = () => {
  label.style.display = "none";
  iconp.style.display = "none";
  canvass.style.background = "transparent";
  canvass.style.border = "1px transparent";
  iconn.classList.add("icon");
  iconn.classList.remove("iconf");
  if ((iconn.style.display = "none")) {
    iconn.style.display = "block";
  }
};

// logo text functions

logoText.addEventListener("change", () => {
  iconp.innerHTML = logoText.value;
  label.style.display = "none";
  iconp.style.left = "39px";
  iconp.style.bottom = "16px";
  if ((iconp.style.display = "none") || (iconn.style.display = "none")) {
    iconp.style.display = "block";
    iconn.style.display = "block";
  }
});

logoFont.addEventListener("change", () => {
  iconp.style.fontFamily = logoFont.options[logoFont.selectedIndex].text;
  label.style.display = "none";
  iconp.style.left = "39px";
  iconp.style.bottom = "16px";
  if ((iconp.style.display = "none") || (iconn.style.display = "none")) {
    iconp.style.display = "block";
    iconn.style.display = "block";
  }
});

logoFolor.addEventListener("change", () => {
  iconp.style.color = logoFolor.options[logoFolor.selectedIndex].text;
  label.style.display = "none";
  iconp.style.left = "39px";
  iconp.style.bottom = "16px";
  if ((iconp.style.display = "none") || (iconn.style.display = "none")) {
    iconp.style.display = "block";
    iconn.style.display = "block";
  }
});

logoTize.addEventListener("change", () => {
  iconp.style.fontSize = logoTize.value + "px";
  label.style.display = "none";
  iconp.style.left = "39px";
  iconp.style.bottom = "16px";
  if ((iconp.style.display = "none") || (iconn.style.display = "none")) {
    iconp.style.display = "block";
    iconn.style.display = "block";
  }
});

logoColor.addEventListener("change", () => {
  canvass.style.background = logoColor.options[logoColor.selectedIndex].text;
  label.style.display = "none";
  iconp.style.left = "39px";
  iconp.style.bottom = "16px";
  if ((iconp.style.display = "none") || (iconn.style.display = "none")) {
    iconp.style.display = "block";
    iconn.style.display = "block";
  }
});

logoShape.addEventListener("change", () => {
  if (logoShape.selectedIndex == 0) {
    canvass.style.borderRadius = "0px";
  } else if (logoShape.selectedIndex == 1) {
    canvass.style.borderRadius = "72px";
  } else {
    canvass.style.borderRadius = "10px";
  }
  label.style.display = "none";
});

up_btn.onclick = () => {
  label.style.display = "none";
  canvass.style.background = "transparent";
  canvass.style.border = "1px transparent";
  iconn.classList.remove("icon");
  iconn.classList.add("iconf");
  if ((iconp.style.display = "none") || (iconn.style.display = "none")) {
    iconp.style.display = "block";
    iconn.style.display = "block";
  }
};

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled >= 643) {
    document.getElementById("right").classList.add("scrolled");
    document.getElementById("right").classList.remove("scroll");
  } else document.getElementById("right").classList.remove("scrolled");
  document.getElementById("right").classList.add("scroll");
});
