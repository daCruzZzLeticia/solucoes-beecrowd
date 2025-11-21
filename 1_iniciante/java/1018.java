/**
 * @source Beecrowd
 * @problem 1018 - Banknotes
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-07-20
 */

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {
        int[] notas = {1, 2, 5, 10, 20, 50, 100};

        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();

        System.out.println(N);

        int valorContado = 0;
        for (int i = notas.length - 1; i >= 0; i--) {
            int qtdNotas = (N - valorContado) / notas[i];
            System.out.printf("%d nota(s) de R$ %d,00\n", qtdNotas, notas[i]);
            valorContado += qtdNotas * notas[i];
        }

        scanner.close();
    }
}
