$(function () {
    $('[data-toggle="popover"]').popover({
      trigger: 'focus'
    })
  })
      let category=["car","phone","television","computer"]
      let subCategory=[
        {name:"Toyota",category_id:0},
        {name:"Suzuki",category_id:0},
        {name:"Samung",category_id:1},
        {name:"Huwai",category_id:1},
        {name:"LG",category_id:2},
        {name:"Panesonic",category_id:2},
        {name:"Asus",category_id:3},
        {name:"Hp",category_id:3},
      ]
     category.map(function(el,ind){
       $("#c").append(`<option value="${ind}">${el}</option>`)
     })
      subCategory.map(function(el,ind){
        $("#sc").append(`<option value="${ind}" data-category="${el.category_id}">${el.name}</option>`)
      });
      $("#c").on("change",function(){
       let kk=$(this).val()
       console.log(kk)
       $("#sc option").hide()
       $(`[data-category=${kk}]`).show()
      })
  