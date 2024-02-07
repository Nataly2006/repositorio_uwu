import tkinter as tk

class PenguinDrawing:
    def __init__(self, canvas):
        self.canvas = canvas

    def draw_penguin(self, x, y, size):
        # Cuerpo
        body = self.canvas.create_oval(x - size, y - size, x + size, y + size, fill="black")

        # Cabeza
        head = self.canvas.create_oval(x - size * 0.7, y - size * 1.3, x + size * 0.7, y - size * 0.3, fill="black")

        # Ojos
        eye1 = self.canvas.create_oval(x - size * 0.3, y - size * 1.1, x - size * 0.1, y - size * 0.9, fill="white")
        eye2 = self.canvas.create_oval(x + size * 0.1, y - size * 1.1, x + size * 0.3, y - size * 0.9, fill="white")
        pupil1 = self.canvas.create_oval(x - size * 0.25, y - size * 1.05, x - size * 0.15, y - size * 0.95, fill="black")
        pupil2 = self.canvas.create_oval(x + size * 0.15, y - size * 1.05, x + size * 0.25, y - size * 0.95, fill="black")

        # Pico
        beak = self.canvas.create_polygon(x - size * 0.05, y - size * 0.9, x + size * 0.05, y - size * 0.9, x, y - size * 0.7, fill="orange")

        # Patas
        leg1 = self.canvas.create_line(x - size * 0.3, y + size * 0.5, x - size * 0.2, y + size * 0.7, width=5)
        leg2 = self.canvas.create_line(x + size * 0.3, y + size * 0.5, x + size * 0.2, y + size * 0.7, width=5)

    def animate(self):
        # Mover ligeramente el pingüino
        self.canvas.move("all", 5, 0)

        # Repetir la animación después de 100 milisegundos
        self.canvas.after(100, self.animate)

# Crear la ventana y el lienzo
root = tk.Tk()
root.title("Dibujo de Pingüino")
canvas = tk.Canvas(root, width=400, height=400, bg="light blue")
canvas.pack()

# Dibujar el pingüino
penguin_drawing = PenguinDrawing(canvas)
penguin_drawing.draw_penguin(100, 200, 40)

# Iniciar la animación
penguin_drawing.animate()

# Ejecutar la aplicación
root.mainloop()
