const ComputerModel = require("../src/model/ComputerModel");

describe("컴퓨터 숫자 관련 테스트", () => {
  const computerModel = new ComputerModel();

  test("숫자 생성 테스트", () => {
    const generatedNumber = computerModel.getGeneratedComputerNumber();
    expect(new Set(generatedNumber).size).toEqual(3);
    generatedNumber.forEach((singleElement) => {
      expect(typeof singleElement).toEqual("number");
      expect(0 < singleElement && singleElement < 10).toEqual(true);
    });
  });
});
