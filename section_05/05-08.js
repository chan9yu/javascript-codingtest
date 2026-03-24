/**
 * 08. 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 *
 * ▣ 문제
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 *
 * ▣ 입력설명
 * 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
 * S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
 *
 * ▣ 출력설명
 * S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 *
 * ▣ 입력예제 1
 * bacaAacba
 * abc
 *
 * ▣ 출력예제 1
 * 3
 *
 * 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
 */

function compareMaps(map1, map2) {
	if (map1.size !== map2.size) {
		return false;
	}

	for (let [key, val] of map1) {
		if (!map2.has(key) || map2.get(key) !== val) {
			return false;
		}
	}

	return true;
}

function solution(s, t) {
	const tH = new Map();
	const sH = new Map();

	let answer = 0;
	let left = 0;

	for (let v of t) {
		tH.set(v, tH.has(v) ? tH.get(v) + 1 : 1);
	}

	for (let i = 0; i < t.length - 1; i++) {
		sH.set(s[i], sH.has(s[i]) ? sH.get(s[i]) + 1 : 1);
	}

	for (let right = t.length - 1; right < s.length; right++) {
		sH.set(s[right], sH.has(s[right]) ? sH.get(s[right]) + 1 : 1);

		if (compareMaps(sH, tH)) {
			answer += 1;
		}

		sH.set(s[left], sH.get(s[left]) - 1);

		if (sH.get(s[left]) === 0) {
			sH.delete(s[left]);
		}

		left += 1;
	}

	return answer;
}

console.log(solution("bacaAacba", "abc")); // 3
