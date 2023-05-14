var CartForm;

CartForm = function($scope) {
  $scope.invoice = {
    items: [
      {
        qty: 10,
        description: "item",
        cost: 9.95
      }
    ]
  };
  $scope.addItem = function() {
    return $scope.invoice.items.push({
      qty: 1,
      description: "",
      cost: 0
    });
  };
  $scope.removeItem = function(index) {
    return $scope.invoice.items.splice(index, 1);
  };
  return $scope.total = function() {
    var total;
    total = 0;
    angular.forEach($scope.invoice.items, function(item) {
      return total += item.qty * item.cost;
    });
    return total;
  };
};