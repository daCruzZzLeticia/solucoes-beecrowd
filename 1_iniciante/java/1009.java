/**
 * @source Beecrowd
 * @problem 1009 - Salary with Bonus
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-04-18
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);
        String nome = sc.nextLine();
        double salarioFixo = sc.nextDouble();
        double vendasEfetuadas = sc.nextDouble();

        double totalReceber = salarioFixo + vendasEfetuadas * 0.15;
        System.out.printf("TOTAL = R$ %.2f\n", totalReceber);

        sc.close();
    }
}
