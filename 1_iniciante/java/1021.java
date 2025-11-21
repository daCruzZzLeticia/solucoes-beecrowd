/**
 * @source Beecrowd
 * @problem 1021 - Banknotes and Coins
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-04-21
 */

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int[] tiposNotas = {2, 5, 10, 20, 50, 100};
        int[] tiposMoedas = {1, 5, 10, 25, 50, 100};

        double valor = sc.nextDouble();

        System.out.println("NOTAS:");

        int i;
        int inteiroContado = 0;
        int notaI;
        double notas;
        for (i = tiposNotas.length - 1; i >= 0; i--) {
            notaI = tiposNotas[i];
            notas = (double) notaI;
            int qtdNotasI = (int) ((valor - inteiroContado) / notaI);
            System.out.printf("%d nota(s) de R$ %.2f\n", qtdNotasI, notas);

            inteiroContado += qtdNotasI * notaI;
        }

        int moedaI;
        int decimal = (int) ((valor - inteiroContado) * 100);
        int decimalContado = 0;
        double moeda;

        System.out.println("MOEDAS:");
        for (i = tiposMoedas.length - 1; i >= 0; i--) {
            moedaI = tiposMoedas[i];
            int qtdMoedasI = (decimal - decimalContado) / moedaI;
            moeda = (double) moedaI;
            moeda = moeda / 100;
            System.out.printf("%d moeda(s) de R$ %.2f\n", qtdMoedasI, moeda);

            decimalContado += qtdMoedasI * moedaI;
        }

        sc.close();
    }

}
