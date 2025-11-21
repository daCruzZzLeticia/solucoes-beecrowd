/**
 * @source Beecrowd
 * @problem 1010 - Simple Calculate
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-04-18
 */

import java.io.IOException; // uso padrão do beecrowd para java
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {

        // lê entradas
        Scanner sc = new Scanner(System.in);
        String[] linha1 = (sc.nextLine()).split(" "); // linha com entradas para peça 1
        String[] linha2 = (sc.nextLine()).split(" "); // linha com entradas para peça 1

        // declara variáveis e atribui com a entrada respectiva
        int codPeca1 = Integer.parseInt(linha1[0]); // código peça 1
        int qtdPeca1 = Integer.parseInt(linha1[1]); // quantiadade de peças 1
        double valorPeca1Unica = Double.parseDouble(linha1[2]); // valor por cada peça 1
        int codPeca2 = Integer.parseInt(linha2[0]); // código peça 2
        int qtdPeca2 = Integer.parseInt(linha2[1]); // quantidade de peças 2
        double valorPeca2Unica = Double.parseDouble(linha2[2]); // valor por cada peça 2

        // calcula valor total
        Double valorTotal = (qtdPeca1 * valorPeca1Unica) + (qtdPeca2 * valorPeca2Unica);

        // imprime o valor total com duas casas decimais
        System.out.printf("VALOR A PAGAR: R$ %.2f\n", valorTotal);

        sc.close();
    }
}
