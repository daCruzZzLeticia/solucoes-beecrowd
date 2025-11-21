/**
 * @source Beecrowd
 * @problem 1002 - Area of a Circle
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-07-17
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {

        final double PI = 3.14159; // constante pi

        Scanner scanner = new Scanner(System.in);
        double raio = scanner.nextDouble(); // lê raio

        double area = PI * Math.pow(raio, 2); // cálculo da área

        System.out.printf("A=%.4f%n", area); // imprime resultado com 4 casas decimais

        scanner.close();
    }
}
