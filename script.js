var toggleMode = document.getElementById('toggle');

toggleMode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        document.getElementById("theme").innerHTML = 'light_mode'; 
    } else {
        document.getElementById("theme").innerHTML = 'dark_mode';
    }
}