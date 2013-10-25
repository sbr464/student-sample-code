window.todo = todo = angular.module('todo',[])
# config and routes
todo.config ($routeProvider) ->
  $routeProvider.when('/',{
    controller: 'TodoCtrl',
    templateUrl: '/templates/todo.html'
  })
  .otherwise({redirectTo:'/'})

# Controller
window.TodoCtrl = ($scope) ->
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}
  ];
 
  $scope.addTodo = () ->
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
 
  $scope.remaining = () ->
    count = 0;
    angular.forEach $scope.todos, (todo) ->
      count += todo.done ? 0 : 1;

    return count;

 
  $scope.archive = () ->
    oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach oldTodos, (todo) ->
      console.log todo
      if not todo.done
        $scope.todos.push(todo)


