function missingAngle(angle1, angle2) {
  if (180 - angle1 - angle2 > 90) {
    return "obtuse";
  } else if (180 - angle1 - angle2 === 90) {
    return "right";
  } else {
    return "acute";
  }
}
