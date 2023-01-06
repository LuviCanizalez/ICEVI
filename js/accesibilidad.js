const setDefaultTheme = (element) => {
    element.addEventListener("load", () => {
       let contrastStatus = localStorage.getItem("highContrast");
       if(contrastStatus === undefined){
          console.log(contrastStatus);
          document.querySelector("body").classList.add("light");
       }else if (contrastStatus === "true"){
          document.querySelector("body").classList.add("high");
          console.log(contrastStatus);
       }else {
          document.querySelector("body").classList.add("light");
          console.log(contrastStatus);
       }
    });
 }
 
 const contrast = (element) => {
    element.addEventListener("click", () => {
       let contrastStatus = localStorage.getItem("highContrast");
       if(contrastStatus === undefined){
          document.querySelector("body").className = "high";
          localStorage.setItem("highContrast", "true");
       }else if (contrastStatus === "true"){
          document.querySelector("body").className = "light";
          localStorage.setItem("highContrast", "false");
       }else {
          document.querySelector("body").className = "high";
          localStorage.setItem("highContrast", "true");
       }
    });
 }
 
 const getFontSize = () => {
    return parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--font-size")
    );
 };
 
 const increase = (element) => {
     element.addEventListener("click", () => {
        let fontSize = getFontSize();
        document.documentElement.style.setProperty(
            "--font-size",
            `${fontSize * 1.1}px`
        );
     });
 };
 
 const decrease = (element) => {
    element.addEventListener("click", () => {
       let fontSize = getFontSize();
       document.documentElement.style.setProperty(
           "--font-size",
           `${fontSize * 0.9}px`
       );
    });
 };

 
 window.onload = getFontSize();
 setDefaultTheme(window);
 contrast(document.getElementById("contrast"));
 increase(document.getElementById("increase"));
 decrease(document.getElementById("decrease"));