/**
 * @source Beecrowd
 * @problem 1037 - Interval
 * @subject Selection
 * 
 * @author Letícia Cruz
 * @date 2025-04-22
 */

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        double valor = sc.nextDouble();

        if (valor >= 0 && valor <= 25) {
            System.out.println("Intervalo [0,25]");
        } else if (valor > 25 && valor <= 50) {
            System.out.println("Intervalo (25,50]");
        } else if (valor > 50 && valor <= 75) {
            System.out.println("Intervalo (50,75]");
        } else if (valor > 75 && valor <= 100) {
            System.out.println("Intervalo (75,100]");
        } else {
            System.out.println("Fora de intervalo");
        }
        sc.close();
    }
}
