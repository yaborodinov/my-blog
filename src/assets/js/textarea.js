const textarea = document.querySelectorAll("[data-autoresize]");

textarea.forEach(i => {
    let textAreaHeight = i.offsetHeight
    i.addEventListener("input", (e) => {
        
        let $this = e.target;

        $this.style.height = textAreaHeight + "px";
        $this.style.height = $this.scrollHeight + "px";
    })
})