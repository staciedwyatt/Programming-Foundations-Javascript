let numVar = 4;
switch (numVar) {
  case 1:
  case 4:
    caseSet = "case 1" + " " + "case 4";
    break; 
  case 2:
  case 5:
    caseSet = "case 2" + " " + "case 5";
    break; 
  case 3:
  case 6:
    caseSet = "case 3" + " " + "case 6";
    break; 
  default:
    caseSet = "I do not reference a specific set";
}
alert(caseSet)


