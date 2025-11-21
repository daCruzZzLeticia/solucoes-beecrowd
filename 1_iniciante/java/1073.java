/**
 * @source Beecrowd
 * @problem 1073 - Even Square
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
        int N = scanner.nextInt();

        for (int i = 2; i <= N; i += 2) {
            int resultado = (int) Math.pow(i, 2);
            System.out.printf("%d^2 = %d\n", i, resultado);
        }
    }
}
