function Main() {
    document.getElementById("mainpar").append("This is simple web browser for lower class pcs, we (Oiduts Studio/Xilan Studio)");
    document.getElementById("qpar").append("What you do on your PC, stays on your PC")
}
function Tab() {
    const BOp1 = document.getElementById("BOp1")
    const BOp2 = document.getElementById("BOp2")
    const BOp3 = document.getElementById("BOp3")
    const BOp4 = document.getElementById("BOp4")
    
    //site content
    const site_content = document.getElementById("site-content")

    site_content.append("Xilan Web Browser (or XWB) is a simple web browser developed by Xilan Studio(Pefek45), it was created mainly for low end PCs. This is cause of low count of functions, but remember, this is only version 0.4. We are gonna add more functions, like tabs or local password saving.");

    BOp1.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = "Xilan Web Browser (or XWB) is a simple web browser developed by Xilan Studio(Pefek45), it was created mainly for low end PCs. This is cause of low count of functions, but remember, this is the beggining. We are gonna add more functions, like tabs or local password saving. "
    })
    BOp2.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = 'Download XWB for Windows: <a href="https://www.mediafire.com/file/nf39coh9nn3h0it/xwb_winsetup.exe/file" target="_blank">Click Here</a><br> You are downloading Xilan Web Browser, thanks mate!';
    })
    BOp3.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = '<header class="FeaturesHeader">Features</header><br><header class="FeaturesHeader">1. Lite-weight</header>This browser can be used on low-end PCs, it s easy, but it s only first version, there will be more functions, its just about time.<br><br><header class="FeaturesHeader">2. Language</header>In two senses: basicaly the language of browser is english. Other Means that was coded with Python\PyQT5, easy programer language with simple syntax<br><br></br>';
    })
    BOp4.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = '<header class="FeaturesHeader">News</header><br><header class="FeaturesHeader">27.10.2025 - 0.4 - Code update</header><br><br><header class="FeaturesHeader">28.10.2025 - 0.6 - PySide6 Migration</header><br><br><header class="FeaturesHeader">29.10.2025 - 0.8 - Tabs Update</header>';
    })

}


