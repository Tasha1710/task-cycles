/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; (i = end); i += 1) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let iteration = 0;
    while ((a > 0, 1)) {
        a /= 2;
        iteration += 1;
    }
    return iteration;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let message1 = '';
    let i = 0;
    do {
        (message1.length + 1) % 3 == 0
            ? (message1 += '_')
            : (message1 += message[i]);
        i += 1;
    } while (i < message.length);
    return message1;
}
