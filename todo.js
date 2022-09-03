// Kapatma butonu oluşturup tüm liste elemanlarına append edilmesi
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "btn-close";
  myNodelist[i].appendChild(span);
}

// Kapatma butonuna tıklandığında mevcut liste elemanının saklanması
var close = document.getElementsByClassName("btn-close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Liste elemanına tıklandığında check sembolünün eklenmesi
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Yeni liste elemanının oluşturulması

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      //alert("You must write something!");
      $('#liveToastNullErr').toast('show')
    } else {
      document.getElementById("list").appendChild(li);
      $('#liveToastAddList').toast('show');
      localStorage.setItem(`${inputValue}`, inputValue);
    }
    document.getElementById("task").value = "";

    var span = document.createElement("SPAN");
    span.className = "btn-close";
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        console.log("slasm")
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


