/**
 * @source Beecrowd
 * @problem 1133 - Rest of a Division
 * @subject Repetition
 * 
 * @author Letícia Cruz
 * @date 2025-08-24
 **/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {

    public static void main(String[] args) throws IOException {

        InputStreamReader inputReader = new InputStreamReader(System.in);
        BufferedReader input = new BufferedReader(inputReader);

        int x = Integer.parseInt(input.readLine());
        int y = Integer.parseInt(input.readLine());

        int maior, menor;

        if (x > y) {
            maior = x;
            menor = y;
        } else {
            maior = y;
            menor = x;
        }

        for (int i = menor + 1; i < maior; i++) {
            if (i % 5 == 2 || i % 5 == 3) {
                System.out.println(i);
            }
        }

    }
}
