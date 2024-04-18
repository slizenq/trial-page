import random
while True:
    a=input("Выбери сторону:")
    print(a)
    x=random.randint(1,2)
    if x == 1:
        print("Сторона монеты: Решка")
    else:
        print("Сторона монеты: Орелп")