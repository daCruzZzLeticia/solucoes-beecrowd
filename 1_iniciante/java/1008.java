/**
 * @source Beecrowd
 * @problem 1008 - Salary
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
        int numFuncionario = scanner.nextInt();
        int horasTrabalhadas = scanner.nextInt();
        double valorHora = scanner.nextDouble();

        double salario = horasTrabalhadas * valorHora;

        System.out.println("NUMBER = " + numFuncionario);
        System.out.printf("SALARY = U$ %.2f\n", salario);

        scanner.close();
    }
}
