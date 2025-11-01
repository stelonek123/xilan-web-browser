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

    site_content.append("Xilan Web Browser (or XWB) is a simple web browser developed by Xilan Studio(Pefek45), it was created mainly for low end PCs. This is cause of low count of functions, but remember, this is only the beggining. We are gonna add more functions, like local password saving.");

    BOp1.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = '<header class="FeaturesHeader">Whats New?</header> <br>(0.8) Honestly Navigation Bar now have icons<br> Added simple tab system (double click on tabbar to add new tab), <br> Migrated project to PySide6 <br><br> (0.9p1) App Icon changed, <br><br> (0.9p2) -Added first settings[New tab page, Dark mode]<br>-Added Tab Button'
    })
    BOp2.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = 'Download XWB for Windows(0.9p1): <a href="https://www.mediafire.com/file/osyjwgaw62qejz2/xwb_winsetup_0.9p1.exe/file" target="_blank">Click Here</a><br> Download XWB for Windows(0.9p2): <a href="https://www.mediafire.com/file/k2f60ouh5ekjmsi/xwb_winsetup09p2.exe/file" target="_blank">Click Here</a><br> You are downloading Xilan Web Browser, thanks mate!';
    })
    BOp3.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = '<header class="FeaturesHeader">Features</header><br><header class="FeaturesHeader">1. Lite-weight</header>This browser can be used on low-end PCs, it s easy, but it s only first version, there will be more functions, its just about time.<br><br><header class="FeaturesHeader">2. Language</header>In two senses: basicaly the language of browser is english. Other Means that was coded with Python\PyQT5, easy programer language with simple syntax<br><br></br>';
    })
    BOp4.addEventListener("click", function(event) {
        event.preventDefault();
        site_content.innerHTML = '<header class="FeaturesHeader">Update Log</header><br><header class="FeaturesHeader">27.10.2025 - 0.4 - Code update</header><br><br><header class="FeaturesHeader">28.10.2025 - 0.6 - PySide6 Migration</header><br><br><header class="FeaturesHeader">29.10.2025 - 0.8 - Tabs Update</header><br><br><header class="FeaturesHeader">29.10.2025 - 0.9p1 - Icon Update</header><br><br><header class="FeaturesHeader">31.10.2025 - 0.9p2 - Settings Added(Dark/Light mode, Choose new tab site), added Tab button</header>';
    })

}



