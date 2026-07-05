const no = document.getElementById("no");
const yes = document.getElementById("yes");

no.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    no.style.left = x + "px";
    no.style.top = y + "px";
});

yes.addEventListener("click", () => {
    document.body.innerHTML = `
    <div style="display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    flex-direction:column;
    background:pink;
    font-family:Arial;">
        <h1>I Love You ❤️🥰</h1>
        <h2>Forever Together 💖</h2>
    </div>`;
});
