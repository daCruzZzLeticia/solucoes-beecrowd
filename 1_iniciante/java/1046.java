/**
 * @source Beecrowd
 * @problem 1046 - Game Time
 * @subject Selection
 * 
 * @author Letícia Cruz
 * @date 2025-08-09
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws IOException {

        InputStreamReader inputReader = new InputStreamReader(System.in);
        BufferedReader input = new BufferedReader(inputReader);

        String[] line = (input.readLine()).split(" ");
        int horaInicial = Integer.parseInt(line[0]);
        int horaFinal = Integer.parseInt(line[1]);

        int tempoJogo = horaFinal - horaInicial;
        if (tempoJogo <= 0) {
            tempoJogo += 24;
        }

        System.out.printf("O JOGO DUROU %d HORA(S)\n", tempoJogo);
    }
}
