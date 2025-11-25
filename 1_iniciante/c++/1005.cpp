/**
 * @source Beecrowd
 * @problem 1005 - Average 1
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

    double a, b, media;
    cin >> a >> b;

    media = (a * 3.5 + b * 7.5) / 11;
    cout << "MEDIA = " << setprecision(5) << fixed << media << endl;

    return 0;
}