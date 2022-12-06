fileObject = open("data.txt", "r")
data = fileObject.read()
rucks = data.splitlines()
items = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
a=[]
b=[]
c=[]
for ruck in rucks:
    split = int(len(ruck)/2)
    com1 = ruck[:split]
    com2 = ruck[split:]
    for item in com2:
        try:
            if item in com1:
                if item.isupper():
                    a.append(items.index(item.lower())+27)
                else:
                    a.append(items.index(item)+1)
                break
        except:
            error=0

for firstruck in rucks[0::3]:
    for item in firstruck:
        if item in rucks[rucks.index(firstruck)+1]:
            if item in rucks[rucks.index(firstruck)+2]:
                if item.isupper():
                    c.append(items.index(item.lower())+27)
                else:
                    c.append(items.index(item)+1)
                break
        

print("answer one "+ str(sum(a)))
print("answer two "+ str(sum(c)))