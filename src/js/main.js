
// JavaScript لفتح وإغلاق الـ leftbar في الشاشات الصغيرة
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var leftbar = document.getElementById('leftbar');

    menuIcon.addEventListener('click', function () {
        // إضافة/إزالة الفئة "open" لعرض وإخفاء الـ leftbar
        leftbar.classList.toggle('open');
    });
});
// Get elements
var modal = document.getElementById("taskModal");
var btn = document.getElementById("addTaskBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks outside the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




