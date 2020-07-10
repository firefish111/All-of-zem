from bitarray import bitarray # uses an external package because why?
import sys
class Player:
  name = ""
  id = (bitarray(8)).setall(False)
  def play(self): 
    print(f"Oh hello there {self.name}!\nHow wonderful it is to see you!\nSomething you should know is that ERD, is a TURD.")
    id = (bitarray("{0:b}".format(int(input("Player ID: ")))))
    self.id = id
    for bit in ((self.id).to01()):
      print(bool(int(bit)))
  def __init__(self, usrname):
    self.name = usrname
    self.play()
print("Hello! This is fun...\nHow about typing a number between one and ten?")
num = int(input("> "))
if (num > 10 or num < 1):
  sys.exit("Not between one and ten, what are you thinking?")
print(f"You got this far!\nWell done!\nYour number is: {num}.\nHow about a game?\nWhat is your name?")
player = Player(input())