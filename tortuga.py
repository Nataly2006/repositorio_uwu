from turtle import *
import math
colormode(255)
bgcolor("black")

speed(20)
r = 0
g = 0
b = 0

color("blue")
for j in range(0, 10):
    if j == 3:
        color("green")
    if j == 6:
        color("red")
    if j == 8:
        color("blue")
    if j % 2 == 0:
        a, b, c = 0, 100, 1
    else:
        a, b, c = 100, 0, -1

    for i in range(a,b,c):
        left(45)
        fd(i//2)

done()