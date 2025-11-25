/**
 * @source Beecrowd
 * @problem 1009 - Salary with Bonus
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2025-08-25
 */

#include <iostream>
#include <iomanip>

using namespace std;

int main()
{

    string nome;
    double salarioFixo, vendasEfetuadas;

    cin >> nome >> salarioFixo >> vendasEfetuadas;

    double salarioComBonus = salarioFixo + vendasEfetuadas * 0.15;
    cout << "TOTAL = R$ " << setprecision(2) << fixed << salarioComBonus << endl;

    return 0;
}