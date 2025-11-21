/**
 * @source Beecrowd
 * @problem 1144 - Logical Sequence
 * @subject Repetition
 * 
 * @author Letícia Cruz
 * @date 2025-08-09
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        for (int i = 1; i <= N; i++) {
            System.out.println(i + " " + i * i + " " + i * i * i);
            System.out.println(i + " " + (i * i + 1) + " " + (i * i * i + 1));
        }

        scanner.close();
    }
}
