import json
import requests
import os
import jsonpath as query
print(requests.get('https://All-of-zem.johnstev111.repl.co/').text)
view = json.loads(requests.get('https://All-of-zem.johnstev111.repl.co/view').text)
keys = query.query(view, "$..program")
answer = input(f"Would you like to view all as json, or view a program? (one of {', '.join(keys)} or view to view json) ")
if (answer == "view"):
  os.system('clear')
  print(json.dumps(view, indent=2))
else:
  supporting = query.query(view, f"$..[?(@.program == \"{answer}\")].supports")[0]
  input = input(f"Which program? (one of {supporting}) ")
  print(input, "/".join(supporting))
