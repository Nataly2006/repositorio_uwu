from turtle import *
import colorsys
import random

speed(0)
bgcolor("black")

for i in range(16):
    for j in range(18):
        color(random.random(), random.random(), random.random())
        rt(90)
        circle(150 - j * 6, 90)
        lt(90)
        circle(150 - j * 6, 90)
        rt(180)
    circle(40, 24)

done()