app.controller('app.controller', function($scope) {
    $scope.data = {
        lname: '',
        fname: '',
        email: '',
        phone_mobile: ''
    };
    var masterData = angular.copy($scope.data);
    var key;
    $scope.isUpdating = false;
    $scope.list = [];

    $scope.btnClear = function () {
        $scope.data = angular.copy(masterData);
        $scope.mainForm.$setPristine();
        console.log('Form has been cleared.');
    };

    $scope.btnNew = function () {
        console.log('Started creating new row.');
        $scope.list.push({
            'lname': $scope.data.lname,
            'fname': $scope.data.fname,
            'email': $scope.data.email,
            'phone_mobile': $scope.data.phone_mobile
        });
        $scope.btnClear();
        console.log('Ended creating new row.');
    };

    $scope.UpdateRow = function (row, index) {
        key = index;
        $scope.data.lname = row.lname;
        $scope.data.fname = row.fname;
        $scope.data.email = row.email;
        $scope.data.phone_mobile = row.phone_mobile;
        $scope.isUpdating = true;
        console.log('Updating selected row.');
    };

    $scope.btnUpdate = function() {
        console.log('Started updating row.');
        $scope.list[key].lname = $scope.data.lname;
        $scope.list[key].fname = $scope.data.fname;
        $scope.list[key].email = $scope.data.email;
        $scope.list[key].phone_mobile = $scope.data.phone_mobile;
        $scope.btnClear();
        $scope.isUpdating = false;
        console.log('Ended updating row.');
    };

    $scope.btnCancel = function() {
        $scope.btnClear();
        $scope.isUpdating = false;
        console.log('Cancelled updating selected row.');
    };

    $scope.Delete = function (id) {
        if (confirm("Are you sure you want to delete this row?")) {
            $scope.list.splice(id, 1);
            console.log('Row has been deleted.');
        }
    };
});