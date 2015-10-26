$(document).on('click', '.displayable-table button.btn-edit-table', function(event) {

  console.info('EDIT CLICKED');

  event.preventDefault();
    var tableID = event.target.id.slice(2);
    // debugger;
    var route = "/tables/" + tableID + "/edit";
    console.log(tableID);
    // debugger;
    var request = $.get(route);

  request.done(function(response){
    $("#dialog").html(response);
    $("#dialog").dialog();
  });

  request.fail(function(response) {
    console.log(response);
  })

});


// replicate above for new field
// $(document).on('click', '.displayable-table-field button.btn-edit-table-add-field', function(event) {

//   console.info('EDIT CLICKED');

//   event.preventDefault();
//     var tableID = event.target.id.slice(2);
//     // debugger;
//     var route = "/tables/" + tableID + "/edit";
//     console.log(tableID);
//     // debugger;
//     var request = $.get(route);

//   request.done(function(response){
//     $("#dialog").append(response);
//     $("#dialog").dialog();
//   });

//   request.fail(function(response) {
//     console.log(response);
//   })

// });

