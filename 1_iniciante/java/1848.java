/**
 * @source Beecrowd
 * @problem 1848 - Counting Crow
 * @subject Numeral Systems
 * 
 * @author Letícia Cruz
 * @date 2025-04-21
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int contadorGritos = 0;
        String binarioStr = "";

        int soma = 0;
        while (contadorGritos < 3) {

            String linha = sc.nextLine();
            String primeiroChar = String.valueOf(linha.charAt(0));

            // verifica se o primeiro char da linha é c (de: cow cow)
            if (primeiroChar.equals("c")) {
                contadorGritos++;
                System.out.println(soma);

                // reseta valores:
                binarioStr = "";
                soma = 0;
            } else {
                for (int i = 0; i < 3; i++) {
                    String c = String.valueOf(linha.charAt(i));
                    if (c.equals("*")) {
                        binarioStr += "1";
                    } else {
                        binarioStr += "0";
                    }
                }
                // passa a string de 0 e 1 para decimal na base numércia 2 (binária):
                int decimal = Integer.parseInt(binarioStr, 2);

                soma += decimal;
                binarioStr = ""; // reseta para próxima string
            }
        }

        sc.close();
    }
}
