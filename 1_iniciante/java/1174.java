/**
 * @source Beecrowd
 * @problem 1174 - Array Selection I
 * @subject Array
 * 
 * @author Letícia Cruz
 * @date 2025-08-01
 **/

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 100; i++) {
            double xAtual = scanner.nextDouble();
            if (xAtual <= 10) {
                System.out.printf("A[%d] = %.1f\n", i, xAtual);
            }
        }

        scanner.close();
    }
}
