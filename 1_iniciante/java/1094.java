/**
 * @source Beecrowd
 * @problem 1094 - Experiments
 * @subject Repetition
 * 
 * @author Letícia Cruz
 * @date 2025-07-07
 **/

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int nCasosTeste = scanner.nextInt();
        int contCoelhos = 0;
        int contRatos = 0;
        int contSapos = 0;

        for (int i = 0; i < nCasosTeste; i++) {

            int quantidade = scanner.nextInt();
            String animal = scanner.nextLine().trim();

            if (animal.equals("C")) {
                contCoelhos += quantidade;
            } else if (animal.equals("R")) {
                contRatos += quantidade;
            } else {
                contSapos += quantidade;
            }
        }

        int totalCobaias = contCoelhos + contRatos + contSapos;
        double percentualCoelhos = (double) contCoelhos / totalCobaias * 100;
        double percentualRatos = (double) contRatos / totalCobaias * 100;
        double percentualSapos = (double) contSapos / totalCobaias * 100;

        System.out.println("Total: " + totalCobaias + " cobaias");
        System.out.println("Total de coelhos: " + contCoelhos);
        System.out.println("Total de ratos: " + contRatos);
        System.out.println("Total de sapos: " + contSapos);
        System.out.printf("Percentual de coelhos: %.2f %%\n", percentualCoelhos);
        System.out.printf("Percentual de ratos: %.2f %%\n", percentualRatos);
        System.out.printf("Percentual de sapos: %.2f %%\n", percentualSapos);

        scanner.close();
    }
}
