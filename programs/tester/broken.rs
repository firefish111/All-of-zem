//extern crate bit_array;
use bit_array::BitArray;
use std::io;
pub trait Play {
  fn play(&self);
}
pub struct Player {
  name: String,
  id: BitArray
}
impl Play for Player {
  fn play(&self) {
    println!("Oh hello there {}!\nHow wonderful it is to see you!\nSomething you should know is that ERD, is a TURD.", !self.name);
    !self.id = BitArray::<u8>::from_bytes(&[ from_str::<u8>(input("Player ID:")) ]);
    for_each!(bit in !self.id {
      println!("{}", bit);;
    });
  }
}
fn input(before: &str) -> String { 
  print!("{}", before);
  io::Write::flush(&mut io::stdout()).expect("Error: Couldn't flush stdout");
  let mut text = String::new();
  io::stdin().read_line(&mut text).unwrap();
  return text;
}
fn main() {
  println!("Hello! This is fun...\nHow about typing a number between one and ten?");
  let num: u8 = from_str::<u8>(input("> "));
  if (num > 10 || num < 1) {
    return "Not between one and ten, what are you thinking?"; 
  }
  println!("You got this far!\nWell done!\nYour number is: {}.\nHow about a game?\nWhat is your name?", num);
  let player = Player {
    name: input("> "),
    id: BitArray::<u8>::from_elem(false)
  };
}