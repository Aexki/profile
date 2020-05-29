function go() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"
    console.log(screen.height)
    document.documentElement.scrollTop = screen.height
}