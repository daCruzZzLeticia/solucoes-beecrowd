/**
 * @source Beecrowd
 * @problem 1013 - The Greatest
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-04-18
 */

import java.io.IOException;
import java.util.Scanner;
import static java.lang.Math.abs;

class Main {

    public static void main(String[] args) throws IOException {

        // lê entrada, declara váriáveis e atribui valores
        Scanner sc = new Scanner(System.in);
        String[] linha1 = (sc.nextLine()).split(" ");
        int a = Integer.parseInt(linha1[0]);
        int b = Integer.parseInt(linha1[1]);
        int c = Integer.parseInt(linha1[2]);

        // calcula maior entre A e B
        int maiorAB = (a + b + abs(a - b)) / 2;

        // usa o maior entre A e B da linha anterior e calcula com C:
        int maiorABC = (maiorAB + c + abs(maiorAB - c)) / 2;

        System.out.printf("%d eh o maior\n", maiorABC); // imprime o maior de A, B e C

        sc.close();
    }
}
