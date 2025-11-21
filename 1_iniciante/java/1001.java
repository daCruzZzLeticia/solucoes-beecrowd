/**
 * @source Beecrowd
 * @problem 1001 - Extremely Basic
 * @subject Sequential
 * 
 * @author Letícia Cruz
 * @date 2025-04-26
 */

import java.io.IOException; // uso padrão no beecrowd para java
import java.util.Scanner; // importa o scanner, que é usado para ler entrada

class Main {

    public static void main(String[] args) throws IOException {

        // lê entrada, declara váriáveis e atribui valores
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();

        int X = A + B; // calcula soma
        System.out.println("X = " + X); // imprime soma

        sc.close();
    }
}
