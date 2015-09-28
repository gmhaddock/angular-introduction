// Let's create our application called ng2du
var app = angular.module("ng2du", []);
//Let's add a controller for our application that manages the HomePage called HomeController
app.controller("HomeController", function($scope){

});
  //We currently have nothing going on, but we you never know

//Let's add a controller for our application that manages the Todos called the TodoController
app.controller("TodoController", function($scope){
  $scope.todos = [];
  $scope.title = "";
  $scope.description = "";
  $scope.id =


  $scope.addTodo = function(){
    $scope.todos.push({title: $scope.title, description: $scope.description});
  };

  $scope.removeTodo = function(index){
    $scope.todos.splice(index,1);
  };
});
  //Let's add create a placeholder to our todos --> array
  //Let's create references for the form to build a todo
