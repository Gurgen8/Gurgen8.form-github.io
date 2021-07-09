
// //variables

 
 var userName=document.querySelector("#your__name")
 var mail=document.querySelector("#your__email")
 var phone=document.querySelector("#your__phone")
 var password=document.querySelector("#your__password")


  ////JQUERY/////
  

  ///input required


phone.required=true
mail.required=true
userName.required=true
password.required=true


  ///USER OBJECT


  var user={};



  ////validation-regexp

  function regName(){
    return  /^[A-Za-z.]{3,15}$/g;
  }

  function regEmail(){
    return /^[A-z\d]{3,20}@[A-z\d]{3,8}[.][a-z]{2,6}$/g
  }


  function regPassword(){
    return /^([A-z]|[0-9]|[\D]){6,15}$/g
  }

  function regPhone(){
    return /^(0{1}[\d]{8})$|(\(\+374\)){1}[0-9]{8}$/g
  }

  ///validate inputs


//name


  $(".form__control #your__name").change(function (){
     if($(this).val()==="" || $(this).length===0 ||  !(regName().test($(this).val())) ){
      $("small").text("Please enter corect name (3-15 letter)")
     $("#message1, #eror1").css({visibility:"visible", color:"red"})
     $(this).css({border:"4px solid red"})
     $("#ok1").css("visibility","hidden")
    
  
    }else{
      $(this).css({border:"4px solid green"})
      $("#message1").text("OK")
       $("#message1").css("color","green")
      $(".form__control  #eror1").css({visibility:"hidden"})
      $("#ok1").css("visibility","visible")
      
    }
    
  })

 // email

  $(".form__control #your__email").change(function (){
    if($(this).val()==="" || $(this).length===0 ||  !(regEmail().test($(this).val())) ){
     $("#message2").text("Please enter corect email (@ .)")
    $(".form__control #message2, #eror2").css({visibility:"visible", color:"red"})
    $(this).css({border:"4px solid red"})
    $("#ok2").css("visibility","hidden")
   
 
   }else{
     $(this).css({border:"4px solid green"})
     $("#message2").text("OK")
      $("#message2").css("color","green")
     $(".form__control  #eror2").css({visibility:"hidden"})
     $("#ok2").css("visibility","visible")
     
   }
   
 })

 //password


 
 $(".form__control #your__password").change(function (){
  if($(this).val()==="" || $(this).length===0 ||  !(regPassword().test($(this).val())) ){
   $("#message3").text("Please enter corect password (6-15)")
  $(".form__control #message3, #eror3").css({visibility:"visible", color:"red"})
  $(this).css({border:"4px solid red"})
  $("#ok3").css("visibility","hidden")
 

 }else{
   $(this).css({border:"4px solid green"})
   $("#message3").text("OK")
    $("#message3").css("color","green")
   $(".form__control  #eror3").css({visibility:"hidden"})
   $("#ok3").css("visibility","visible")
   
 }
 
})


//phone


 
$(".form__control #your__phone").change(function (){
  if($(this).val()==="" || $(this).length===0 ||  !(regPhone().test($(this).val())) ){
   $("#message4").text("Please enter corect phone (+374) ||(0)")
  $(".form__control #message4, #eror4").css({visibility:"visible", color:"red"})
  $(this).css("border","4px solid red")
  $("#ok4").css("visibility","hidden")
 

 }else{
 $(this).css("border", "4px solid green")
   $("#message4").text("OK")
    $("#message4").css("color","green")
   $(".form__control  #eror4").css({visibility:"hidden"})
   $("#ok4").css("visibility","visible")
   
 }
 
})

///submit  --  action(form)

$(".btn").click((event)=>{
 event.preventDefault()
  if(regName().test($("#your__name").val()) && regEmail().test($("#your__email").val())&& regPassword().test($("#your__password").val()) && regPhone().test($("#your__phone").val())){
  
    $(".congratulations").slideDown(2000)
   $(".user__name").text( "name"+":"+$("#your__name").val())
   $(".user__email").text( "email"+":"+$("#your__email").val())
   $(".user__password").text( "password"+":"+$("#your__password").val())
   $(".user__phone").text( "phone"+":"+$("#your__phone").val())

     $(".finished").click((event)=>{

      $(".save").click((event)=>{
        if(regName().test($("#your__name").val()) && regEmail().test($("#your__email").val())&& regPassword().test($("#your__password").val()) && regPhone().test($("#your__phone").val())){
          user.name=$("#your__name").val()
          user.email=$("#your__email").val()
          user.phone=$("#your__phone").val()
          user.password=$("#your__password").val()

        $(".form").attr("action","action/index.html")
        }else{
         alert("something went wrong")
        }
      })
      $(".congratulations").slideUp(2000)
       
    $(".btn").remove()
    $(".save").css("visibility","visible")
 
     }) 
    
  } else {
 
    $(".form__eror").slideDown(1000)
    $(".fine").click(()=>{
      $(".form__eror").slideUp(1000)
    })
    

  }
})



////added email

$("#plus").click((event)=>{

  event.stopPropagation()
$("#email").after(("<div class='add'><input type='email' class='add__email'placeholder='YOUR NEW EMAIL' />  <i id='minus__email' class='fas fa-minus-square'></i>   <i id='okay' class='fas fa-check-circle'></i>  <i id='erors' class='fas fa-exclamation-circle'></i> <small class='smal'></small></div>"))
$("#minus__email").on("click",function(){
$(this).parent().remove()


})

$(".add__email").change(function(event){
  event.stopPropagation()
  if($(".add__email").val()==="" || $(".add__email").length===0 || !(regEmail().test($(".add__email").val()))){

    $(this,"#okay").css({"border":"4px solid red"})

  }else{

    $(this).css({"border":"4px solid green"})
    
  }
})

})

