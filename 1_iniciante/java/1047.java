/**
 * @source Beecrowd
 * @problem 1047 - Game Time with Minutes
 * @subject Selection
 * 
 * @author Letícia Cruz
 * @date 2025-07-12
 */

import java.io.IOException;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        int horaInicial = scanner.nextInt();
        int minutoInicial = scanner.nextInt();

        int horaFinal = scanner.nextInt();
        int minutoFinal = scanner.nextInt();

        int duracaoHoras = horaFinal - horaInicial;
        int duracaoMinutos = minutoFinal - minutoInicial;

        if (duracaoMinutos < 0) {
            duracaoMinutos += 60;
            duracaoHoras -= 1;
        }
        if (duracaoHoras < 0 || duracaoHoras == 0 && duracaoMinutos == 0) {
            duracaoHoras += 24;
        }

        System.out.printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", duracaoHoras, duracaoMinutos);

        scanner.close();
    }
}
