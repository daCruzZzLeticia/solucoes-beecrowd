/**
 * @source Beecrowd
 * @problem 1175 - Array change I
 * @subject Array
 * 
 * @author Letícia Cruz
 * @date 2025-08-18
 **/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {

    public static void main(String[] args) throws IOException {
        int[] lista = new int[20];

        InputStreamReader InputReader = new InputStreamReader(System.in);
        BufferedReader input = new BufferedReader(InputReader);

        int i, j;
        for (i = 0; i < lista.length; i++) {
            int elemento = Integer.parseInt(input.readLine());
            lista[i] = elemento;
        }

        for (j = 0; j < lista.length; j++) {
            System.out.printf("N[%d] = %d\n", j, lista[i - 1]);
            i--;
        }
    }
}
