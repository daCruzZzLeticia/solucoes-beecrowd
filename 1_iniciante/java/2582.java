/**
 * @source Beecrowd
 * @problem 2582 - System of a Download
 * @subject Unknown
 * 
 * @author Letícia Cruz
 * @date 2025-07-08
 */

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {
        String[] musicas = {"PROXYCITY", "P.Y.N.G.", "DNSUEY!", "SERVERS", "HOST!", "CRIPTONIZE",
                "OFFLINE DAY", "SALT", "ANSWER!", "RAR?", "WIFI ANTENNAS"};

        Scanner scanner = new Scanner(System.in);
        int casosTeste = scanner.nextInt();

        for (int i = 0; i < casosTeste; i++) {
            int botaoX = scanner.nextInt();
            int botaoY = scanner.nextInt();

            int indiceMusica = botaoX + botaoY;

            System.out.println(musicas[indiceMusica]);
        }

        scanner.close();
    }
}
