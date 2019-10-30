function intOrString(param) {
  if (typeof param === "number") {
    return "int";
  } else {
    return "str";
  }
}
