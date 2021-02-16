(function () {
    var text = document.getElementById('text');
    var form = document.getElementById('form');
    var container = document.createElement('u');
    var erase = document.getElementsByTagName('li');

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        var valueText = document.createElement('li');
        valueText.innerHTML += text.value + ' <button class="erase"> Done | X</button>';
        container.appendChild(valueText)
        form.appendChild(container);
        text.value = '';

        for (let i = 0; i < erase.length; i++) {
            erase[i].addEventListener('click', function () {
            this.remove();
            });
        }
        
    }, false);

    

    
}())