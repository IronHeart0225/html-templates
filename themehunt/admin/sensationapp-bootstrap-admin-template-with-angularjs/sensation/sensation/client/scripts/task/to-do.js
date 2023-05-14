angular.module('TodoApp', [])

.controller('TodoCtrl', [
  '$scope', function($scope) {
    $scope.todos = [
      {
        text: 'To-Do List ',
        done: true
      }, {
        text: 'To-Do List 2',
        done: true
      }, {
        text: 'To-Do List 3',
        done: true
      }, {
        text: 'To-Do List 4',
        done: true
      }, {
        text: 'To-Do List 5',
        done: false
      }, {
        text: 'To-Do List 6',
        done: false
      }, {
        text: 'To-Do List 7',
        done: false
      }
    ];
    $scope.addTodo = function() {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });
      $scope.todoText = '';
    };
    $scope.remaining = function() {
      var count;
      count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    $scope.archive = function() {
      var oldTodos;
      oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          $scope.todos.push(todo);
        }
      });
    };
  }
]);