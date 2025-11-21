/**
 * @source Beecrowd
 * @problem 1049 - Animal
 * @subject Selection
 * 
 * @author Letícia Cruz
 * @date 2025-05-11
 */

import java.io.IOException;
import java.util.Scanner;

class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        String categoria1 = sc.nextLine();
        String categoria2 = sc.nextLine();
        String categoria3 = sc.nextLine();

        String animal;

        if (categoria1.equals("vertebrado")) {
            if (categoria2.equals("ave")) {
                if (categoria3.equals("carnivoro")) {
                    animal = "aguia";
                } else {
                    animal = "pomba";
                }
            } else {
                if (categoria3.equals("onivoro")) {
                    animal = "homem";
                } else {
                    animal = "vaca";
                }
            }
        } else {
            if (categoria2.equals("inseto")) {
                if (categoria3.equals("hematofago")) {
                    animal = "pulga";
                } else {
                    animal = "lagarta";
                }
            } else {
                if (categoria3.equals("hematofago")) {
                    animal = "sanguessuga";
                } else {
                    animal = "minhoca";
                }
            }
        }

        System.out.println(animal);
        sc.close();
    }
}
