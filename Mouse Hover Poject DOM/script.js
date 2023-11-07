

let div = document.createElement("div");
document.body.append(div);

let span = document.createElement("span");
span.id = "span1";
span.textContent = "I am Always king ";

span.addEventListener('mouseover', function() {
    this.style.color = 'blue';
});

span.addEventListener('mouseout', function() {
    this.style.color = '';
});

div.append(span);



