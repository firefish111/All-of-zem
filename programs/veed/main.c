#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>

double randDouble(signed char num) {
  unsigned char oper = num + 129;
  double seed = (double) (((unsigned long long) oper + (unsigned long long) ((short) (oper/2)*(short) num ^ (int) oper)))*(double) (3.14159265358*2.718281828)*oper; // The numbers are pi and e
  seed /= rand() % oper*3;
  return seed;
}
int main(void) {
  printf("Welcome to VirtualSeed (a.k.a. veed), the true random number generator.\nInsert a seed here (-120 to 120):\n> ");
  char *out[4];
  scanf("%4s", out);
  double num = randDouble(strtoll(out, NULL, 10));
  printf("Your First VirtualSeed Number is: %.6f! What a winner!\nI have another number for you though.", num);
  time_t rawtime;
  struct tm *cTime;
  time( &rawtime );
  cTime = gmtime( &rawtime );
  printf("Using special trickery, your second number is: %hi! \nGoodbye!", (signed short) round(fabs((cTime -> tm_sec / 0.6)*(cTime -> tm_min + cTime -> tm_hour))));
  return 0;
}