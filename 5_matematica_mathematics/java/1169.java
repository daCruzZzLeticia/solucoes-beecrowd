/**
 * @source Beecrowd
 * @problem 1169 - Grains in a Chess Board
 * @subject Simple Math
 * 
 * @author Letícia Cruz
 * @date 2025-08-24
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;

class Main {

    public static BigInteger potencia(BigInteger base, int expoente) {
        BigInteger resultado = BigInteger.valueOf(1);

        for (int i = 0; i < expoente; i++) {
            resultado = resultado.multiply(base);
        }

        return resultado;
    }

    public static void main(String[] args) throws IOException {


        InputStreamReader InputReader = new InputStreamReader(System.in);
        BufferedReader input = new BufferedReader(InputReader);

        int N = Integer.parseInt(input.readLine());

        int quadradoTabuleiro;
        BigInteger totalGraos;
        for (int i = 0; i < N; i++) {
            totalGraos = BigInteger.valueOf(0);

            quadradoTabuleiro = Integer.parseInt(input.readLine());

            totalGraos = totalGraos.add(potencia(BigInteger.valueOf(2), quadradoTabuleiro));
            BigInteger kg = totalGraos.divide(BigInteger.valueOf(12000));

            System.out.println(kg + " kg");
        }
    }
}
