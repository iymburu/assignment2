function search(){
    var input,li,ul,a,i,txtValue,filter
    input=document.getElementById("myinput")
    filter = input.value.toUpperCase()
    ul = document.getElementById("Blist")
    li = ul.getElementsByTagName("div")

    for (i=0; i< li.length; i++){
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent || a.innerText
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
       } else {
            li[i].style.display = "none";
    }
  }


    }
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent actual form submission for demo

      const username = document.getElementById("fname").value;

      // Create a session cookie (no expiration date means it lasts until browser closes)
      document.cookie = `username=${encodeURIComponent(username)}; path=/`;
      alert(`session cookie added for ${username} created`);
    });})