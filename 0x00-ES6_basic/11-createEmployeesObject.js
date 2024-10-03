export default function createEmployeesObject(departmentName, employees) {
  const robj = {};
  robj[departmentName] = employees;
  return robj;
}
