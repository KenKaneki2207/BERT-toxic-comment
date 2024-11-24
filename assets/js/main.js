function classifyComment() {
    event.preventDefault(); 
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
    }, 2000); // Simulate a 2-second loading time
}

document.getElementById('nav-toggle').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});