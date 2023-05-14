var SortableTableCtrl;

SortableTableCtrl = function() {
  var scope;
  scope = this;
  scope.head = {
    a: "Name",
    b: "Surname",
    c: "City"
  };
  scope.body = [
    {
      a: "Hans",
      b: "Mueller",
      c: "Leipzig"
    }, {
      a: "Dieter",
      b: "Zumpe",
      c: "Berlin"
    }, {
      a: "Bernd",
      b: "Danau",
      c: "Muenchen"
    }
  ];
  scope.sort = {
    column: "b",
    descending: false
  };
  scope.selectedCls = function(column) {
    return column === scope.sort.column && "sort-" + scope.sort.descending;
  };
  scope.changeSorting = function(column) {
    var sort;
    sort = scope.sort;
    if (sort.column === column) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column;
      sort.descending = false;
    }
  };
};