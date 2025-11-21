/**
 * @source Beecrowd
 * @problem 1161 - Factorial Sum
 * @subject Math, factorial
 * 
 * @author Letícia Cruz
 * @date 2025-08-22
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static long fatorial(int numero) {
        if (numero == 0) {
            return 1;
        } else {
            return numero * fatorial(numero - 1);
        }
    }

    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);

        int m, n;

        while (sc.hasNextInt()) {
            m = sc.nextInt();
            n = sc.nextInt();

            long soma = fatorial(m) + fatorial(n);
            System.out.println(soma);
        }

        sc.close();

    }
}
