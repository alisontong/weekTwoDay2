$function(){
//form
var $addToListForm = $('#addToListForm')
//element to hold the list of to dos
var $toDoList = $('#toDoList')
//toDo template
var toDoTemplate = _.template($('#toDoTemplate').html())
//start with seed data
var toDos = [{name:"clean the room"}, {name:"wash dishes"}, {name:"clean the bathroom"}]
//append existing toDo (from seed data) 
_each(toDo,function(toDo,index){
    var $toDo = $(toDoTemplate(toDo));
    console.log($toDo);
    //$toDo.attr('data-index',index);
    $toDoList.append($toDo)
})

//submit form to create a new toDo
$addToListForm.on('submit', function(event){
    event.preventDefault();
    //create new Object
    var toDoName = $('#toDo-name').val();
    var toDoData ={name: toDoName};

    // store our new toDo in the `pets` array
    toDos.push(toDoData);
    console.log(toDoS);
    var index = toDos.indexOf(toDoData);

    // append new toDo to `$petsList`
    var $toDo = $(toDosTemplate(toDoData));
    $toDo.attr('data-index', index);
    $toDoList.append($toDo);

    // reset the form and add autofocus back to first input
    $addToListForm[0].reset();
    $('#toDo-name').focus();
  });

  // remove toDos from model and view
  $toDosList.on("click", ".delete", function () {
    var $toDo = $(this).closest(".toDo");
    var index = $toDo.attr('data-index');

    // remove toDo from the `pets` array (model)
    toDos.splice(index, 1);
    console.log(toDos);

    // remove toDo from the DOM (view)
    $toDo.remove();

    // reset indexes in DOM to match `pets` array
    // $.each loops through DOM elements
    $('.toDo').each(function(index) {
      $(this).attr('data-index', index);
    });
  });

});
})



    
    