<center>

<h1>guess game </h1>
<p>guess number form 1 to 10</p>

<input id="inp" type="number">
<button onclick="che()">check</button>

<p id="res"></p>
<p id="rel"></p>
</center>
<script>
    

    var inp1 = document.getElementById("inp");
    var res = document.getElementById("res");
    var res1 = document.getElementById("rel");

    var ran1 = Math.random();
    var ran = Math.floor((ran1*10)+1);


    var num = inp1.value

    function che(){

        if(num == ran){
            console.log(res.textContent = "you won")
            alert("you won buddy")
        }
        else{
            console.log(res.textContent = "you lose")
            alert("you lose buddy")
        }

        console.log(res1.textContent = ran);
    }
</script>
