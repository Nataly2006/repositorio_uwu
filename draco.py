import tkinter as tk
from tkinter import ttk

def hacer_kawaii():
    label.config(text="¡Interfaz Kawaii!")

# Configuración principal de la ventana
root = tk.Tk()
root.title("Interfaz Kawaii")
root.geometry("200x200")

# Configurar fondo de color rosado
root.configure(bg='#FFB6C1')  # Código de color para el rosa

# Etiqueta principal
label = tk.Label(root, text="Bienvenido a la Interfaz Kawaii", font=("Helvetica", 16), bg='#FFB6C1')
label.pack(pady=10)

# Botón Kawaii
kawaii_button = ttk.Button(root, text="¡Hacer Kawaii!", command=hacer_kawaii)
kawaii_button.pack(pady=20)

# Ejecutar la interfaz
root.mainloop()

