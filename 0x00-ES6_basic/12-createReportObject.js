export default function createReportObject(employeesList) {
  const robj = {};
  robj.allEmployees = employeesList;
  robj.getNumberOfDepartments = function getNumberOfDepartments() {
    return Object.keys(employeesList).length;
  };

  return robj;
}
