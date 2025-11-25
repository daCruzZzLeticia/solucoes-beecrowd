/**
 * @source Beecrowd
 * @problem 1010 - Simple Calculate
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

    int codigo1, codigo2;
    int unidades1, unidades2;
    double valorUnidade1, valorUnidade2;

    cin >> codigo1 >> unidades1 >> valorUnidade1;
    cin >> codigo2 >> unidades2 >> valorUnidade2;

    double valorTotal = unidades1 * valorUnidade1 + unidades2 * valorUnidade2;
    cout << "VALOR A PAGAR: R$ " << setprecision(2) << fixed << valorTotal << endl;

    return 0;
}