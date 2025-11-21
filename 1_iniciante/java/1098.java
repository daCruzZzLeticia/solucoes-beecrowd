/**
 * @source Beecrowd
 * @problem 1098 - Sequence IJ 4
 * @subject Repetition
 * 
 * @author Letícia Cruz
 * @date 2025-08-18
 **/

import java.io.IOException;
import java.text.DecimalFormat;

class Main {

    public static void main(String[] args) throws IOException {

        double i, j;
        DecimalFormat df = new DecimalFormat("0.#");
        for (i = 0; i <= 2; i += 0.2) {
            for (j = 1; j <= 3; j++) {
                System.out.printf("I=%s J=%s\n", df.format(i), df.format(i + j));
            }
        }

    }
}
