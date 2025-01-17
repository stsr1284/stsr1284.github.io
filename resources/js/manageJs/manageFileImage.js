document.addEventListener("DOMContentLoaded", function () {
    const franAddImageInput = document.querySelector(".franImg");
    const franImgFileNameDivs = document.querySelector(".franImgFileName");
    
    franAddImageInput.addEventListener("change", function () {
        const fileName = franAddImageInput.files[0].name;
        franImgFileNameDivs.textContent = fileName;
    });
    
    const menuAddImageInput = document.querySelector(".menuImg");
    const menuImgFileNameDivs = document.querySelector(".menuImgFileName");

    menuAddImageInput.addEventListener("change", function () {
        const fileName = menuAddImageInput.files[0].name;
        menuImgFileNameDivs.textContent = fileName;
    });
});
