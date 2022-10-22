for (let i = 1; i <= 50; i++) {
  let StringValue = i.toString();
  let result = "";
  for (let j = 0; j < StringValue.length; j++) {
    if (
      StringValue[j] == "3" ||
      StringValue[j] == "6" ||
      StringValue[j] == "9"
    ) {
      result += "짝";
    }
  }
  console.log(result.length > 0 ? result : i);
}
