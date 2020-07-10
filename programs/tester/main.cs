using System;
using System.Collections;

namespace Tester {
  class Player {
    private string Name { get; set; }
    private BitArray ID { get; set; }
    private void Play() {
      Console.WriteLine($"Oh hello there {this.Name}!\nHow wonderful it is to see you!\nSomething you should know is that ERD, is a TURD.");
      Console.Write("Player ID: ");
      byte[] id = new byte[1] { Convert.ToByte(Console.ReadLine()) };
      this.ID = new BitArray(id);
      for (sbyte i = 7; i >= 0; --i) { // needed instead of a foreach loop because microsoft is little endian and backwards
        Console.WriteLine($"{(this.ID)[i]}");
      }
    }
    public Player(string usrname) {
      this.Name = usrname;
      this.ID = new BitArray(8);
      Play();
    }
  }
  class Game {
    public static void Main() {
      Console.WriteLine("Hello! This is fun...\nHow about typing a number between one and ten?");
      Console.Write("> ");
      byte num = Convert.ToByte(Console.ReadLine());
      if (num > 10 || num < 1) {
        throw new OverflowException("Not between one and ten, what are you thinking?");
      }
      Console.WriteLine($"You got this far!\nWell done!\nYour number is: {num}.\nHow about a game?\nWhat is your name?");
      Console.Write("> ");
      new Player(Console.ReadLine());
    }
  }
}