/**
 * Source: Beecrowd
 * 
 * @problem: 1035 - Selection Test 1
 * @subject Selection
 * 
 * @author Letícia Cruz
 * @date 2025-07-06
 */

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {

        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();
        int d = scanner.nextInt();

        if (b > c && d > a && (c + d) > (a + b) && c >= 0 && d >= 0 && a % 2 == 0) {
            System.out.println("Valores aceitos");
        } else {
            System.out.println("Valores nao aceitos");
        }

        scanner.close();
    }
}
