let user = [
    {
        id:"00001",
        login:"xurshida",
        password:"200606",
        username:"Xurshidaxon"
    }
]
$(document).ready(function (){
    let kirishSoni = 0;
    
    $("#startModal").modal("show");
    $("#startBtn").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if (login !="" && password!=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    topildi = true;
              if (password == item.password){
                    $("#workingBlock").toggleClass("d-none");
                    $("#kassir").html(item.username);
                    $("#startModal").modal("hide");
                }
                }
            });
            if (!topildi){
                if (kirishSoni >2){
                    $("#startModal").modal("hide");
                    alert("Tizim bloklandi!")
                }
                alert("Login yoki parol xato")
                kirishSoni++
            }
        }else{
            alert("Login va parol qatorlarini to'ldiring")
        }

    })

});