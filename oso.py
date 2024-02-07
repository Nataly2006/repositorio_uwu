import tkinter as tk

class BearDrawing:
    def __init__(self, canvas):
        self.canvas = canvas

    def draw_bear(self, x, y, size):
        # Cuerpo
        body = self.canvas.create_oval(x - size, y - size * 0.5, x + size, y + size * 0.5, fill="pink")

        # Cabeza
        head = self.canvas.create_oval(x - size * 0.8, y - size * 1.2, x + size * 0.8, y + size * 0.1, fill="pink")

        # Orejas
        ear1 = self.canvas.create_polygon(x - size * 0.9, y - size * 1.1, x - size * 0.5, y - size * 1.5, x - size * 0.1, y - size * 1.1, fill="pink")
        ear2 = self.canvas.create_polygon(x + size * 0.9, y - size * 1.1, x + size * 0.5, y - size * 1.5, x + size * 0.1, y - size * 1.1, fill="pink")

        # Ojos
        eye1 = self.canvas.create_oval(x - size * 0.5, y - size * 0.6, x - size * 0.3, y - size * 0.4, fill="black")
        eye2 = self.canvas.create_oval(x + size * 0.3, y - size * 0.6, x + size * 0.5, y - size * 0.4, fill="black")

        # Nariz
        nose = self.canvas.create_polygon(x - size * 0.1, y - size * 0.1, x + size * 0.1, y - size * 0.1, x, y + size * 0.1, fill="black")

        # Boca
        mouth = self.canvas.create_arc(x - size * 0.3, y - size * 0.2, x + size * 0.3, y + size * 0.2, start=30, extent=120, style=tk.ARC)

        # Brazos
        arm1 = self.canvas.create_line(x - size * 0.8, y, x - size * 1.2, y + size * 0.3, width=8)
        arm2 = self.canvas.create_line(x + size * 0.8, y, x + size * 1.2, y + size * 0.3, width=8)

    def animate(self):
        # Mover ligeramente el oso
        self.canvas.move("all", 5, 0)

        # Repetir la animación después de 100 milisegundos
        self.canvas.after(100, self.animate)

# Crear la ventana y el lienzo
root = tk.Tk()
root.title("osito termineitor")
canvas = tk.Canvas(root, width=400, height=400, bg="light yellow")
canvas.pack()

# Dibujar el oso
bear_drawing = BearDrawing(canvas)
bear_drawing.draw_bear(200, 200, 80)

# Iniciar la animación
bear_drawing.animate()

# Ejecutar la aplicación
root.mainloop()
