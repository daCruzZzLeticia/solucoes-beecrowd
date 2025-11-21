/**
 * @source Beecrowd
 * @problem 1006 - Average 2
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-07-05
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        double a = scanner.nextDouble();
        double b = scanner.nextDouble();
        double c = scanner.nextDouble();

        double media = (a * 2 + b * 3 + c * 5) / 10;

        System.out.printf("MEDIA = %.1f\n", media);

        scanner.close();
    }
}
