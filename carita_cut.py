import turtle

# Configuración inicial
turtle.speed(0)  # Configura la velocidad más rápida
turtle.bgcolor("#f0f0f0")  # Establece el color de fondo

# Función para dibujar la cabeza de Ranma
def draw_head():
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.begin_fill()
    turtle.color("#FFDAB9")  # Color de la piel
    turtle.circle(100)
    turtle.end_fill()

# Función para dibujar los ojos de Ranma
def draw_eyes():
    turtle.penup()
    turtle.goto(-40, 30)
    turtle.pendown()
    turtle.begin_fill()
    turtle.color("white")  # Color blanco para los ojos
    turtle.circle(25)
    turtle.end_fill()

    turtle.penup()
    turtle.goto(40, 30)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(25)
    turtle.end_fill()

    turtle.penup()
    turtle.goto(-40, 30)
    turtle.pendown()
    turtle.begin_fill()
    turtle.color("black")  # Color negro para las pupilas
    turtle.circle(10)
    turtle.end_fill()

    turtle.penup()
    turtle.goto(40, 30)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(10)
    turtle.end_fill()

# Función para dibujar la boca de Ranma
def draw_mouth():
    turtle.penup()
    turtle.goto(-30, -20)
    turtle.pendown()
    turtle.right(60)
    turtle.circle(35, 120)

# Función principal para dibujar a Ranma
def draw_ranma():
    draw_head()
    draw_eyes()
    draw_mouth()

# Llamada a la función principal
draw_ranma()

# Ocultar la pluma y mantener la ventana abierta
turtle.hideturtle()
turtle.done()
