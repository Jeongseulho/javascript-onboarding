// 기능 목록
// 1. 닉네임만 추출하여 배열로 작성
// 2. 닉네임 배열 각원소를 2글자씩 분할 2차원 배열로
// ex) ["제이엠이","제이슨","이제엠"]=> [["제이","이엠","엠이"],["제이","이슨"],["이제","제엠"]]
// 3. 내부 배열을 기준점(std)으로 하여 (["제이","이엠","엠이"])안의 원소와
// 겹치는 다른 내부배열의 원소(["제이","이슨"]) 찾아서 중복키워드들 어레이 반환
// 4. 중복키워드어레이를 기준으로 해당 키워드를 포함하는 원소들 인덱스 반환

function problem6(forms) {
  var answer;
  const nickNameArr = forms.map((user) => user[1]);

  return answer;
}

module.exports = problem6;
