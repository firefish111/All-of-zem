using System;

namespace Veed {
  class Code {
    public static double RandDouble(sbyte num) {
      short oper = (byte) (num + 129);
      double seed = (double) (((long) oper + (long) ((short) (oper/2)*(short) num ^ (int) oper)))*(double) (3.14159265358*2.718281828)*oper; // The numbers are pi and e
      seed /= new Random().Next((int) oper*3);
      return seed;
    }
    public static void Main() {
      Console.WriteLine("Welcome to VirtualSeed (a.k.a. veed), the true random number generator.\nInsert a seed here (-120 to 120):");
      Console.Write("> ");
      double num;
      try {
        num = RandDouble(Convert.ToSByte(Console.ReadLine()));
      } catch (Exception ex) {
        num = RandDouble(0);
      }
      Console.WriteLine($"Your First VirtualSeed Number is: {Math.Round(num, 5)}! What a winner!\nI have another number for you though.");
      DateTime cTime = DateTime.Now; // currentTime
      Console.WriteLine($"Using special trickery, your second number is: {Math.Round(Math.Abs((cTime.Second / 0.6)*(cTime.Minute+cTime.Hour)))}! \nGoodbye!");
    }
  }
}