function resolveDiscriminant(a, b, c) {
    let
        d, x1, x2;
    d = b * 2 - 4 * a * c;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(`Result is ${x1} and ${x2}`);
    } else if (d == 0) {
        x1 = (-b) / (2 * a);
        console.log('x=' + x1);
    } else if (d < 0) {
        console.log('Решения нет так как дисриминант меньше 0');
    }

}
resolveDiscriminant(1, -70, 600);