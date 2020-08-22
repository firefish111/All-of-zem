#include <iostream>
#include <string>
#include <limits.h>
#include <cmath>
#include <stdlib.h>
using namespace std;

double randDouble(signed char num) {
  unsigned char oper = num + SCHAR_MAX + 2;
  double seed = ((oper + ((oper/2)*num ^ oper)))*(M_PI*M_E)*oper;
  seed /= rand() % oper*3 + 1;
  return seed;
}
int main() {
  cout << "Welcome to VirtualSeed (a.k.a. veed), the true random number generator.\nInsert a seed here (-120 to 120):" << endl << "> ";
  double num;
  try {
    num = randDouble(std::stoi(std::to_string(cin)));
  } catch() {
    num = randDouble(-128);
  }
}