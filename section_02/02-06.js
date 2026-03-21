/**
 * 06. 격자판 최대합
 *
 * ▣ 문제
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.
 *
 * ▣ 입력설명
 * 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
 * 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
 *
 * ▣ 출력설명
 * 최대합을 출력합니다.
 *
 * ▣ 입력예제 1
 * 5
 * 10 13 10 12 15
 * 12 39 30 23 11
 * 11 25 50 53 15
 * 19 27 29 37 27
 * 19 13 30 13 19
 *
 * ▣ 출력예제 1
 * 155
 */

function solution(arr) {
	let answer = Number.MIN_SAFE_INTEGER;
	let leftSum = 0;
	let rightSum = 0;

	for (let i = 0; i < arr.length; i++) {
		let rowSum = 0;
		let colSum = 0;

		for (let j = 0; j < arr.length; j++) {
			rowSum += arr[i][j];
			colSum += arr[j][i];
		}

		answer = Math.max(answer, rowSum, colSum);
	}

	for (let i = 0; i < arr.length; i++) {
		leftSum += arr[i][i];
		rightSum += arr[i][arr.length - i - 1];
	}

	answer = Math.max(answer, leftSum, rightSum);

	return answer;
}

console.log(
	solution([
		[10, 13, 10, 12, 15],
		[12, 39, 30, 23, 11],
		[11, 25, 50, 53, 15],
		[19, 27, 29, 37, 27],
		[19, 13, 30, 13, 19]
	])
); // 155
