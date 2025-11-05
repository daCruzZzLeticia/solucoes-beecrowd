/**
 * @source Beecrowd
 * @problem 1002 - Area of a Circle
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2025-08-25
 */

#include <iostream>
#include <iomanip>
#include <math.h>

using namespace std;

int main()
{

    const double PI = 3.14159;
    double raio, area;

    cin >> raio;

    area = PI * pow(raio, 2.0);
    cout << "A=" << setprecision(4) << fixed << area << endl;

    return 0;
}