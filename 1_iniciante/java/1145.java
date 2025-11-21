/**
 * @source Beecrowd
 * @problem 1145 - Logical Sequence 2
 * @subject Repetition
 * 
 * @author Letícia Cruz
 * @date 2025-08-18
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();

        int i, j;
        String linha = "";
        for (i = 1; i <= y; i += x) {
            for (j = 0; j < x; j++) {
                linha += (i + j) + " ";
            }
            System.out.println(linha.trim());
            linha = "";
        }

        sc.close();
    }
}
