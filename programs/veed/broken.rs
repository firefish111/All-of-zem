use std::io;
use rand::Rng; // gawd
fn randDouble(i8: num) -> f64 {
  let oper: u8 = num + i8::MAX + 2;
  let seed: f64 = ((oper + ((oper/2)*num ^ oper)))*(f64::consts::PI*f64::consts::E)*oper;
  seed /= rand::thread_rng().gen_range(0, oper*3);
}
fn input(before: &str) -> String { //Python style input();
  print!("{}", before);
  io::Write::flush(&mut io::stdout()).expect("Error: Couldn't flush stdout");
  let mut text = String::new();
  io::stdin().read_line(&mut text).unwrap();
  return text;
}
fn main() {
  println!("Welcome to VirtualSeed (a.k.a. veed), the true random number generator.\nInsert a seed here (-120 to 120):");
  let num: f64 = randDouble(input("> ").parse().unwrap_or(0));
}