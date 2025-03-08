let parent=document.getElementById("members")
let existingDivs = parent.getElementsByClassName("m").length;
for (let i=0; i<13; i++) {
    let place=document.createElement("div")
    if (i === 0 && existingDivs > 0) {
        place.style.clear = "left";
    }
    place.style.width="350px"
    place.style.height="500px"
    place.style.backgroundColor="cyan"
    place.style.opacity="0.5"
    place.style.display="inline-block"
    place.style.marginLeft="20px"
    place.style.marginTop="20px"
    place.style.borderWidth="5px"
    place.style.borderRadius="5px"
    parent.appendChild(place)
}
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '0';
}
function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-100%';
}
function showBar() {
    const mainbar=document.querySelector('.mainbar')
    mainbar.style.display='flex'
}
function hideBar() {
    const mainbar=document.querySelector('.mainbar')
    mainbar.style.display='none'
}
/*
function createBinary() {
    const binary = document.createElement('div');
    binary.classList.add('binary');
    binary.style.setProperty('--side', Math.random() > 0.5 ? 0 : 9);
    binary.style.animationDuration = `${Math.random() * 3 + 2}s`; //
    binary.innerText = Array.from({length: 8}, () => Math.random() > 0.5 ? '0' : '1').join('');
    document.body.appendChild(binary);

    setTimeout(() => binary.remove(), 5000); // Clean up after fall
  }

  setInterval(createBinary, 100);
  */