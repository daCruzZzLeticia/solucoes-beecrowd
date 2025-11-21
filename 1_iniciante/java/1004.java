/**
 * @source Beecrowd
 * @problem 1004 - Simple Product
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-05-02
 */

import java.io.IOException; // uso padrão do beecrowd para java
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {

        // lê entrada, declara váriáveis e atribui valores
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();

        int PROD = A * B; // calcula produto

        System.out.println("PROD = " + PROD); // imprime produto

        sc.close();
    }
}
