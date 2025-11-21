/**
 * @source Beecrowd
 * @problem 1101 - Sequence of Numbers and Sum
 * @subject Repetition
 * 
 * @author Letícia Cruz
 * @date 2025-08-09
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        int M = scanner.nextInt();
        int N = scanner.nextInt();

        int maiorValor, menorValor;
        while (M > 0 && N > 0) {
            int sum = 0;

            if (M > N) {
                maiorValor = M;
                menorValor = N;
            } else {
                maiorValor = N;
                menorValor = M;
            }

            for (int i = menorValor; i <= maiorValor; i++) {
                System.out.print(i + " ");
                sum += i;
            }
            System.out.println("Sum=" + sum);

            M = scanner.nextInt();
            N = scanner.nextInt();
        }

        scanner.close();
    }
}
