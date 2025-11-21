/**
 * @source Beecrowd
 * @problem 1016 - Distance
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-07-06
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {

        // letirura de entradas
        Scanner scanner = new Scanner(System.in);
        int kms = scanner.nextInt();

        /*
         * tempo que carro y leva para passar n kms do carro x: 1 km a cada 2 minutos
         * 
         * obs: a grandeza já fica em minutos, logo, não precisa de conversão
         * 
         */

        int tempoEmMinutos = kms * 2;
        System.out.println(tempoEmMinutos + " minutos"); // formado de saída específicada

        scanner.close();
    }
}
