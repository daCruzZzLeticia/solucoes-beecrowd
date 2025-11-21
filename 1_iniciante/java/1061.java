/**
 * @source Beecrowd
 * @problem 1061 - Event Time
 * @subject Selection
 * 
 * @author Letícia Cruz
 * @date 2025-04-23
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);

        String[] linha1 = (sc.nextLine()).split(" ");
        String[] linha2 = (sc.nextLine()).split(" : ");
        String[] linha3 = (sc.nextLine()).split(" ");
        String[] linha4 = (sc.nextLine()).split(" : ");

        int diaI = Integer.parseInt(linha1[1]);
        int diaF = Integer.parseInt(linha3[1]);

        int horasI = Integer.parseInt(linha2[0]);
        int minutosI = Integer.parseInt(linha2[1]);
        int segundosI = Integer.parseInt(linha2[2]);

        int horasF = Integer.parseInt(linha4[0]);
        int minutosF = Integer.parseInt(linha4[1]);
        int segundosF = Integer.parseInt(linha4[2]);

        int w = diaF - diaI;

        int x = 0;
        int y = 0;
        int z;
        if (segundosF >= segundosI) {
            z = segundosF - segundosI;
        } else {
            z = segundosF + 60 - segundosI;
            y--;
        }

        if (minutosF >= minutosI && y >= 0) {
            y += minutosF - minutosI;
        } else {
            y += 60 + minutosF - minutosI;
            x--;
        }

        if (horasF >= horasI && x >= 0) {
            x += horasF - horasI;
        } else {
            x += 24 + horasF - horasI;
            w--;
        }

        System.out.println(w + " dia(s)");
        System.out.println(x + " hora(s)");
        System.out.println(y + " minuto(s)");
        System.out.println(z + " segundo(s)");

        sc.close();
    }
}
